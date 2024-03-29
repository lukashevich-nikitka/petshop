import { ObjectId } from 'mongodb';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  role: string;
}

interface IRegistrationAnswer {
  success: boolean,
  message: string,
}

interface IJWTObject {
  id: ObjectId | string;
  firstName: string;
  lastName: string;
  age: number;
  role: string;
}

interface IAuthAnswer extends IRegistrationAnswer{
  token: string,
}

interface IProfile extends IJWTObject{
  success: boolean;
}

interface IDecodedJWT extends IJWTObject {
  iat: number;
}

interface IProduct {
  id: ObjectId | string;
  name: string;
  size: string;
  price: string;
  chapter: string;
  rating: string;
}

export type { IUser, IRegistrationAnswer, IJWTObject, IAuthAnswer, IProfile, IDecodedJWT, IProduct }
