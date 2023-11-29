import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        default: 0
    })
    total!: number

    @Column({ length: 255 })
    products!: string
}