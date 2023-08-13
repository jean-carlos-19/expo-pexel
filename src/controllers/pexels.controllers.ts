import { AxiosResponse } from "axios";

interface PexelController {
 getImages(query: string): Promise<AxiosResponse>;
 nextPageImages(url: string): Promise<AxiosResponse>;
 getVideos(query: string): Promise<AxiosResponse>;
 nextPageVideos(url: string): Promise<AxiosResponse>;
}
export type { PexelController };
