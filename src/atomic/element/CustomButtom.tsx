import { CustomButtonProps } from "@/types";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CustomButtom = (props: CustomButtonProps) => {
 const { title, isDisabled, className, handlePress } = props;
 return (
  <TouchableOpacity className={className} onPress={handlePress} disabled={isDisabled}>
   <Text className="font-semibold text-white"> {title} </Text>
  </TouchableOpacity>
 );
};

export { CustomButtom };
