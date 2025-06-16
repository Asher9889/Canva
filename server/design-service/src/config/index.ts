import dotenv from 'dotenv';
dotenv.config();

type Config = {
    port: number;
    dbURL: string;
    dbName: string;
}



const config:Config = {
    port: Number(process.env.PORT),
    dbURL: String(process.env.MONGODB_URL),
    dbName: String(process.env.DB_NAME)
}

export default config;