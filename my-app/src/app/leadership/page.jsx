import AdminLeadershipSection from "../components/administrationleadership/adminleadershipsection";

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "Leadership",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Leadership', href: '/leadership' }
  ]
};
if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}
export default function Page() {
  return (
    <>
      <AdminLeadershipSection />
    </>
  );
}