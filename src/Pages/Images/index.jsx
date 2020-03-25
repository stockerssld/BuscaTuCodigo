import React, { useEffect } from 'react'

import { Prism } from '../../Components/Prism'
import { usePrism } from '../../Hooks/usePrism'
import ImagenEjemplo1V, { ImagenEjemplo1 } from '../../Documentación/Imagenes/Ejemplo1'
import { Column, Container } from 'rbx'
import { ImagesData } from './Datos'
export default function ImagesPage() {
    const prism = usePrism()
    console.log(ImagesData)
    return ImagesData && ImagesData.map((item, i) => {
        return <div key={i} style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '2rem' }}>{item.Titulo}</h1>
            <div id="prism-title">{item.Subtitulo}</div>
            {item.Componentes.map((item, i) => {
                return (
                    <div key={i}>
                        <p>
                            {item.titulo}
                        </p>
                        <Column.Group style={{ textAlign: 'center' }}>
                            <Column>
                            <item.Ejemplo/>
                            </Column><Prism  {...prism} prismData={item.codigo} /></Column.Group>
                    </div>
                )
            })}

        </div>
    })


}