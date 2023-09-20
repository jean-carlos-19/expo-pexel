import { View, StatusBar } from "react-native";
import React from "react";
import { RootStackParamList } from "@/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useImagesPexel, useProfile, useVideoPexel } from "@/hooks";
import { List, HeaderProfile, Download } from "@/atomic/component";
import { Background } from "@/atomic/element";
import { PhotoModel, VideoModel } from "@/models";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

const ProfilelScreem = ({ route }: Props) => {
 const { data, type } = route.params;
 const { handleProfile, handleDownload } = useProfile();
 const { photos, numsResults } = useImagesPexel();
 const { videos } = useVideoPexel();

 return (
  <>
   <StatusBar backgroundColor={"white"} />
   <View className="w-full h-full flex-col justify-between">
    {type === "photo" ? (
     <>
      <HeaderProfile name={(data as PhotoModel).photographer} url={(data as PhotoModel).photographer_url} handleProfile={handleProfile} />
      <Background className="h-[180] flex-col items-center justify-center" url={(data as PhotoModel).src.portrait} alt={(data as PhotoModel).alt} type="photo" />
      <Download id={`${(data as PhotoModel).id}`} url={(data as PhotoModel).src.original} handleDownload={handleDownload} />
      <List data={photos?.filter((photo) => photo.id !== (data as PhotoModel).id)} numsResults={numsResults} type={"photo"} />
     </>
    ) : (
     <>
      <HeaderProfile name={(data as VideoModel).user.name} url={(data as VideoModel).user.url} handleProfile={handleProfile} />
      <Background  className="h-[180] flex-col items-center justify-center" url={(data as VideoModel).image} alt={""} type="video" />
      <List data={videos?.filter((videos) => videos.id !== (data as VideoModel).id)} numsResults={numsResults} type={"video"} />
     </>
    )}
   </View>
  </>
 );
};

export { ProfilelScreem };
