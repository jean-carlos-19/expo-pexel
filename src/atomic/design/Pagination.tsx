import { PaginationProps } from "@/types";
import React from "react";
import { View } from "react-native";

const Pagination = (props: PaginationProps) => {
 const { children, className } = props;
 return <View className={className}>{children}</View>;
};

export { Pagination };
