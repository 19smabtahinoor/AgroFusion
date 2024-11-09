import dbConnect from "@/lib/functions/dbConnect";
import sendResponse from "@/lib/functions/sendResponse";
import HumidityModel from "@/models/Humidity";
import { Humidity } from "@/types/types";
import { NextRequest } from "next/server";
import { subDays } from 'date-fns';

export async function POST(request: NextRequest) {
    await dbConnect();
    try {
        const data = await request.json() as Humidity;
        const response = await HumidityModel.create(data);
        return sendResponse(true, 'new humidity data posted successfully', 200, response);

    } catch (error) {
        console.log("🚀 ~ POST ~ error: /api/signup - error signing up user", error);
        return sendResponse(false, 'error signing up user', 400, error);
    }
}
// export async function GET() {
//     await dbConnect();
//     try {
//         const humidities = await HumidityModel.find({}) as Humidity[];
//         return sendResponse(true, `humidities sent successfully , count : ${humidities.length}`, 200, humidities);

//     } catch (error) {
//         console.log("🚀 ~ POST ~ error: /api/signup - error signing up user", error);
//         return sendResponse(false, 'error signing up user', 400, error);
//     }
// }


// export async function GET() {
//     await dbConnect();
//     try {
//         const startOfDay = new Date();
//         startOfDay.setHours(0, 0, 0, 0);

//         const endOfDay = new Date();
//         endOfDay.setHours(23, 59, 59, 999);

//         const humidities = await HumidityModel.find({}) as Humidity[];

//         return sendResponse(true, `Today's water levels sent successfully, count: ${humidities.length}`, 200, humidities);

//     } catch (error) {
//         console.log("🚀 ~ GET ~ error: /api/water level - error fetching today's water levels", error);
//         return sendResponse(false, 'Error fetching water levels', 400, error);
//     }
// }

export async function GET() {
    await dbConnect();
    try {
        // Get the date 10 days ago from today
        const tenDaysAgo = subDays(new Date(), 10);

        // Find humidity data from the last 10 days
        const humidities = await HumidityModel.find({
            timestamp: { $gte: tenDaysAgo }
        }) as Humidity[];

        return sendResponse(true, `Humidities from the last 10 days sent successfully, count: ${humidities.length}`, 200, humidities);

    } catch (error) {
        console.log("🚀 ~ GET ~ error: Error fetching humidity data", error);
        return sendResponse(false, 'Error fetching humidity data', 400, error);
    }
}