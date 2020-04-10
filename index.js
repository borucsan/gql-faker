const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typeDefs.js')
const rootValue = require('./rootValue')

const server = new ApolloServer({
  typeDefs,
  rootValue,
  playground: true,
  introspection: true,
})

server
  .listen({
    port: process.env.PORT || 4567,
  })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
