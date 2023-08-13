import { useLoading } from "@/hooks";
import { BackgroundProps } from "@/types";
import React from "react";
import { ActivityIndicator, ImageBackground } from "react-native";

const Background = (props: BackgroundProps) => {
 const { url } = props;
 const { loading, setLoading } = useLoading(true);
 return (
  <ImageBackground
   className="h-[180] flex-col items-center justify-center"
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
   {loading ? <ActivityIndicator size="large" color="#333" /> : null}
  </ImageBackground>
 );
};

export { Background };
