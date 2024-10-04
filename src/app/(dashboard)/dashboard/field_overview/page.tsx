import Humidity from "@/components/field_overview/Humidity";
import HumidityBubbleChart from "@/components/field_overview/HumidityBubbleChart";
import PhLevel from "@/components/field_overview/PhLevel";
import SoilHealth from "@/components/field_overview/SoilHealth";
import Temperature from "@/components/field_overview/Temperature";
import WaterLevel from "@/components/field_overview/WaterLevel";
import WaterLevelLineChart from "@/components/field_overview/WaterLevelLineChart";
import PageTitle from "@/components/ui/PageTitle";
import getQuery from "@/lib/functions/FetchQuery";

export default async function Page() {

    const { data: humidityData } = await getQuery('https://agro-fusion.vercel.app/api/humidity/');
    const { data: waterLevel } = await getQuery('https://agro-fusion.vercel.app/api/water_level/');

    return (
        <main className="lg:px-16">
            <PageTitle title="Field Overview" />

            <div className="flex flex-col space-y-2 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-8">
                    <div className="col-span-2 border-b border-slate-200 px-10 py-5">
                        <PhLevel />
                    </div>
                    <div className="col-span-2 border-b border-slate-200 px-10 py-5 flex flex-col gap-y-10">
                        <Temperature />
                    </div>
                    <div className="col-span-4">
                        <SoilHealth />
                    </div>
                    <div className="col-span-4">
                        <div className="px-5">
                            <Humidity />
                            <HumidityBubbleChart data={humidityData} />
                        </div>
                    </div>
                    <div className="col-span-4 border-l border-slate-200 px-5 py-5">
                        <WaterLevel />
                        <WaterLevelLineChart data={waterLevel} />
                    </div>
                </div>
            </div>
        </main>
    );
}
