
import { SchemaRoot, Query, Mutation, Arg } from 'decapi';
import { Paginated } from '../utils/paginated';

import { QueriesHandler } from '../resolvers/queriesHandler';
import { GetUser } from '../resolvers/users/queries/get-user.query';
import { ListUsers } from '../resolvers/users/queries/list-users.query';

import { User } from '../resolvers/users/users.schema';
import { MutationsHandler } from '../resolvers/mutationsHandler';
import { CreateUser } from '../resolvers/users/mutations/create-user.mutation';
import { UpdateUser } from '../resolvers/users/mutations/update-user.mutation';
import { RemoveUser } from '../resolvers/users/mutations/remove-user.mutation';

@SchemaRoot() 
export class UsersSchema {
    @Query({ type: User }) 
    async user(filter: GetUser): Promise<User> {
        return await QueriesHandler.execute<User>(filter);
    }

<<<<<<< HEAD
    @Query({ type: Paginated }) 
    async users(filters: ListUsers): Promise<Paginated<User>> { 
        const users = await QueriesHandler.execute<Paginated<User>>(filters);
        console.log(users);
        return users;
=======
    @Query({ type: [User]! }) 
    async users(filters: ListUsers): Promise<Paginated<User>> { 
        return await QueriesHandler.execute<Paginated<User>>(filters);
>>>>>>> bbdfc99de7633614789b7b31cc9e26506cd48018
    }
    
    @Mutation({ type: User })
    async createUser(mutation: CreateUser): Promise<User> {
        return await MutationsHandler.execute<User>(mutation);
    }
    
    @Mutation({ type: User }) 
    async updateUser(mutation: UpdateUser): Promise<User> { 
        return await MutationsHandler.execute<User>(mutation);
    }
    @Mutation({ type: Boolean }) 
    async removeUser(mutation: RemoveUser): Promise<boolean> { 
        return await MutationsHandler.execute<boolean>(mutation);
    }
}