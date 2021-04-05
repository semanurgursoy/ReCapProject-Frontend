import { ResponseModel } from "../reponseModel";
import { Rental } from "./rental";

export interface RentalResponseModel extends ResponseModel{
    data:Rental[];
}