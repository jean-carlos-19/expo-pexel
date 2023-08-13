import { DownloadProps } from "@/types";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ArrowDownTrayIcon } from "react-native-heroicons/solid";

const Download = (props: DownloadProps) => {
 const { url, id, handleDownload } = props;
 return (
  <View className="p-2 flex-row justify-end items-center space-x-2">
   <Text className="font-semibold text-xl text-gray-700"> Download </Text>
   <TouchableOpacity
    onPress={() => {
     handleDownload(url, `${id}`);
    }}
   >
    <ArrowDownTrayIcon size={30} color={"rgb(55,65,81)"} />
   </TouchableOpacity>
  </View>
 );
};

export { Download };
