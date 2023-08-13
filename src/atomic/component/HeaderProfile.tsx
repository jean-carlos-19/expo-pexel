import React from "react";
import { Avatar } from "@rneui/themed";
import { ArrowLeftCircleIcon } from "react-native-heroicons/solid";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderProfileProps } from "@/types";
import { LayoutRow } from "@/atomic/design";

const HeaderProfile = (props: HeaderProfileProps) => {
 const { name, url, handleProfile } = props;
 const navigation = useNavigation();
 return (
  <LayoutRow background="bg-white" padding="p-2">
   <TouchableOpacity onPress={() => navigation.navigate("Image")}>
    <ArrowLeftCircleIcon size={50} color={"#333"} />
   </TouchableOpacity>
   <View className="flex-row justify-center items-center">
    <Text className="text-gray-700 font-semibold text-xs mr-2">{name.toUpperCase()}</Text>
    <Avatar
     title={name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toLocaleUpperCase()}
     containerStyle={{
      backgroundColor: "black",
      width: 50,
      height: 50,
      borderRadius: 50,
     }}
     size={32}
     onPress={() => handleProfile(url)}
    />
   </View>
  </LayoutRow>
 );
};

export { HeaderProfile };
