import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from "./redux/homeReducers";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/details/Details";
import Explore from './pages/explore/Explore'
import Home from './pages/home/Home'
import SearchResult from './pages/searchResult/SearchResult'


function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    fetchApiConfig();
    genuresCall();
  }, []);


  // get api call for path that come before image url and we store that in redux store original is size of image 
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url))
    });
  };


  const genuresCall = async () => {
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenures = {}

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promises)
    data.map(({ genres }) => {
      return genres.map((item) => (allGenures[item.id] = item))
    })
    dispatch(getGenres(allGenures))
  }


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
