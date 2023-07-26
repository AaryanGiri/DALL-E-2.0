import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

const connectDB = () => {
  mongoose.set('strictQuery', true);
  console.log(process.env.MONGODB_URL)
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;