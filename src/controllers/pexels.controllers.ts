import { AxiosResponse } from "axios";

interface PexelController {
    getImages(query:string):Promise<AxiosResponse<any>>,
}
export type {
    PexelController
}