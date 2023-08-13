import React from "react";
import { VideoProps } from "@/types";
import { View } from "react-native";
import Video from "react-native-video";

const CustomVideo = (props: VideoProps) => {
 const { url } = props;

 return (
  <View className="flex-1 justify-center items-center">
   <Video 
    className="flex-1 self-stretch" 
    source={{ uri: url }} 
    controls 
    paused
  />
  </View>
 );
};

export { CustomVideo };
