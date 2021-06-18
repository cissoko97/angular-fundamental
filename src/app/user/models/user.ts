import { IAddress } from "./address";
import { ICompany } from "./company";

export interface IUser {
  id: number;
  name: string;
  username: string;
  experience: string;
  reputation: number;
  email: string;
  phone: string;
  website: string;
  address: IAddress;
  company: ICompany;
}
