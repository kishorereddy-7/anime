import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import * as S from './style';

const langOptions = ["English", "Japanese"]

const Header = ({ changeLang }) => {

    const onChangeLang = (option) => {
        changeLang(option.value)
    }
  return (
    <S.HeadWrapper>
        <input  />
      <Dropdown
        options={langOptions}
        value="English"
        onChange={onChangeLang}
        />
    </S.HeadWrapper>
  )
}

export default Header