import { ObjectType, Field, Arg } from "decapi";
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
    }
}