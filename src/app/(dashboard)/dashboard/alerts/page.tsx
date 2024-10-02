import AlertsComp from "@/components/alerts/AlertsComp";
import PageTitle from "@/components/ui/PageTitle";


export default function page() {


   
    return (
        <main className="lg:px-16">
        <PageTitle title="Alerts" />

        <div className="flex flex-col space-y-2 py-8">
            <AlertsComp />
        </div>
    </main>
    );
}
