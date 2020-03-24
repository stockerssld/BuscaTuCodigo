import styled from 'styled-components'

export const Image=styled.img`
    max-width: 100%;
    height: auto;
    border-radius: ${props => props.BorderRadius || "0"};
    cursor: ${props => props.Cursor || "pointer"};
    opacity: ${props => props.Opacity || "1"};
    filter: ${props=>{return props.Blur?'blur(4px)':
              props.Brightness?'brightness(250%)':
              props.Contrast?'contrast(180%)':
              props.Grayscale?'grayscale(100%)':
              props.Huerotate?'hue-rotate(180deg)':
              props.Invert?'invert(100%)':
              props.Opacity?'opacity(50%)':
              props.Saturate?'saturate(7)':
              props.Sepia?'sepia(100%)':
              props.Shadow?'drop-shadow(8px 8px 10px green)':
              'null'}};
`