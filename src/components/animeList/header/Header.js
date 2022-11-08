import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import * as S from './style';

const langOptions = ["English", "Japanese"]

const Header = ({ changeLang, changeInput }) => {

    const [searchWord, setSearchWord] = useState("")

    const onChangeLang = (option) => {
        changeLang(option.value)
    }

    const onChangeInput = (e) => {
      changeInput(e)
      setSearchWord(e.target.value)
    }

  return (
    <S.HeadWrapper>
        <input placeholder='Search..' onChange={onChangeInput} value={searchWord} />
      <Dropdown
        options={langOptions}
        value="English"
        onChange={onChangeLang}
        />
    </S.HeadWrapper>
  )
}

export default Header