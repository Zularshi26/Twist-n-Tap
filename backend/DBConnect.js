import mongoose from "mongoose";

export const DBConnect = async () => {
  try {
    // Connect to MongoDB using the URI from the environment variable
    const mongodb = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, // Use the new connection string parser
      useUnifiedTopology: true, // Enable the new server discovery and monitoring engine
    });

    console.log(`MongoDB connected: ${mongodb.connection.host}`);
  } catch (error) {
    // Handle any connection errors
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process if unable to connect
  }
};
