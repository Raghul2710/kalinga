import AdminLeadershipSection from "../components/administrationleadership/adminleadershipsection";
import AutoBreadcrumb from "../components/layout/BreadcrumbData";
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "Administration & Leadership",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Administration & Leadership', href: '/leadership' }
  ]
};
export default function Page() {
  return (
    <>
      <AutoBreadcrumb data={breadcrumbData} />
      <AdminLeadershipSection />
    </>
  );
}