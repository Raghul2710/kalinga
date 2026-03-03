Model breradcrumb

const breadcrumbData = {
  heroImage: "https://cdn.kalingauniversity.ac.in/common/student.jpg",
  pageTitle: "Corpodsdssrate Social Responsibility",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'C dSR', href: '/csr' }
  ]
};

// Register it globally (no import needed - this pattern works automatically)
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}
