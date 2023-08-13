import { useSearch } from "@/hooks";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { NavBarProps } from "@/types";
import { Modal } from "./Modal";

function NavBar(props: NavBarProps) {
 const { value, handleChangue, handleBlur, handleSubmit } = props;

 const { isActive, setActive } = useSearch();

 return (
  <>
   <View className="px-2 flex-row items-center justify-between">
    <View className="flex-row items-center">
     <Image className="w-20 h-20" source={require("../../assets/pexel-logo.png")} width={25} height={25} />
     <Text className="font-semibold text-xl">Pexels App</Text>
    </View>
    <TouchableOpacity onPress={() => setActive(!isActive)}>
     <MagnifyingGlassIcon size={35} color={"black"} />
    </TouchableOpacity>
   </View>
   <Modal
    isActiveModal={isActive}
    value={value}
    closeModal={() => {
     setActive(!isActive);
     handleSubmit();
    }}
    handleBlur={handleBlur}
    handleChangue={handleChangue}
   />
  </>
 );
}

export { NavBar };
