import React from 'react';
import { notFound } from 'next/navigation';
import EventDetailContent from '@/app/components/news_and_events/event_detail_content';
import CareerApplicationForm from '@/app/components/careers/CareerApplicationForm';
import AdmissionCareer from '@/app/components/general/admission_cta';
import UpcomingEvents from '@/app/components/admissions/upcoming_events';
import { fetchNewsEvents, fetchNewsEventDetails, fetchNewsEventSEO, parseHtmlToParagraphs, parseHtmlListItems } from '@/app/lib/api';

// Brochures hosted in /public for events whose CMS entry has no `link` yet
const EVENT_BROCHURES = {
    'two-days-global-conference-on-recent-trends-in-law': '/brochures/global-law-conference-2026.pdf',
};

// Static Generation for News & Events Pages
export async function generateStaticParams() {
    try {
        const newsResponse = await fetchNewsEvents({ is_published: true });
        const news = newsResponse?.results || newsResponse;
        return news.map((item) => ({
            slug: item.slug,
        }));
    } catch (error) {
        console.error("Error generating static params for news & events:", error);
        return [];
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const seoData = await fetchNewsEventSEO(slug);

    if (seoData) {
        return {
            title: {
                absolute: seoData.meta_title || seoData.title,
            },
            description: seoData.meta_description,
            keywords: seoData.meta_keywords || seoData.keywords,
            authors: seoData.author ? [{ name: seoData.author }] : [{ name: "Kalinga University" }],
            openGraph: {
                title: seoData.og_title || seoData.meta_title,
                description: seoData.og_description || seoData.meta_description,
                images: seoData.og_image ? [seoData.og_image] : [],
            },
            twitter: {
                card: "summary_large_image",
                title: seoData.twitter_title || seoData.meta_title,
                description: seoData.twitter_description || seoData.meta_description,
                images: seoData.twitter_image ? [seoData.twitter_image] : [],
            },
            alternates: {
                canonical: seoData.canonical_url || `https://kalingauniversity.ac.in/news-and-events/${slug}`,
            },
        };
    }

    // Fallback metadata if SEO endpoint doesn't return data (only if empty)
    try {
        const item = await fetchNewsEventDetails(slug);
        if (item) {
            const title = `${item.heading} | Kalinga University`;
            return {
                title: {
                    absolute: title,
                },
                description: item.heading,
                alternates: {
                    canonical: `https://kalingauniversity.ac.in/news-and-events/${slug}`,
                }
            }
        }
    } catch (e) {
        console.error("Error fetching fallback metadata", e);
    }

    return {
        title: 'News & Events | Kalinga University',
    };
}

export default async function NewsEventDetailsPage({ params }) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    let newsEvent = null;

    try {
        const data = await fetchNewsEventDetails(decodedSlug);
        // Detail endpoint returns the object directly, not in results array
        if (data) {
            newsEvent = data;
        }
    } catch (error) {
        console.error("Error fetching news event details:", error);
    }

    if (!newsEvent) {
        notFound();
    }

    // Transform API data for the UI component
    const tags = [];
    if (newsEvent.date) tags.push({ label: newsEvent.date, color: 'orange' });
    if (newsEvent.category_name) tags.push({ label: newsEvent.category_name, color: 'blue' });
    if (newsEvent.department_name) tags.push({ label: newsEvent.department_name, color: 'red' });

    // Parse description/content
    const description = parseHtmlToParagraphs(newsEvent.content);

    // Images
    const mainImage = {
        src: newsEvent.images && newsEvent.images.length > 0
            ? newsEvent.images.find(img => img.is_featured)?.image || newsEvent.images[0].image
            : 'https://cdn.kalingauniversity.ac.in/common/student.jpg',
        alt: newsEvent.heading
    };

    // Brochure: prefer the CMS `link` field, fall back to a locally hosted PDF
    const brochureUrl = newsEvent.link || EVENT_BROCHURES[decodedSlug] || '';

    const galleryImages = newsEvent.images ? newsEvent.images.map(img => ({
        id: img.id,
        src: img.image,
        alt: img.alt || newsEvent.heading
    })) : [];


    return (
        <>
            <EventDetailContent
                tags={tags}
                title={newsEvent.heading}
                description={description}
                mainImage={mainImage}
                galleryImages={galleryImages}
                brochureUrl={brochureUrl}
            />
            <UpcomingEvents />
            <AdmissionCareer />
        </>
    );
}
