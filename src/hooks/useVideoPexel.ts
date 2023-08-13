import { useCallback, useEffect, useState } from "react";
import { VideoModel } from "@/models";
import { PexelServices } from "@/services";
import { AxiosError } from "axios";

const useVideoPexel = () => {
 const services: PexelServices = PexelServices.getPexelServices();
 const [videos, setVideos] = useState<VideoModel[]>();
 const [loading, setLoading] = useState(false);
 const [search, setSearch] = useState<string>();
 const [numsResults, setNumsResults] = useState<number>();
 const [nextPage, setNextPage] = useState<string | undefined>(undefined);
 const [prevPage, setPrevPage] = useState<string | undefined>(undefined);
 const [numPage, setNumPage] = useState<number>(0);

 useEffect(() => {
  fetchVideos("people");
 }, []);

 const fetchVideos = useCallback(async (search: string) => {
  setLoading(true);
  setSearch(search);
  try {
   const rs = await services.getVideos(search);
   setVideos(rs.data?.videos);
   setNumsResults(rs.data?.total_results);
   setNextPage(rs.data?.next_page);
   setNumPage(rs.data?.page);
  } catch (error) {
   showError(error as AxiosError);
  }
  setLoading(false);
 }, []);

 const fetchVideosNextPage = useCallback(async (url: string | undefined) => {
  if (!url) return;
  setLoading(true);
  try {
   const rs = await services.nextPageVideos(url);
   setVideos(rs.data?.videos);
   setNumsResults(rs.data?.total_results);
   setNextPage(rs.data?.next_page);
   setPrevPage(rs.data?.prev_page);
   setNumPage(rs.data?.page);
  } catch (error) {
   showError(error as AxiosError);
  }
  setLoading(false);
 }, []);

 const fetchVideosPrevPage = useCallback(async (url: string | undefined) => {
  if (!url) return;

  setLoading(true);
  try {
   const rs = await services.nextPageVideos(url);
   setVideos(rs.data?.videos);
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
  videos,
  loading,
  search,
  numsResults,
  nextPage,
  prevPage,
  numPage,
  fetchVideosPrevPage,
  fetchVideosNextPage,
  fetchVideos,
 };
};
export { useVideoPexel };
