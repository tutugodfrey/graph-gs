import { users } from './db';

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
      return users.find(user => user.id === parseInt(id));
    },
    users: (parent, args, context, info) => {
      return users;
    }
  },

  Mutation: {
    createUser: (parent, { id, name, email, age }, context, info) => {
      const newUser = { id, name, email, age };
      users.push(newUser);
      return newUser;
    },
    updateUser: (parent, { id, name, email, age }, context, info) => {
      let newUser = users.find(user => user.id === id);
      newUser.name = name || newUser.name;
      newUser.email = email || newUser.email;
      newUser.age = age || newUser.age;

      return newUser;
    },
    deleteUser: (parent, { id }, context, info) => {
      const userIndex = user.findIndex(user => user.id === parseInt(id));
      if (userIndex === -1) throw new Error('user not found');
      const deleteUser = users.splice(userIndex, 1);
      return deleteUser[0]
    }
  }
};

export default resolvers;
