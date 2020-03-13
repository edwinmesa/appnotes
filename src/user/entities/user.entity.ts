import { Entity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    @Generated('uuid')
    uuid: string

    @Column({
        unique: true, 
        nullable: false
    })
    username: string

    @Column({
        nullable: false
    })
    password: string

    @Column({
        nullable: false
    })
    fullName: string

    @Column({
        nullable: false
    })
    age: number

    @Column({
        unique: true, 
        nullable: false
    })
    email: string

    @Column({
        default: 1
    })
    status: number

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp'
    })
    created_at: Date
}