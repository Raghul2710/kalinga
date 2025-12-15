import AdminLeadershipSection from "../components/administrationleadership/adminleadershipsection";
import AutoBreadcrumb from "../components/layout/BreadcrumbData";
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/infra.webp",
  pageTitle: "Administration & Leadership",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Administration & Leadership', href: '/administration' }
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