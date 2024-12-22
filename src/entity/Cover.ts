import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Book } from "./Book"

@Entity()
export class Cover {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    color: string

    @Column()
    description: string

    @ManyToOne(() => Book, (book) => book.cover)
    book: Book



}