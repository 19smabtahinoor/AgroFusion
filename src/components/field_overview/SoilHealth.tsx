import ModuleTitle from "../ui/ModuleTitle";
import SoilHealthPieChart from "./SoilHealthPieChart";

export default function SoilHealth() {
    return (
        <div className="border-r border-slate-300 py-5">
            <ModuleTitle title="Soil Health" />
            <p className="text-slate-500 mb-5">Lorem ipsum</p>
            <SoilHealthPieChart />
        </div>
    );
}
