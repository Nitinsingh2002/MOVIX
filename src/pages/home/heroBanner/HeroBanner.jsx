import './style.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../customHook/useFetch';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoadImage/Img';

import { Link } from 'react-router-dom';
function HeroBanner() {
    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.homeReducer)

    //here we fetch api using custom hook 
    const { data, loading } = useFetch("/movie/popular")



    // to change the background image in hero section when we refresh
    useEffect(() => {
        if (url && url.backdrop) {
            const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
            setBackground(bg);
            
        }
    }, [data, url]);
    

     

    
    const searchQuery = (event) => {
        if (event.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

    

    return (
        <div className="heroBanner">
            {!loading && (<div className='background-image'>
                <Img src={background} />
            </div>)
            }

            <div className="opacity-layer">

            </div>

            <ContentWrapper>

                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">Millions of  movies ,Tv shows and pepole  to discover. Explore now.</span>



                    <div className="searchInput">
                        <input type="text"
                            placeholder='Search for a movie or Tv show...'
                            onKeyUp={searchQuery}
                            onChange={(e) => setQuery(e.target.value)}
                            
                        />
                     <Link to={`/search/${query}`}> <button >Search</button></Link>  


                    </div>
                </div>

            </ContentWrapper>
        </div>
    )
}


export default HeroBanner;