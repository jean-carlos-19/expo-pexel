import React from "react";
import { View, FlatList, Text } from "react-native";
import { PhotoModel, VideoModel } from "@/models";
import { LayoutRow } from "@/atomic/design";
import { ListProps } from "@/types";
import { CardImage } from "./CardImage";
import { CardVideo } from "./CardVideo";

const List = (props: ListProps) => {
 const { data, numsResults, type } = props;

 return (
  <View className="flex-1 flex-col justify-start items-start">
   <LayoutRow>
    <Text className="p-2 text-xs font-semibold text-gray-700 self-end">{`More Photos`}</Text>
    <Text className="p-2 text-xs font-semibold text-gray-700 self-end">{`Results ${numsResults} images`}</Text>
   </LayoutRow>
   <View className="w-full flex-1 flex-row items-center">
    {type === "photo" ? (
     <FlatList
      data={data as PhotoModel[]}
      renderItem={({ item }) => <CardImage image={item} />}
      keyExtractor={(item) => `${item.id}`}
      numColumns={2}
     />
    ) : (
     <FlatList
      data={data as VideoModel[]}
      renderItem={({ item }) => <CardVideo video={item} />}
      keyExtractor={(item) => `${item.id}`}
      numColumns={2}
     />
    )}
   </View>
  </View>
 );
};

export { List };
