import './style.scss'
import { useSelector } from 'react-redux'

function Genres({ data }) {
    const { genres } = useSelector((state) => state.homeReducer)
    

    return (
        <div className="genres">
        {data?.map((g) => {
            if (!genres[g]?.name) return;
            return (
                <div key={g} className="genre">
                    {genres[g]?.name}
                </div>
            );
        })}
    </div>
    )
}

export default Genres
