import { useCallback, useEffect, useState } from "react";
import { PhotoModel } from "@/models";
import { PexelServices } from "@/services";
import { AxiosError } from "axios";

const useImagesPexel = () => {
 const services: PexelServices = PexelServices.getPexelServices();
 const [photos, setPhotos] = useState<PhotoModel[]>();
 const [loading, setLoading] = useState(false);
 const [search, setSearch] = useState<string>();
 const [numsResults, setNumsResults] = useState<number>();
 const [nextPage, setNextPage] = useState<string | undefined>(undefined);
 const [prevPage, setPrevPage] = useState<string | undefined>(undefined);
 const [numPage, setNumPage] = useState<number>(0);

 useEffect(() => {
  fecthImages("people");
 }, []);

 const fecthImages = useCallback(async (search: string) => {
  setLoading(true);
  setSearch(search);
  try {
   const rs = await services.getImages(search);
   setPhotos(rs.data?.photos);
   setNumsResults(rs.data?.total_results);
   setNextPage(rs.data?.next_page);
   setNumPage(rs.data?.page);
  } catch (error) {
   showError(error as AxiosError);
  }
  setLoading(false);
 }, []);

 const fecthImagesNextPage = useCallback(async (url: string | undefined) => {
  if (!url) return;
  setLoading(true);
  try {
   const rs = await services.nextPageImages(url);
   setPhotos(rs.data?.photos);
   setNumsResults(rs.data?.total_results);
   setNextPage(rs.data?.next_page);
   setPrevPage(rs.data?.prev_page);
   setNumPage(rs.data?.page);
  } catch (error) {
   showError(error as AxiosError);
  }
  setLoading(false);
 }, []);
 const fecthImagesPrevPage = useCallback(async (url: string | undefined) => {
  if (!url) return;

  setLoading(true);
  try {
   const rs = await services.nextPageImages(url);
   setPhotos(rs.data?.photos);
   setNumsResults(rs.data?.total_results);
   setPrevPage(rs.data?.prev_page);
   setNumPage(rs.data?.page);
  } catch (error) {
   showError(error as AxiosError);
  }
  setLoading(false);
 }, []);
 const showError = (error: AxiosError) => {
  console.log("Error: " + error.response?.headers);
  console.log("Error: " + error.response?.data);
 };

 return {
  photos,
  loading,
  search,
  numsResults,
  nextPage,
  prevPage,
  numPage,
  fecthImagesPrevPage,
  fecthImagesNextPage,
  fecthImages,
 };
};

export { useImagesPexel };
