module.exports = {
  resolvers: require('./hello-world.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('hello-world/hello-world.graphql')
};
