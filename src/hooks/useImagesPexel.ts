import { useCallback, useEffect, useState } from "react";
import { PhotoModel } from "@/models";
import { PexelServices } from "@/services";
import { AxiosError } from "axios";

const useImagesPexel = (target: string) => {
 const services: PexelServices = PexelServices.getPexelServices();
 const [photos, setPhotos] = useState<PhotoModel[]>();
 const [loading, setLoading] = useState(false);
 const [search, setSearch] = useState<string>();
 const [result, setResult] = useState<number>();
 const [nextPage, setNextPage] = useState<string>("");
 const [prevPage, setPrevPage] = useState<string>("");
 const [cont, setCont] = useState<number>(1);

 useEffect(() => {
  setSearch(target);
 }, [target]);

 const fecthImages = useCallback(
  async (search: string) => {
   setLoading(true);
   try {
    const rs = await services.getImages(search);
    setPhotos(rs.data?.photos);
    setResult(rs.data?.total_results);
    setNextPage(rs.data?.next_page);
   } catch (error) {
    showError(error as AxiosError);
   }
   setLoading(false);
  },
  [services],
 );

 const fecthImagesNextPage = async (url: string) => {
  setLoading(true);
  try {
   const rs = await services.nextPageImages(url);
   setPhotos(rs.data?.photos);
   setResult(rs.data?.total_results);
   setNextPage(rs.data?.next_page);
   setNextPage(rs.data?.prev_page);
   setCont(cont + 1);
  } catch (error) {
   showError(error as AxiosError);
  }
  setLoading(false);
 };
 const fecthImagesPrevPage = async (url: string) => {
  if (cont < 1) return;

  setLoading(true);
  try {
   const rs = await services.nextPageImages(url);
   setPhotos(rs.data?.photos);
   setResult(rs.data?.total_results);
   setPrevPage(rs.data?.prev_page);
   setCont(cont - 1);
  } catch (error) {
   showError(error as AxiosError);
  }
  setLoading(false);
 };
 const showError = (error: AxiosError) => {
  console.log(error.response?.headers);
  console.log(error.response?.data);
 };
 return {
  photos,
  loading,
  search,
  result,
  nextPage,
  prevPage,
  cont,
  fecthImagesPrevPage,
  fecthImagesNextPage,
  fecthImages,
 };
};

export { useImagesPexel };
