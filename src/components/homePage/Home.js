import React, { useState } from 'react';
import AnimeList from '../animeList/AnimeList';
import Header from '../animeList/header/Header';

const Home = () => {
    const [lang, setLang] = useState("English")

    const changeLang = (lang) => {
        setLang(lang)
    } 
  return (
    <div>
      <Header changeLang={changeLang} />
      <AnimeList lang={lang} />
    </div>
  )
}

export default Home
