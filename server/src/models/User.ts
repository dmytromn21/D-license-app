import { Role, LicenseType } from '@ts/enums';
import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  cin: string;
  score: number;
  role: Role;
  licenseType: LicenseType;
  createdAt: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    cin: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: Role,
      default: Role.USER,
    },
    licenseType: {
      type: String,
      required: true,
      enum: LicenseType,
    },
    score: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const User = model<IUser>('User', schema);
