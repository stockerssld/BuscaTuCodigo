import React from 'react'
import { Button } from '.'
import { Colors } from '../Color'

export const ButtonsExample=()=>{
    console.log('Colors',Colors)
    return(
    <div>
   <Button Secundary  Size="Small">
        HOLA
    </Button>
    <Button Background="orange" Fha="yellow">
        HOLA
    </Button>
    <Button Primary Size="Large">
        HOLA
    </Button>
    <Button Info>
        HOLA
    </Button>
    <Button Success>
        HOLA
    </Button>
    <Button Error>
        Hola
    </Button>
    <Button Block Warning>
        Hola
    </Button>
    <Button Link>
        HOLA
    </Button>
    </div>
)}