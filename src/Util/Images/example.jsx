import React from 'react'
import { Image } from '.'

export const ImageExample=({propiedadGeneral})=>{
    const {link,border,efecto}=propiedadGeneral
    switch (efecto) {
            case "Brightness":
             return (<div>
                <Image src={link} BorderRadius={border} Brightness/>
            </div>)
            break;
            case "Contrast":
             return (<div>
                <Image src={link} BorderRadius={border} Contrast/>
            </div>)
            break;
            case "Grayscale":
             return (<div>
                <Image src={link} BorderRadius={border} Grayscale/>
            </div>)
            break;
            case "Huerotate":
             return (<div>
                <Image src={link} BorderRadius={border} Huerotate/>
            </div>)
            break;
            case "Invert":
             return (<div>
                <Image src={link} BorderRadius={border} Invert/>
            </div>)
            break;
            case "Opacity":
             return (<div>
                <Image src={link} BorderRadius={border} Opacity/>
            </div>)
            break;
            case "Saturate":
             return (<div>
                <Image src={link} BorderRadius={border} Saturate/>
            </div>)
            break;
            case "Sepia":
             return (<div>
                <Image src={link} BorderRadius={border} Sepia/>
            </div>)
            break;
    
        default:
         return (<div>
                <Image src={link} BorderRadius={border} />
            </div>)
    }
}

