import React, { useState } from 'react';
import AnimeList from '../animeList/AnimeList';
import Header from '../animeList/header/Header';
import { debounce } from 'lodash';

const Home = () => {
    const [lang, setLang] = useState("English")
    const [search, setSearch] = useState("")

    const changeLang = (lang) => {
        setLang(lang)
    } 

    const debounceSearch = debounce((e) => {
      setSearch(e.target.value)
    }, 800)
    
  return (
    <div style={{ backgroundColor: "#e1e6e2" }} >
      <Header changeLang={changeLang} changeInput={debounceSearch} />
      <AnimeList lang={lang} searchWord={search} />
    </div>
  )
}

export default Home
