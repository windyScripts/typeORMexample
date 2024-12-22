import { Entity, PrimaryGeneratedColumn, Column, OneToOne, Relation, OneToMany } from "typeorm"
import { Introduction } from "./Introduction"
import { Cover } from "./Cover"

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

    @OneToMany(()=>Cover,(cover)=>cover.book)
    cover: Cover[]

}