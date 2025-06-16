import dotenv from 'dotenv';
dotenv.config();

type Config = {
    port: number;
    designPort: number;
    uploadPort:number;
    subscriptionPort: number;
    dbURL: string;
    dbName: string;
    designURL: string;
    uploadURL: string;
    subscriptionURL: string;
}



const config:Config = {
    port: Number(process.env.PORT),
    designPort: Number(process.env.DESIGN_PORT),
    uploadPort: Number(process.env.UPLOAD_PORT),
    subscriptionPort: Number(process.env.UPLOAD_PORT),

    dbURL: String(process.env.MONGODB_URL),
    dbName: String(process.env.DB_NAME),

    designURL: String(process.env.DESIGN),
    uploadURL: String(process.env.UPLOAD),
    subscriptionURL: String(process.env.SUBSCRIPTION),
}

export default config;