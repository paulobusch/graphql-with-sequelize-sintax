import { ObjectType, Field, Arg } from "decapi";
<<<<<<< HEAD
import { Table, Column, PrimaryKey, Model, AllowNull, Unique, CreatedAt, UpdatedAt, DeletedAt, DataType } from "sequelize-typescript";

@Table
@ObjectType()
export class User extends Model<User> {
    @Field()
    @Column({ primaryKey: true, type: DataType.STRING(8) })
    id!: string;
    
    @Field()
    @Column({ type: DataType.STRING(200), allowNull: false, unique: true }) 
    name!: string;
    
    @Field()
    @Column({ type: DataType.STRING(200), allowNull: false, unique: true }) 
    email!: string;
    
    @Field()
    @Column({ allowNull: false })
    birth!: Date;

    @Field()
    @Column({ allowNull: false }) @CreatedAt
    created?: Date;

    @Field()
    @Column({ allowNull: false }) @UpdatedAt
    updated?: Date;
    
    @Field()
    @Column @DeletedAt
    deleted?: Date;

    static instance(user: {
        id: string,
        name: string,
        email: string,
        birth: Date
    }): User {
        return Object.assign(new User(), user);        
    }

    remove() {
        this.updated = new Date();
        this.deleted = new Date();
=======

@ObjectType()
export class User {
    @Field() id: String;
    @Field() name: String;
    @Field() email: String;
    @Field() age: Number;

    constructor(
        id: string,
        name: string,
        email: string,
        age: number
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
>>>>>>> bbdfc99de7633614789b7b31cc9e26506cd48018
    }
}