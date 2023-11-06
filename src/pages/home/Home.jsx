import './style.scss'

import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import HeroBanner from './heroBanner/HeroBanner';






function Home() {
    return (
        <div className='homePage'>
            <HeroBanner />
            <Trending />
            <Popular/>
            <TopRated/>
 
        </div>
    )
}


export default Home;