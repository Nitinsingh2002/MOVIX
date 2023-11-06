import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzBmNjY4Mzg4NGRlNWJjMTI2YjQzYzQxMTUxZWYzZSIsInN1YiI6IjY1NDBmYTU4NDU1N2EwMDBlMzQyYTI0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RtW6tjhTF_qzLvZ32Tzk-riLGIsH6GNGfMsgjk8eTtU"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers:headers,
            params:params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
