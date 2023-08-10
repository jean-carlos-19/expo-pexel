import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { useImagesPexel, useSearchForm } from "@/hooks";
import { ImageList, Loading, NavBar } from "@/atomic/component";
import { SearchValidation } from "@/validation";
import { Formik } from "formik";
import { SearchModel } from "@/models";

const HomeScreen = () => {
 const { entity } = useSearchForm();
 const {
  photos,
  loading,
  search,
  result,
  nextPage,
  prevPage,
  cont,
  fecthImagesPrevPage,
  fecthImagesNextPage,
  fecthImages,
 } = useImagesPexel();

 return (
  <View className="w-full h-full">
   <StatusBar backgroundColor={"white"} />
   <Formik
    initialValues={entity}
    validationSchema={SearchValidation}
    onSubmit={(values: SearchModel): void => {
     fecthImages(values.search!);
    }}
   >
    {({ values, handleChange, handleBlur, handleSubmit }) => {
     return (
      <NavBar
       value={values.search}
       handleBlur={handleBlur("search")}
       handleChangue={handleChange("search")}
       handleSubmit={handleSubmit}
      />
     );
    }}
   </Formik>
   <Loading state={loading} sms={`Looking for the image ${search} `} />
   <Text className="p-2 text-xs font-semibold text-gray-700 text-right">
    {`Results ${result} images`}
   </Text>
   <ImageList photos={photos} />
   <View className="p-4 flex-row justify-around items-center">
    <TouchableOpacity
     className="w-36 py-4 rounded-xl bg-green-700 flex-row items-center justify-center"
     onPress={() => fecthImagesPrevPage(prevPage)}
    >
     <Text className="font-semibold text-white">Go back</Text>
    </TouchableOpacity>
    <Text className="font-semibold text-gray-700 text-2xl"> {cont} </Text>
    <TouchableOpacity
     className="w-36 py-4 rounded-xl bg-green-700 flex-row items-center justify-center"
     onPress={() => fecthImagesNextPage(nextPage)}
    >
     <Text className="font-semibold text-white">Next</Text>
    </TouchableOpacity>
   </View>
  </View>
 );
};

export { HomeScreen };
