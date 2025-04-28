import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource(
  isProduction
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: true,
        logging: false,
        ssl: {
          rejectUnauthorized: false,
        },
        entities: [User, Credential, Order, Product, Category],
        subscribers: [],
        migrations: [],
      }
    : {
        type: "postgres",
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        synchronize: true,
        logging: false,
        entities: [User, Credential, Order, Product, Category],
        subscribers: [],
        migrations: [],
      }
);
