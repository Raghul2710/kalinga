import APITable from "../components/general/api-table";


const breadcrumbData = {
    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campuslife.webp",
    pageTitle: "MOU",
    customBreadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'MOU', href: '/mou' }
    ]
};

if (typeof window !== "undefined") {
    window.__breadcrumbData = breadcrumbData;
}

export default function MOUPage() {
    return (
        <>


            {/* Test APITable with the MOU table */}
            <APITable
                tableId="10"
                title="Active Memorandum of Understanding"
                className="py-16"
                overflowX={true}
            />
        </>
    );
}
