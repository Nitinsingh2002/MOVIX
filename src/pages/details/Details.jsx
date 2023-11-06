import './style.scss'
import { useEffect, useState } from 'react';
import useFetch from '../../customHook/useFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom';
import Cast from './cast/Caste';
import VideosSection from './videoSection/VideoSection';
import Similar from './carousels/SimilarSection';
import Recommendation from './carousels/Recommendation';
import Upcoming from './carousels/Upcoming';

function Details() {

    const { mediaType, id } = useParams();

    // this api for fetching data related to video 
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)

    // this api realated to fetching data related to credits means director
    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)



    return (
        <div>
            <DetailsBanner
                video={data?.results[0]}
                crew={credits?.crew} />
            <Cast data={credits?.cast}
                loading={creditsLoading} />
            <VideosSection video={data?.results}
                loading={loading} />
               <Similar mediaType={mediaType} id={id} />
            <Recommendation mediaType={mediaType} id={id} />
            
            <Upcoming mediaType={"movie"} id={id}/>

        </div>
    )
}


export default Details;