import React from 'react';
import { notFound } from 'next/navigation';
import EventDetailContent from '@/app/components/news_and_events/event_detail_content';
import CareerApplicationForm from '@/app/components/careers/CareerApplicationForm';
import AdmissionCareer from '@/app/components/general/admission_cta';
import UpcomingEvents from '@/app/components/admissions/upcoming_events';
import { fetchNewsEvents, fetchNewsEventDetails, fetchNewsEventSEO, parseHtmlToParagraphs, parseHtmlListItems } from '@/app/lib/api';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const seoData = await fetchNewsEventSEO(slug);

    if (seoData) {
        return {
            title: seoData.meta_title || seoData.title,
            description: seoData.meta_description,
            keywords: seoData.meta_keywords,
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
                canonical: seoData.canonical_url,
            },
        };
    }

    // Fallback metadata if SEO endpoint doesn't return data (or returns 404 but item exists)
    // We'll try to fetch the item details to get basic info
    try {
        const item = await fetchNewsEventDetails(slug);
        if (item) {
            return {
                title: item.heading,
                description: item.heading, // We could parse content if needed
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
    // Tags could be Department or Category
    const tags = [];
    if (newsEvent.date) tags.push({ label: newsEvent.date, color: 'orange' });
    if (newsEvent.category_name) tags.push({ label: newsEvent.category_name, color: 'blue' });
    if (newsEvent.department_name) tags.push({ label: newsEvent.department_name, color: 'red' });

    // Parse description/content
    // Existing component expects array of paragraphs
    const description = parseHtmlToParagraphs(newsEvent.content);

    // Images
    // Main image is newsEvent.images[0] or fallback
    const mainImage = {
        src: newsEvent.images && newsEvent.images.length > 0
            ? newsEvent.images.find(img => img.is_featured)?.image || newsEvent.images[0].image
            : 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
        alt: newsEvent.heading
    };

    // Gallery images (rest of images)
    // Filter out the main image if used, or just pass all?
    // Let's pass all images as gallery, or exclude the featured one if it's the main image.
    // The API returns a list of images.
    const galleryImages = newsEvent.images ? newsEvent.images.map(img => ({
        id: img.id,
        src: img.image,
        alt: img.alt || newsEvent.heading
    })) : [];

    // Set breadcrumb data
    const breadcrumbData = {
        heroImage: mainImage.src,
        pageTitle: "News & Events",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "News & Events", href: "/news-and-events" },
        ],
    };

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.__breadcrumbData = ${JSON.stringify(breadcrumbData)};`,
                }}
            />
            <EventDetailContent
                tags={tags}
                title={newsEvent.heading}
                description={description}
                mainImage={mainImage}
                galleryImages={galleryImages}
            />
            {/* <CareerApplicationForm
                heading="Registration Form"
                description="Share your details to stay connected with Kalinga University, receive updates, and participate in alumni activities and events."
                backgroundClass="bg-[var(--dark-blue)]"
                hideTabs={true}
                submitLabel="Submit Career Details"
                useArrowSubmitButton={true}
                arrowSubmitVariant="white"
            /> */}
            <UpcomingEvents />
            <AdmissionCareer />
        </>
    );
}
