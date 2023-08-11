import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class Http {
 public post = async (
  url: string,
  body: AxiosResponse,
  header: AxiosRequestConfig,
 ): Promise<AxiosResponse> => {
  return await axios.post(url, body, header);
 };
 public get = async (
  url: string,
  header: AxiosRequestConfig,
 ): Promise<AxiosResponse> => {
  return await axios.get(url, header);
 };
 public header(
  params: URLSearchParams | undefined,
  authorization: string,
 ): AxiosRequestConfig {
  return {
   headers: {
    Authorization: `${authorization}`,
   },
   params: params,
  };
 }
}
export { Http };
