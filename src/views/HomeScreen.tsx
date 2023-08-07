import React from 'react'
import { View, Text, StatusBar, Dimensions } from 'react-native'
import {useImagesPexel, useSearchForm} from '@/hooks'
import {ImageList, Loading, NavBar} from '@/atomic/component'
import { SearchValidation } from '@/validation'
import {Formik, FormikHelpers} from 'formik'
import { SearchModel } from '@/models'

const HomeScreen = () => {
  
  const {entity} = useSearchForm();
  const {photos, loading, search, result, fecthImages} = useImagesPexel();
  
  return (
    <View 
      className="w-full h-full">
      <StatusBar  backgroundColor={"white"}  />
      <Formik
        initialValues={entity}
        validationSchema={SearchValidation} 
        onSubmit={ (values: SearchModel, formikHelpers: FormikHelpers<SearchModel>): void | Promise<any> => {
          fecthImages(values.search!)
        }}        
      >
        {({values,handleChange,handleBlur,handleSubmit})=>{
          return(
            <NavBar 
              value={values.search}
              handleBlur={handleBlur("search")}
              handleChangue={handleChange("search")} 
              handleSubmit={handleSubmit}
            />
          )
        }}
      </Formik>
      <Loading state={loading} sms={`looking for the image ${search} `} />
      <Text
        className='px-2 text-xs font-semibold text-gray-700 text-right'
      > 
        {`Results ${result} images`} 
      </Text>
      <ImageList photos={photos} />
    </View>
  )
}

export {HomeScreen}