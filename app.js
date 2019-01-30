const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const schemaJS = require('./schema/schema');
const queryJS = require('./query/query');

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: buildSchema(schemaJS.getSchema('./schema')),
  rootValue: queryJS,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
