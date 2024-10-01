import dbConnect from "@/lib/functions/dbConnect";
import sendResponse from "@/lib/functions/sendResponse";
import HumidityModel from "@/models/Humidity";
import { Humidity } from "@/types/types";
import { NextRequest } from "next/server";

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
export async function GET() {
    await dbConnect();
    try {
        const humidities = await HumidityModel.find({}) as Humidity[];
        return sendResponse(true, `humidities sent successfully , count : ${humidities.length}`, 200, humidities);

    } catch (error) {
        console.log("🚀 ~ POST ~ error: /api/signup - error signing up user", error);
        return sendResponse(false, 'error signing up user', 400, error);
    }
}