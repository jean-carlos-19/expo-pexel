import { View, Text, Image, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed';
import { RootStackParamList } from '@/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArrowLeftCircleIcon, ArrowDownTrayIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { useImagesPexel, useLoading, useProfile } from '@/hooks';
import { ImageList } from '@/atomic/component';

type Props = NativeStackScreenProps<RootStackParamList, 'Image'>;

const ImageScreen = ({ route }: Props) => {

  const { src, photographer,photographer_url, id } = route.params;
  const {handleProfile, handleDownload} = useProfile();
  const {photos} = useImagesPexel();
  const navigation = useNavigation();
  const { loading, setLoading } = useLoading(true);

  return (
    <View className='flex-col gap-2'>
       <View className=' p-2 flex-row justify-between items-center bg-white'>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <ArrowLeftCircleIcon size={50} color={"#333"} />
        </TouchableOpacity>
        <View className='flex-row justify-center items-center'>
          <Text className='text-gray-700 font-semibold text-xs mr-2'> {photographer.toUpperCase()} </Text>
          <Avatar
            title={photographer.split(" ").map((word) => word[0]).join("").toLocaleUpperCase()}
            containerStyle={{ backgroundColor:"black",  width: 50, height: 50, borderRadius: 50 }}
            size={32}
            onPress={()=>handleProfile(photographer_url)}
          />
        </View>
      </View>
      <ImageBackground
        className='h-[180] flex-col items-center justify-center'
        source={{
          uri: src.portrait
        }}
        style={{
          height: 300,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
        onLoadEnd={() => setLoading(false)}
        resizeMode='cover'
      >
        {
          loading ? <ActivityIndicator size="large" color="#333" /> : null
        }
      </ImageBackground>
     
      <View
        className='p-2 flex-row justify-end items-center space-x-2'
      >
        <Text className='font-semibold text-xl text-gray-700'> Download </Text>
        <TouchableOpacity onPress={()=>{handleDownload(src.original,`${id}`)}}>
          <ArrowDownTrayIcon size={30} color={"rgb(55,65,81)"} />
        </TouchableOpacity>
      </View>
      <Text className='font-semibold text-xl'> More Photos </Text>
      <ImageList photos={photos?.filter((photo,i)=> photo.id !== id)} />  
    </View>
  )
}

export { ImageScreen }