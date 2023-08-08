import { PexelController } from "@/controllers";
import { AxiosResponse } from "axios";
import {Http} from "./http/http"
import {PEXEL_API_KEY, PEXEL_API_URL} from '@env'

class PexelServices implements PexelController {

    private static pexel:PexelServices; 
    private http:Http = new Http();

    private constructor(){}

    public static getPexelServices():PexelServices{
        if(this.pexel === undefined) this.pexel = new PexelServices();
        return this.pexel
    }

    public getImages = async (query:string):Promise<AxiosResponse<any, any>>=>  {
        return await this.http.get(
            `${PEXEL_API_URL}?query=${query}`,
            this.http.header(undefined,PEXEL_API_KEY)
        );
    }

    public nextPageImages = async (url:string):Promise<AxiosResponse<any, any>>=>  {
        return await this.http.get(
            url,
            this.http.header(undefined,PEXEL_API_KEY)
        );
    }

}

export {PexelServices}