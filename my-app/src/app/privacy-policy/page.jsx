'use client';

import React, { useEffect } from 'react'
import SectionHeading from '../components/general/SectionHeading'

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "Privacy Policy",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy', href: '/privacy-policy' }
  ]
};

export default function PrivacyPolicyPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);

  return (
      <section className='container mx-auto px-6 py-16'>
        <div className='text-center'>
          <SectionHeading 
            title="Privacy Policy"
            subtitle=""
            titleClassName="text-center"
            subtitleClassName="text-center text-sm sm:text-base text-[var(--lite-sand)] max-w-3xl mx-auto"
          />
        </div>
        <div className='mt-8 text-justify'>
          <p className='text-sm'>
          We value the trust you place in us and recognise the importance of secure transactions and information privacy. This Privacy Policy describes how Kalinga University collect, use, share or otherwise process your personal information through its website <a href="https://kalingauniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://kalingauniversity.ac.in/</a>, 
          While you may be able to browse certain sections of the Platform without registering with us, however Your personal information will primarily be stored and processed in India and may have By visiting this Platform, providing your information or availing out services, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. If you do not agree, please do not use or access our Platform.
          </p>
          <h3 className='text-2xl pt-6'>Collection of Your Information</h3>
          <p className='text-sm'>
          When you use our Platform, we collect and store your information, which is provided by you from time to time. In general, you can browse the Platform without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which are optional. You always have the option to not provide information by choosing not to use a particular service, product or feature on the Platform. We may track your preferences and other information that you choose to provide on our Platform. We use this information to do internal research on our users' demographics, interests, and behaviour to better understand, protect and serve our users. This information is compiled and analysed on an aggregated basis. 
          This information may include the URL that you just came from (whether this URL is on our Platform or not), which URL you next go to (whether this URL is on our Platform or not), your computer browser information, and your IP address. We may collect personal information (such as email address, address, name, phone number, credit card/debit card and other payment instrument details) from you when you set up an account or transact with us or participate in any event or contest. While you can browse some sections of our Platform without being a registered member, certain activities such as entrance exam, campus tour, enquiry, feedback, etc do require registration. If you choose to post messages on our message boards, chat rooms or other message areas or leave feedback on the Platform or the social media handles maintained by us, we will collect that information you provide to us. We retain this information as necessary for internal research and analysis as permitted by law.
          </p>
          <p className='text-sm pt-2'>
          If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Platform, we may collect such information into a file specific to you. In our efforts to continually improve our branding, we and our affiliates collect and analyse demographic and profile data about our users' activity on our Platform. We identify and use your IP address to help diagnose problems with our server, and to administer our Platform. Your IP address is also used to help identify you and to gather broad demographic information.
          </p>
          <h3 className='text-2xl pt-6'>Cookies</h3>
          <p className='text-sm'>
          We use data collection devices such as "cookies" on certain pages of the Platform to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on your hard drive that assist us in providing our services. Cookies do not contain any of your personal information. We offer certain features that are only available through the use of a "cookie". We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests. Most cookies are "session cookies," meaning that they are automatically deleted from your hard drive at the end of a session. You are always free to decline/delete our cookies if your browser permits, although in that case, you may not be able to use certain features on the Platform, and you may be required to re-enter your password more frequently during a session. 
          Additionally, you may encounter "cookies" or other similar devices on certain pages of the Platform that are placed by third parties. We do not control the use of cookies by third parties. We use cookies from third-party partners such as Google Analytics for marketing and analytical purposes. Google Analytics help us understand how our customers use the site. You can also control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on the services.
          </p>
          <h3 className='text-2xl pt-6'>Sharing of personal information</h3>
          <p className='text-sm'>
          We may disclose personal information if required to do so by law or in good faith belief that such disclosure is reasonably necessary to respond to court orders, or other legal process. We may disclose personal information to law enforcement agencies, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms of Use or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.
          </p>
          <h3 className='text-2xl pt-6'>Changes to this Privacy Policy</h3>
          <p className='text-sm'>
          Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes to our information practices.
          </p>
        </div>
      </section>
  )
}