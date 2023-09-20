import React from "react";
import { TouchableOpacity } from "react-native";
import { CardImageProps } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../element";

const CardImage = (props: CardImageProps) => {
 const { image } = props;
 const navigation = useNavigation();

 return (
  <TouchableOpacity
   className="w-[50%] h-full flex-row justify-between rounded-xl"
   onPress={() => navigation.navigate("Profile", { data: image, type: "photo" })}
  >
   <Background className="w-full flex-row justify-center items-center" type="photo" url={image.src.small && image.src.original} />
  </TouchableOpacity>
 );
};

export { CardImage };
