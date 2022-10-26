import styled from "styled-components";
import { Card } from "react-bootstrap";

export const Anime = styled(Card)`
    padding: 20px;
    width: 275px;
    height: 375px;
    background-color: darkgrey;
    margin: 20px;
    border-radius: 15px;
`;

export const AnimeImage = styled.img`
    height: 325px;
    width: 275px;
    border-radius: 25px;
`;

export const AnimeHeading = styled.h3`
    height: 40px;
    margin: 0 0 10px 0;
    text-align: center;
`;