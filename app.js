const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const schemaJS = require('./schema');

const schema = buildSchema(schemaJS.getSchema('./schema'));

class Human {
  name() {
    return "John";
  }
}

const root = {
  hello: () => {
    return 'Hello world!';
  },
  human: () => {
    return new Human();
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
