const Human = require('./type/Human');

const query = {
  hello: () => {
    return 'Hello world!';
  },
  human: () => {
    return new Human();
  },
};

module.exports = query;
