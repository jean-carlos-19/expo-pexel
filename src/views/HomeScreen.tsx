import React from "react";
import { View, Text, StatusBar } from "react-native";
import { useImagesPexel, useSearchForm } from "@/hooks";
import { List, Loading, Form } from "@/atomic/component";
import { CustomButtom } from "@/atomic/element";
import { Pagination } from "@/atomic/design";

const HomeScreen = () => {
 const { entity } = useSearchForm();
 const { photos, loading, search, numsResults, nextPage, prevPage, numPage, fecthImagesPrevPage, fecthImagesNextPage, fecthImages } =
  useImagesPexel();
 const existNextPage: boolean = !nextPage ? true : false;
 const existPrevPage: boolean = !prevPage ? true : false;
 return (
  <>
   <StatusBar backgroundColor={"white"} />
   <Loading state={loading} sms={`Looking for the image ${search} `} />
   <View className="w-full h-full flex flex-col justify-between bg-white">
    <Form entity={entity} fecthImages={fecthImages} />
    <List data={photos} numsResults={numsResults} type="photo" />
    <Pagination className="p-4 flex-row justify-around items-center">
     <CustomButtom
      isDisabled={existPrevPage}
      className={`w-36 py-4 rounded-xl  ${existPrevPage ? "bg-gray-200" : "bg-green-700"} flex-row items-center justify-center`}
      title="Go Back"
      handlePress={() => fecthImagesPrevPage(prevPage)}
     />
     <Text className="font-semibold text-gray-700 text-2xl"> {numPage} </Text>
     <CustomButtom
      isDisabled={existNextPage}
      className={`w-36 py-4 rounded-xl ${existNextPage ? "bg-gray-700" : "bg-green-700"} flex-row items-center justify-center`}
      title="Next"
      handlePress={() => fecthImagesNextPage(nextPage)}
     />
    </Pagination>
   </View>
  </>
 );
};
export { HomeScreen };
