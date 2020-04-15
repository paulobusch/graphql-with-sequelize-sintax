import express from 'express';
import graphqlHTTP from 'express-graphql';
import { UsersSchema } from './schemas/users-schema';
import { compileSchema } from 'decapi'
import { UserModel } from './resolvers/users/user.model';
import { getValidators, getTreatments } from './utils/decorators';

const schema = compileSchema([UsersSchema]);
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

// db.sync({ logging: false })
//   .then(() => { console.log('Database Synchronized'); });

app.listen(3000, () => {
  console.log('Api ready on port 3000');
});


function validate(entity: any): boolean {
  for (let prop in entity) {
    const validators = getValidators(entity, prop);
    const value = Reflect.get(entity, prop);
    for (let index in validators) {
      const validator = validators[index];
      const valid = validator.call(value);
      if (!valid) {
        console.log('invalid');
        console.log('property: ' + prop + ' validator: ' + validator.type.toString());
        return false;
      }
    }
  }  
  return true;
}

const user = UserModel.instance({
  id: 'sadfasdf',
  cpf: '32112332187'
});

console.log(user);

for (let index in user) {
  console.log(index);
  console.log(Reflect.get(UserModel, index));
}