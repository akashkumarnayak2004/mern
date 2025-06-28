import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const URL = process.env.MONGO_URL;

const Connectdb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("db connected");
  } catch (error) {
    console.error(error);

  }

}

export default Connectdb;
