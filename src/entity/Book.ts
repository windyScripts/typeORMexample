import { Entity, PrimaryGeneratedColumn, Column, OneToOne, Relation } from "typeorm"
import { Introduction } from "./Introduction"

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    pages: number

    @Column()
    edition: number

    @OneToOne(()=>Introduction,(introduction)=>introduction.book)
    introduction: Relation<Introduction>

}