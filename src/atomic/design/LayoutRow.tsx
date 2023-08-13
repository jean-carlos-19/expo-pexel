import { LayoutRowProps } from "@/types";
import React from "react";
import { View } from "react-native";

const LayoutRow = (props: LayoutRowProps) => {
 const { children, background, padding } = props;
 return <View className={`w-full flex-row justify-between ${background} ${padding}`}>{children}</View>;
};

export { LayoutRow };
