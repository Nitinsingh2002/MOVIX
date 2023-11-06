import React from "react";

import Carousel from '../../../components/carosuel/Carousel'
import useFetch from "../../../customHook/useFetch";

const Upcoming = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch("/movie/now_playing")

   


    return (
        <Carousel
            title="Now Playing"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Upcoming;
