import { ResponseModel } from "../reponseModel";
import { Color } from "./color";

export interface ColorResponseModel extends ResponseModel{
    data:Color[];
}