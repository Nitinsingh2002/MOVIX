import './style.scss'
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";   //search icon
import { SlMenu } from "react-icons/sl";           //hambamborg icon
import { VscChromeClose } from "react-icons/vsc";  //close icon
import { useLocation } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();



    const [show, setShow] = useState("top");                      // this state for change in color in navbar according to scroll 
    const [lastScrollY, setLastScrollY] = useState(0);           //this state for storing scorll bar
    const [mobileMenu, setMobileMenu] = useState(false);        // this state for setting mobile menu 
    const [query, setQuery] = useState("")                   // this state for search query
    const [showSearch, setShowSearch] = useState(false);      //this state for showing search box if true then search box visible if false then search box not visible 
    const location = useLocation();


    // when we go to next page our scroll start with 0 , 0
    useEffect(() => {
        window.scroll(0, 0)
    }, [location])


    const controlNavbar = () => {
      
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };


    useEffect(() => {
        //when we add any event listner we also remove that event listner for better pratice
        window.addEventListener("scroll", controlNavbar)
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])



    const openSearch = () => {
        setMobileMenu(false)
        setShowSearch(true)
    }

    const openMobileMenu = () => {
        setMobileMenu(true)
        setShowSearch(false)
    }


    const searchQuery = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

   


    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo">
                    <Link to="/"> <img src={logo} alt='Movix-logo' /></Link>
                </div>
                <ul className="menuItems">
                    <li className="menuItem"><Link to="explore/movie" className='link' onClick={() => setMobileMenu(false)}>Movies</Link></li>
                    <li className="menuItem">   <Link to="explore/tv" className='link' onClick={() => setMobileMenu(false)} >Tv show</Link> </li>
                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>


                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>

                
            </ContentWrapper>

            {/* if show search is true then only this search input visible */}
            {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                        <input type="text"
                            placeholder='Search for a movie or Tv show...'
                            onKeyUp={searchQuery}
                            onChange={(e) => setQuery(e.target.value)}
                            
                        />
                            <VscChromeClose
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            )}



        </header>
    )
}


export default Header;