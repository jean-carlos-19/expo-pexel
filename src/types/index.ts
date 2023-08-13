import React from "react";
import { PhotoModel, SearchModel, VideoModel } from "@/models";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

/* Props components ui */
interface ListProps {
 data: PhotoModel[] | VideoModel[] | undefined;
 numsResults: number | undefined;
 type: "photo" | "video";
}
interface CardImageProps {
 image: PhotoModel;
}
interface CardVideoProps {
 video: VideoModel;
}

interface ModalProps {
 value: string | undefined;
 isActiveModal: boolean;
 handleChangue: (e: string | React.ChangeEvent) => void;
 handleBlur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
 closeModal: () => void;
}
interface NavBarProps {
 value: string | undefined;
 handleChangue: (e: string | React.ChangeEvent) => void;
 handleBlur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
 handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}
interface LoadingProps {
 state: boolean;
 sms: string;
}
interface CustomButtonProps {
 isDisabled: boolean;
 title: string;
 className: string;
 handlePress: () => void;
}
interface PaginationProps {
 children: React.ReactNode;
 className: string;
}
interface FormProps {
 entity: SearchModel;
 fecthImages: (search: string) => void;
}
interface HeaderProfileProps {
 name: string;
 url: string;
 handleProfile: (url: string) => void;
}
interface BackgroundProps {
 url: string;
}
interface DownloadProps {
 url: string;
 id: string;
 handleDownload: (url: string, id: string) => void;
}
interface LayoutRowProps {
 children: React.ReactNode;
 padding?: string;
 background?: string;
}
interface VideoProps {
 url: string;
}

/* Rotes of app */
type RootStackParamList = {
 Image: undefined;
 Video: VideoModel;
 Profile: {
  data: VideoModel | PhotoModel;
  type: "photo" | "video";
 };
};
export type {
 ListProps,
 CardImageProps,
 CardVideoProps,
 RootStackParamList,
 ModalProps,
 NavBarProps,
 LoadingProps,
 CustomButtonProps,
 PaginationProps,
 FormProps,
 HeaderProfileProps,
 BackgroundProps,
 DownloadProps,
 LayoutRowProps,
 VideoProps,
};
