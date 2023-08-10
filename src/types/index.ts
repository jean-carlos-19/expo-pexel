import { PhotoModel } from "@/models";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

/* Props components Iu */
interface ImageListProps {
 photos: PhotoModel[] | undefined;
}
interface CardImageProps {
 image: PhotoModel;
}
interface ModalProps {
 value: string | undefined;
 isActiveModal: boolean;
 handleChangue: (e: string | React.ChangeEvent) => void;
 handleBlur:
  | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
  | undefined;
 closeModal: () => void;
}
interface NavBarProps {
 value: string | undefined;
 handleChangue: (e: string | React.ChangeEvent) => void;
 handleBlur:
  | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
  | undefined;
 handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}
interface LoadingProps {
 state: boolean;
 sms: string;
}
/* Rotes of app */
type RootStackParamList = {
 Home: undefined;
 Image: PhotoModel;
};
export type {
 ImageListProps,
 CardImageProps,
 RootStackParamList,
 ModalProps,
 NavBarProps,
 LoadingProps,
};
