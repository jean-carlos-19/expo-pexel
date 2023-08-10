import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class Http {
 public post = async <T>(
  url: string,
  body: any,
  header: any,
 ): Promise<AxiosResponse<any, any>> => {
  return await axios.post(url, body, header);
 };
 public get = async <T>(
  url: string,
  header: AxiosRequestConfig,
 ): Promise<AxiosResponse<any, any>> => {
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
