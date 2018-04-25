const project = require('./project');
const helloWorld = require('./hello-world');
const loaders = require('./loaders');
const merge = require('lodash/merge');

module.exports = {
  typeDefs: [project.typeDefs, helloWorld.typeDefs].join(' '),
  resolvers: merge({}, project.resolvers, helloWorld.resolvers),
  context: {
    models: {
      project: project.model
    },
    loaders: loaders()
  }
};
