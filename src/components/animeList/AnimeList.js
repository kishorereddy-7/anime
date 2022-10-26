import React, { useEffect, useState } from "react";
import AnimeItem from "./animeItem/AnimeItem";
import * as S from "./style";
import { Spinner } from 'react-bootstrap';

export default function AnimeList({ lang }) {
  const [animeItems, setAnimeItems] = useState([]);
  const [loadAnimeList, setLoadAnimeList] = useState(true);

  useEffect(() => {
    let page = 100
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
    if (loadAnimeList) {
      return (
        <Spinner animation="border" variant="primary" />
      );
    } else {
    const animeNodes = animeItems.map((item, index) => <AnimeItem lang={lang} key={index} anime={item} />);
    return <S.BodyWrapper>{animeNodes}</S.BodyWrapper>;
    }
  };

  return <S.MainWrapper>{renderAnimeList()}</S.MainWrapper>
}
