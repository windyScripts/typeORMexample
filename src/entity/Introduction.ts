import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Relation } from "typeorm"
import { Book } from "./Book"

@Entity()
export class Introduction {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @Column()
    length: number

    @OneToOne(() => Book, (book)=>book.introduction)
    @JoinColumn()
    book: Relation<Book>

}