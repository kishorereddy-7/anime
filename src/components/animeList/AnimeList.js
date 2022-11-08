import React, { useEffect, useState } from "react";
import AnimeItem from "./animeItem/AnimeItem";
import * as S from "./style";
import Loader from "../utiles/Loader";
import _find from 'lodash/find'

export default function AnimeList({ lang, searchWord }) {
  const [animeItems, setAnimeItems] = useState([]);
  const [loadAnimeList, setLoadAnimeList] = useState(true);

  useEffect(() => {
    let page = 100;
    fetch(`https://api.jikan.moe/v4/anime?=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimeItems(data.data);
        setLoadAnimeList(false);
      })
      .catch(() => {
        setLoadAnimeList(false);
      });
  }, []);

  const renderAnimeList = () => {
    const animeNodes = animeItems.filter((item) => {
      let title = _find(item.titles, (item) => item.type === "Default")
      return title.title.toLowerCase().includes(searchWord.toLowerCase())
    }).map((item, index) => (
      <AnimeItem lang={lang} key={index} anime={item} />
    ));
    return <S.BodyWrapper>{animeNodes}</S.BodyWrapper>;
  };

  return (
    <S.MainWrapper>
      {loadAnimeList ? <Loader /> : renderAnimeList()}
    </S.MainWrapper>
  );
}
