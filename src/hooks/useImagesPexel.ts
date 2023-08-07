import { useCallback, useEffect, useState } from 'react'
import { PhotoModel } from '@/models'
import { PexelServices } from '@/services'
import { AnimatableStringValue } from 'react-native';


const useImagesPexel = () => {
    const services: PexelServices = PexelServices.getPexelServices();
    const [photos, setPhotos] = useState<PhotoModel[]>();
    const [loading,setLoading] = useState(false);
    const [search, setSearch] = useState<AnimatableStringValue>();
    const [result, setResult] = useState<number>();

    useEffect(() => {
        fecthImages("people");
    }, [])

    const fecthImages = useCallback(async (search: string) => {
        setSearch(search);
        setLoading(true);
        try {
            const rs = await services.getImages(search);
            setPhotos(rs.data?.photos);
            setResult(rs.data?.total_results)
        } catch (error: any) {
            // console.log(error?.response.headers)
            console.log(error?.response.data)
        }
        setLoading(false);
    }, [])
    return { photos, loading, search, result, fecthImages }
}

export { useImagesPexel }

