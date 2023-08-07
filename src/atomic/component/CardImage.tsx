import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { CardImageProps } from '@/types'
import {useNavigation} from '@react-navigation/native'

const CardImage = (props:CardImageProps) => {
  
  const {image} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      className='m-2 w-[48%]  flex-row justify-between rounded-xl'
      onPress={()=>navigation.navigate("Image",image)}
    >
      <Image 
        className='w-full h-[180]'
        source={{
          uri:image.src.small && image.src.original 
        }}
        width={80}
        height={80}
      />
    </TouchableOpacity>
  )
}

export {CardImage}
