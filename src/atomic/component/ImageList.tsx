import React from 'react'
import { View, FlatList } from 'react-native'
import { ImageListProps } from '@/types'
import { CardImage } from './CardImage'

const ImageList = (props:ImageListProps) => {
  
  const {photos} = props;

  return (
    <View className='w-full h-full'>
      <FlatList 
        className='flex'
        data={photos}
        renderItem={({item})=>(
          <CardImage image={item} />
        )}
        keyExtractor={(item)=>`${item.id}`}
        numColumns={2}
      />
    </View>
  )
}

export {ImageList}
