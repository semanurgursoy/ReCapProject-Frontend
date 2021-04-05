import { ResponseModel } from "../reponseModel";
import { Customer } from "./customer";

export interface CustomerResponseModel extends ResponseModel{
    data:Customer[];
}