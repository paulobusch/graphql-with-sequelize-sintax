import express from 'express';
import graphqlHTTP from 'express-graphql';
<<<<<<< HEAD
import db from './database';
=======
>>>>>>> bbdfc99de7633614789b7b31cc9e26506cd48018
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
<<<<<<< HEAD

db.sync({ logging: false })
  .then(() => { console.log('Database Synchronized'); });

app.listen(3000, () => {
  console.log('Api ready on port 3000');
});
=======
app.listen(3000, () => {
  console.log('Api ready on port 3000');
});
>>>>>>> bbdfc99de7633614789b7b31cc9e26506cd48018
