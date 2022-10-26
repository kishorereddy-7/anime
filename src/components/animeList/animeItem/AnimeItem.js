import React from "react";
import * as S from './style';
import _get from 'lodash/get';
import _find from 'lodash/find'

export default function AnimeItem({ anime = {}, lang }) {

  let title = _find(anime.titles, (item) => item.type === "Default")
  const animeImage = _get(anime, "images.jpg.image_url", "")
  const langObj = _find(anime.titles, (item) => item.type === lang)
  if(langObj){
    title = langObj
  }
  return (
      <S.Anime>
        <S.AnimeHeading size="l">{title.title}</S.AnimeHeading>
        <S.AnimeImage src={animeImage} alt={anime.title} />
      </S.Anime>
  );
}
