import { ModalProps } from "@/types";
import React from "react";
import { TouchableOpacity, View, TextInput, Text, Dimensions } from "react-native";

const Modal = (props: ModalProps) => {
 const { value, isActiveModal, handleBlur, handleChangue, closeModal } = props;
 const { width, height } = Dimensions.get("screen");
 return isActiveModal ? (
  <View
   style={{ width: width, height: height }}
   className="absolute top-0 right-0 z-10 p-4 flex-column justify-start items-center bg-slate-900 gap-4"
  >
   <Text className="font-semibold text-xl text-white self-start">Look for an image</Text>
   <TextInput
    className=" w-full p-4 text-xl bg-white rounded-xl"
    value={value}
    placeholder="search..."
    onBlur={handleBlur}
    onChangeText={handleChangue}
   />
   <TouchableOpacity className="px-8 py-4 bg-green-700 rounded-xl" onPress={closeModal}>
    <Text className="font-semibold text-xl text-white"> Search </Text>
   </TouchableOpacity>
  </View>
 ) : null;
};

export { Modal };
