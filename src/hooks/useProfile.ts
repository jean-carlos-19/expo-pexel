import { useCallback } from "react";
import * as WebBrowser from "expo-web-browser";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const useProfile = () => {
 const handleProfile = useCallback(async (urlProfile: string) => {
  try {
   await WebBrowser.openBrowserAsync(urlProfile);
  } catch (error) {
   console.log(error);
  }
 }, []);
 const handleFile = useCallback(async (urlImage: string, id: string) => {
  try {
   const fileUrl = FileSystem.documentDirectory + id + ".jpg";
   const { uri } = await FileSystem.downloadAsync(urlImage, fileUrl);
   saveFile(uri);
  } catch (error) {
   console.log(error);
  }
 }, []);
 const saveFile = useCallback(async (fileUri: string) => {
  try {
   const { status } = await MediaLibrary.requestPermissionsAsync();
   if (status === "granted") {
    const asset = await MediaLibrary.createAssetAsync(fileUri);
    await MediaLibrary.createAlbumAsync("Images", asset, false);
   }
  } catch (error) {
   console.log(error);
  }
 }, []);
 const handleDownload = (urlImage: string, id: string) => {
  handleFile(urlImage, id);
 };
 return { handleProfile, handleDownload };
};
export { useProfile };
