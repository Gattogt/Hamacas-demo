// Moongose is an object data mapper. Basically it will allow us to connect to our database through our application allowing us to make queries ans so on
import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    const coon = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${coon.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
