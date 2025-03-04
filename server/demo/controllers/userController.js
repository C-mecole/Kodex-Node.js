const userRepository = require("../data/repositories/userRepository");

const getUsers = async (_req, res) => {
  const users = await userRepository.getAllUsers();
  res.json(users);
};

const getUser = async (req, res) => {
  const user = await userRepository.getUserById(req.params.id);
  res.json(user);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const newUser = await userRepository.createUser(name, email);
  res.status(201).json(newUser);
};

const deleteUser = async (req, res) => {
  const response = await userRepository.deleteUser(req.params.id);
  res.json(response);
};

module.exports = { getUsers, getUser, createUser, deleteUser };
