import { User } from "../model/user.model.js";

// Register function
export const Register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ message: "Please fill all details" });
    }

    const user = new User({
      username,
      password,
      email
    });

    await user.save();

    // Return success message
    return res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

// Login function
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all details" });
    }

    // Find user by email (case-sensitive)
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Basic password comparison (do not use plain text in real apps)
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};
