import "reflect-metadata"
import { DataSource } from "typeorm"
import { Author } from "./entity/Author"
import { Book } from "./entity/Book"
import { Cover } from "./entity/Cover"
import { Introduction } from "./entity/Introduction"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "Books",
    synchronize: true,
    logging: false,
    entities: [Author, Book, Cover, Introduction],
    migrations: [],
    subscribers: [],
})
