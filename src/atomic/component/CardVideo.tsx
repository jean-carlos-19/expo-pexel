import React from "react";
import { ActivityIndicator, ImageBackground, TouchableOpacity } from "react-native";
import { CardVideoProps } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { useLoading } from "@/hooks";

const CardVideo = (props: CardVideoProps) => {
 const { video } = props;
 const navigation = useNavigation();
 const { loading, setLoading } = useLoading(true);

 return (
  <TouchableOpacity
   className="w-[50%] h-full flex-row justify-between rounded-xl"
   onPress={() => navigation.navigate("Profile", { data: video, type: "video" })}
  >
   <ImageBackground
    className="h-[180] flex-col items-center justify-center"
    source={{
     uri: video.image,
    }}
    style={{ width: "100%" }}
    onLoadEnd={() => setLoading(false)}
    resizeMode="cover"
   >
    {loading ? <ActivityIndicator size="large" color="#333" /> : null}
   </ImageBackground>
  </TouchableOpacity>
 );
};

export { CardVideo };
