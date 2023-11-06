import React, { useState } from "react";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from "../../../components/switchTabs/SwitchTab";
import useFetch from '../../../customHook/useFetch'
import '../style.scss'
import Carousel from "../../../components/carosuel/Carousel";



const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    //  here we get data fron child to parent by using callback fuction ontabchange we just
    //   send onTabChange function as a props to childern component and from childrem componet we pass tav and index in on tab change

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };



    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs
                    data={["Day", "Week"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>

            <Carousel
            data={data?.results}
            loading={loading}
            />

        </div>
    );
};

export default Trending;
