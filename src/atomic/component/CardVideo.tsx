import React from "react";
import { TouchableOpacity } from "react-native";
import { CardVideoProps } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../element";

const CardVideo = (props: CardVideoProps) => {
 const { video } = props;
 const navigation = useNavigation();

 return (
  <TouchableOpacity
   className="w-[50%] h-full flex-row justify-between rounded-xl"
   onPress={() => navigation.navigate("Profile", { data: video, type: "video" })}
  >
   <Background className="w-full flex-row justify-center items-center" type="video" url={video.image} />
  </TouchableOpacity>
 );
};

export { CardVideo };
