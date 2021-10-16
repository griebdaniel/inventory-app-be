import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import dotenv from 'dotenv';
import { PrismaClient, Supply } from '@prisma/client';
import { find, isEqual, sortBy, differenceWith } from 'lodash';

dotenv.config();

const prisma = new PrismaClient();


const schema = buildSchema(`
  type Supply {
    name: String!
    quantity: Int
  }

  type Query {
    supplies: [Supply]
  }
`);

const root = {
    supplies: async () => {
        return await prisma.supply.findMany();
    }
};

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(port, () => {
    console.log(`Inventory app listening at http://localhost:${port}`);
});
