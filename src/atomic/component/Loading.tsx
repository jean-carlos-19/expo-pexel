import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { LoadingProps } from '@/types'

function Loading(props: LoadingProps) {
    const { state, sms } = props;
    return (
        state ? (
            <View className='absolute z-10 top-0 right-0 w-full h-full bg-white flex-col justify-center items-center'>
                <ActivityIndicator size="large" color="#333" />
                <Text className='text-xl text-gray-700 font-semibold' > { sms } </Text>
            </View>
        ):(
            null
        )
  )
}

export { Loading }
