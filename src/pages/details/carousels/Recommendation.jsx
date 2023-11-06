
import Carousel from '../../../components/carosuel/Carousel'
import useFetch from '../../../customHook/useFetch';




const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );


    if (data?.results && data?.results.length > 0) {
        return (
            <Carousel
                title="Recommendations"
                data={data.results}
                loading={loading}
                endpoint={mediaType}
            />
        );
    } 
};

export default Recommendation;
