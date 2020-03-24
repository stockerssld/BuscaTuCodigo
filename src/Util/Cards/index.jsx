import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const CardColumns=styled.div`
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px 20px;
    display: grid;
`
export const Card = styled.a`
    border: 1px solid #EEE;
    text-decoration: none;
    background: ${props => props.Background || "#FFF"};
    cursor: ${props => props.Cursor || "pointer"};
    padding: 20px;
`
export const CardTitle= styled.div`
    border-bottom: 1px solid #EEE;
    padding-bottom: 7px;
    margin-bottom: 7px;
    font-weight: ${props => props.FontWeight || "bold"};
    font-size:${props => props.FontSize || "18px"};
    color: ${props => props.Color || "#000"};
    text-align: ${props => props.TextAlign || "left"};    
`

export const CardDescription= styled.div`
    line-height: 1.5;
    font-size:${props => props.FontSize || "14px"};
    color: ${props => props.Color || "#000"};
    text-align: ${props => props.TextAlign || "justify"};
`

export const CardMedia= styled.div`
    height: 0;
    padding-top: 56.25%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    background-image: url(${props => props.BackgroundImage ||"https://depor.com/resizer/o5aJA-70SxxSWXCbiXJEBTqPxGU=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/XHO6FIRAJFDWXEXIGUJZ3MA3MI.jpg"});
`