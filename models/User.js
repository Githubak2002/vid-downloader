// models/User.js (no changes)
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  profilePicture: { type: String },
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

export default User;