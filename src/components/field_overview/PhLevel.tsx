"use client"
import { useEffect, useState } from "react";
import ModuleTitle from "../ui/ModuleTitle";
import { getData } from "@/datacenter/esp32";
import { SoilData } from "@/types/types";

export default function PhLevel() {
    const [soilData, setSoilData] = useState<SoilData>({
        Altitude: 0,
        Humidity: 0,
        Latitude: 0,
        Longitude: 0,
        SoilMoisture1: 0,
        SoilMoisture2: 0,
        TDS: 0,
        Temperature: 0,
        Turbidity: 0,
        WaterLevel1: 0,
        WaterLevel2: 0,
        pH:0
      });

      const phColors = [
        "#FF0000", // pH 0 (Strong Acid, Red)
        "#FF3300", // pH 1
        "#FF6600", // pH 2
        "#FF9900", // pH 3
        "#FFCC00", // pH 4
        "#FFFF00", // pH 5
        "#CCFF00", // pH 6
        "#66FF00", // pH 7 (Neutral, Green)
        "#00FF33", // pH 8
        "#00FF66", // pH 9
        "#00FF99", // pH 10
        "#00FFCC", // pH 11
        "#00FFFF", // pH 12
        "#0099FF", // pH 13
        "#0000FF"  // pH 14 (Strong Base, Blue)
      ];
      
      const pHColor = phColors[soilData?.pH]
console.log(pHColor)
      
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setSoilData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

    return (
        <div className="py-5">
            <ModuleTitle title="pH Level" />
            <h1 className="text-slate-500">Lorem ipsum dolor sit amet.</h1>
            <div className="flex justify-center">
                <div className={`flex flex-col justify-center items-center w-[300px] h-[300px] text-white rounded-full mt-8`} style={{backgroundColor: pHColor}}>
                    <h1 className="text-8xl font-semibold">{soilData?.pH}</h1>
                    <h1>{soilData?.pH>=0 && soilData?.pH <=6 ? "Acidic" : soilData?.pH >=8 && soilData?.pH <=14 ? "Alkaline":"Neutral"}</h1>
                </div>
            </div>
        </div>
    );
}
