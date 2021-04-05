import { ResponseModel } from "../reponseModel";
import { Car } from "./car";

export interface CarResponseModel extends ResponseModel{
    data:Car[];
}