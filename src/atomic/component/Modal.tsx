import React from "react";
import { Text, View } from "react-native";
import { ModalProps } from "@/types";

const Modal = (props: ModalProps) => {
 const { state } = props;
 return state ? (
  <View>
   <Text>imagen descargada</Text>
  </View>
 ) : null;
};

export { Modal };
