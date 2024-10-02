
export type User = {
    name: string,
    email: string,
    password: string,
    verificationCode: string,
    verificationCodeExpiry: Date,
    isVerified: boolean,
    isAdmin: boolean,
};


export type SignUpFormData = {
    name: string,
    email: string,
    password: string;
};

export type SignInFormData = {
    email: string,
    password: string;
};

export type VerificationCodeFromData = {
    email: string;
    verificationCode: string;
};

export type HumiditySchemaType = {
    humidity: number,
};

export type WaterLevelSchemaType = {
    water_level: number,
};

export type Humidity = {
    _id: string,
    humidity: number,
    createdAt: string,
    updatedAt: string;
};

export type WaterLevel = {
    _id: string,
    water_level: number,
    createdAt: string,
    updatedAt: string;
};

export type SoilData = {
    Altitude: number,
    Humidity: number,
    Latitude: number,
    Longitude: number,
    SoilMoisture1: number,
    SoilMoisture2: number,
    TDS: number,
    Temperature: number,
    Turbidity: number,
    WaterLevel1: number,
    WaterLevel2: number;
};