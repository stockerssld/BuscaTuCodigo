import React, { useEffect, useState } from 'react'

import { Prism } from '../../Components/Prism'
import { usePrism } from '../../Hooks/usePrism'
import ImagenEjemplo1V, { ImagenEjemplo1 } from '../../Documentación/Imagenes/Ejemplo1'
import { Column, Container } from 'rbx'
import { ImagesData } from './Datos'
import { ImageExample } from '../../Util/Images/example'
import { usePropiedad } from '../../Hooks/usePropiedad'
export default function ImagesPage() {


    const propiedad = usePropiedad()
    const prism = usePrism()
    const [Border, setBorder] = useState(null)
    useEffect(() => {
        propiedad.setPropiedad({ ...propiedad.propiedad, link: 'https://i.blogs.es/9927c4/portada/450_1000.jpg' })
    }, [])


    const {propiedad:propiedadGeneral}=propiedad
    console.log(propiedadGeneral)
    
    if(propiedadGeneral===null){
        return <>Loading</>
    }
    return ImagesData && ImagesData.map((item, i) => {
        return <div key={i} style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '2rem' }}>{item.Titulo}</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <ImageExample propiedadGeneral={propiedadGeneral}/>
                </div>
                <div style={{ flex: 1, backgroundColor: 'red' }}>
                    <h1 style={{ fontSize: '1.8rem' }}>Propiedades de imagenes</h1>
                    <h2>Link</h2>
                    <input value={propiedadGeneral.link} onChange={(e)=>propiedad.setPropiedad({ ...propiedad.propiedad,link:e.target.value})} placeholder="Link" />
                    <h2>Border Radius</h2>
                    <input value={Border} onChange={(e)=>  propiedad.setPropiedad({ ...propiedad.propiedad, border:e.target.value })} placeholder="Border" />
                    <div>
                        <button>Ver codigo</button>
                    </div>
                </div>
            </div>
            <div id="prism-title">{item.Subtitulo}</div>
            <div key={i} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {item.Ejemplos.map((item, i) => {
                    return (

                        <div key={i} style={{ height: 150, width: 150, display: 'flex', flexDirection: 'column', padding: 5 }}>
                            <p>
                                {item.titulo}
                            </p>
                            <div onClick={()=>{
                            propiedad.setPropiedad({ ...propiedad.propiedad, efecto :item.efecto})
                            }} style={{background:"green"}}>
                                <item.Ejemplo />
                            </div>
                            {/* <Column.Group style={{ textAlign: 'center' }}>
                            <Column>
                            
                            </Column>
                            {/* <Prism  {...prism} prismData={item.codigo} /> 
                        </Column.Group> */}
                        </div>
                    )
                })}
            </div>
        </div>
    })


}