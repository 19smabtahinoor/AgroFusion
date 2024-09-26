"use client"

import ModuleTitle from "../ui/ModuleTitle";
import ViewReportBtn from "../ui/ViewReportBtn";
import React, { useEffect, useState } from "react";
// import styles from "@/styles/Home.module.css";
import { getData } from "@/datacenter/esp32";


 const Humidity = () => {

    const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [getData]);

  
    return (
        <div className="flex justify-between">
            <div>
                <div className="mb-3">
                    <ModuleTitle title="Humidity" />
                </div>
                <p className="text-3xl font-bold">{data?.TDS} ppm</p>
                <h1 className="text-lg">Today&apos;s Humidity : 77%</h1>
            </div>
            <ViewReportBtn />
        </div>
    );
}

export default Humidity