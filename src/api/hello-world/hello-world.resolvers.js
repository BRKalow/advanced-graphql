module.exports = {
  Query: {
    helloWorld() {
      return {
        message: 'hello world'
      };
    }
  },
  Mutation: {
    createHelloWorld(_, args) {
      return {
        message: args.input.message
      };
    }
  }
};
