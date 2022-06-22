import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("itemstock")
export class ItemStock {
    @PrimaryGeneratedColumn()
    id: null
    @Column({nullable: false})
    name: string
    @Column({nullable: true})
    boxes: number
    @Column({nullable: true})
    crades: number
    @Column({nullable: true})
    bottles: number
}