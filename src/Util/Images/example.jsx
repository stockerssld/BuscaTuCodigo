import React from 'react'

import { Image } from '.'
import { ButtonsExample } from '../Buttons/ButtonsExamples'
import { Button } from 'zent'


export const ImageExample2=()=>(
    <div>
        <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" />
        <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" Brightness />
        <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" Contrast />
        <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" Grayscale />
        <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" Huerotate />
        <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" Invert />
        <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" Opacity />
        <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" Saturate />
        <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" Sepia />
        <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" Shadow />
    </div>
)

export const ImageExample=()=>(
    <div>
        <ButtonsExample/>
        {/* <Image src="https://i.blogs.es/9927c4/portada/450_1000.jpg" /> */}
    </div>
)