import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cover {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    color: string

    @Column()
    description: string

}