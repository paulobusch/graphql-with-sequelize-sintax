import express from 'express';
import graphqlHTTP from 'express-graphql';
import db from './database';
import { UsersSchema } from './schemas/users-schema';
import { compileSchema } from 'decapi'

const schema = compileSchema([UsersSchema]);
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

db.sync({ logging: false })
  .then(() => { console.log('Database Synchronized'); });

app.listen(3000, () => {
  console.log('Api ready on port 3000');
});
