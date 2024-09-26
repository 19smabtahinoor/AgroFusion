import ModuleTitle from "../ui/ModuleTitle";

export default function PhLevel() {
    return (
        <div className="py-5">
            <ModuleTitle title="pH Level" />
            <h1 className="text-slate-500">Lorem ipsum dolor sit amet.</h1>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center items-center w-[300px] h-[300px] text-white rounded-full bg-soil mt-8">
                    <h1 className="text-8xl font-semibold">06</h1>
                    <h1>Acidic</h1>
                </div>
            </div>
        </div>
    );
}
