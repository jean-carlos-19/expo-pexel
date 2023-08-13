import React from "react";
import { View, Text, StatusBar } from "react-native";
import { useSearchForm, useVideoPexel } from "@/hooks";
import { List, Loading, Form } from "@/atomic/component";
import { CustomButtom } from "@/atomic/element";
import { Pagination } from "@/atomic/design";

const VideoScreem = () => {
 const { entity } = useSearchForm();
 const { videos, loading, search, numsResults, nextPage, prevPage, numPage, fetchVideos, fetchVideosPrevPage, fetchVideosNextPage } = useVideoPexel();
 const existNextPage: boolean = !nextPage ? true : false;
 const existPrevPage: boolean = !prevPage ? true : false;

 return (
  <>
   <StatusBar backgroundColor={"white"} />
   <Loading state={loading} sms={`Looking for the image ${search} `} />
   <View className="w-full h-full flex flex-col justify-between bg-white">
    <Form entity={entity} fecthImages={fetchVideos} />
    <List data={videos} numsResults={numsResults} type="video" />
    <Pagination className="p-4 flex-row justify-around items-center">
     <CustomButtom
      isDisabled={existPrevPage}
      className={`w-36 py-4 rounded-xl  ${existPrevPage ? "bg-gray-200" : "bg-green-700"} flex-row items-center justify-center`}
      title="Go Back"
      handlePress={() => fetchVideosPrevPage(prevPage)}
     />
     <Text className="font-semibold text-gray-700 text-2xl"> {numPage} </Text>
     <CustomButtom
      isDisabled={existNextPage}
      className={`w-36 py-4 rounded-xl ${existNextPage ? "bg-gray-700" : "bg-green-700"} flex-row items-center justify-center`}
      title="Next"
      handlePress={() => fetchVideosNextPage(nextPage)}
     />
    </Pagination>
   </View>
  </>
 );
};

export { VideoScreem };
