import { ResponseModel } from "../reponseModel";
import { Brand } from "./brand";

export interface BrandResponseModel extends ResponseModel{
    data:Brand[];
}