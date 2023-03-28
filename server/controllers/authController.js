import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError('Email already in use');
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('login user');
};

const updateUser = async (req, res) => {
  res.send('updateUser user');
};

export { login, register, updateUser };
