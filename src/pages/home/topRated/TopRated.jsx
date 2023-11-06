import React, { useState } from "react";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from "../../../components/switchTabs/SwitchTab";
import useFetch from '../../../customHook/useFetch'
import '../style.scss'
import Carousel from "../../../components/carosuel/Carousel";



const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");
    
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);



    //  here we get data fron child to parent by using callback fuction ontabchange we just
    //   send onTabChange function as a props to childern component and from childrem componet we pass tav and index in on tab change
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movie" ? "movie" : "tv");
    };



    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs
                    data={["Movie", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>

            <Carousel
            data={data?.results}
            loading={loading}
            endpoint={endpoint}
            />

        </div>
    );
};

export default TopRated;
