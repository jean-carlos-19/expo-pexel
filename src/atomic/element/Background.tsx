import React from "react";
import { ActivityIndicator, ImageBackground } from "react-native";
import { useLoading } from "@/hooks";
import { BackgroundProps } from "@/types";
import { PlayIcon } from "react-native-heroicons/solid";

const Background = (props: BackgroundProps) => {
 const { className, type, url, alt } = props;
 const { loading, setLoading } = useLoading(true);
 return (
  <ImageBackground
   alt={alt}
   className={className}
   source={{
    uri: url,
   }}
   style={{
    height: 300,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
   }}
   onLoadEnd={() => setLoading(false)}
   resizeMode="cover"
  >
   {loading ? <ActivityIndicator size={50} color="#333" /> : type === "video" ? <PlayIcon color={"#f2f2f2"} size={100} /> : null}
  </ImageBackground>
 );
};

export { Background };
