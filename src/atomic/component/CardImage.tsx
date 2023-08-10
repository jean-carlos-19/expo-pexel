import React from "react";
import {
 ActivityIndicator,
 ImageBackground,
 TouchableOpacity,
} from "react-native";
import { CardImageProps } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { useLoading } from "@/hooks";

const CardImage = (props: CardImageProps) => {
 const { image } = props;
 const navigation = useNavigation();
 const { loading, setLoading } = useLoading(true);

 return (
  <TouchableOpacity
   className="w-[50%] h-full flex-row justify-between rounded-xl"
   onPress={() => navigation.navigate("Image", image)}
  >
   <ImageBackground
    className="h-[180] flex-col items-center justify-center"
    source={{
     uri: image.src.small && image.src.original,
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

export { CardImage };
