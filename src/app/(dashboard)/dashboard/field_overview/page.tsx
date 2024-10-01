import Humidity from "@/components/field_overview/Humidity";
import HumidityBubbleChart from "@/components/field_overview/HumidityBubbleChart";
import PhLevel from "@/components/field_overview/PhLevel";
import SoilHealth from "@/components/field_overview/SoilHealth";
import Temperature from "@/components/field_overview/Temperature";
import WaterLevel from "@/components/field_overview/WaterLevel";
import WaterLevelLineChart from "@/components/field_overview/WaterLevelLineChart";
import PageTitle from "@/components/ui/PageTitle";

export default function page() {
    return (
        <main className="lg:px-16">
            <PageTitle title="Field Overview" />

            <div className="flex flex-col space-y-2 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="col-span-3 border-b border-slate-200 px-10 py-5">
                        <Humidity />
                        <HumidityBubbleChart />
                    </div>
                    <div className="col-span-2 border-b border-slate-200 px-10 py-5 flex flex-col gap-y-10">
                        <Temperature />
                        {/* <TemperatureLineChart /> */}
                    </div>
                    <div className="col-span-3">
                        <div className="grid lg:grid-cols-2">
                            <div className="px-5">
                                <SoilHealth />
                            </div>
                            <div className="px-5">
                                <PhLevel />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 border-l border-slate-200 px-5 py-5">
                        <WaterLevel />
                        <WaterLevelLineChart />
                    </div>
                </div>
            </div>
        </main>
    );
}
