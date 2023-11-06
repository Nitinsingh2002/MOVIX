import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from '../lazyLoadImage/Img'
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circlerating/CircleRating";
import "./style.scss";
import Genres from "../genres/Genres";






function Carousel({ data, loading ,endpoint,title }) {
  
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.homeReducer)
    const navigate = useNavigate();

    // for moving scroll  
    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };


    const skeltonItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton">
                    <div className="textBlock">
                        <div className="title skeleton"></div>
                        <div className="date skeleton"></div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="carousel">
            <ContentWrapper>
                {title && <div className="carouselTitle">{title}</div>}
                <BsFillArrowLeftCircleFill className="carouselLeftNav arrow"
                  onClick={() => navigation("left")} />

                <BsFillArrowRightCircleFill className="carouselRighttNav arrow"
                 onClick={() => navigation("right")}/>



                {!loading ? (
                    // code applied when loading not happen
                    <div className="carouselItems" ref={carouselContainer}>
                        {
                            data?.map((item) => {
                                const poster_url = item.poster_path ? url.poster + item.poster_path : PosterFallback
                                return (
                                    <div className="carouselItem" key={item.id}  onClick={()=>navigate(`/${item.media_type || endpoint }/${item.id}`)} >
                                        <div className="posterBlock">
                                            <Img src={poster_url} />
                                            <CircleRating rating={item.vote_average.toFixed(1)} />
                                            <Genres data={item.genre_ids.slice(0, 2)} />
                                        </div>
                                        <div className="textBlock">
                                            <span className="title">{item.title || item.name}</span>
                                            <span className="date">{dayjs(item.release_date).format("MMM D YYYY")}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    //  code apply when loading happen here 
                    <div className="loadingSkeleton">
                        {skeltonItem()}
                        {skeltonItem()}
                        {skeltonItem()}
                        {skeltonItem()}
                        {skeltonItem()}
                    </div>
                )}
            </ContentWrapper>


        </div>
    )
}


export default Carousel