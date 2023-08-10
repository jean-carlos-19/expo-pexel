import { AxiosResponse } from "axios";

interface PexelController {
 getImages(query: string): Promise<AxiosResponse>;
 nextPageImages(url: string): Promise<AxiosResponse>;
}
export type { PexelController };
