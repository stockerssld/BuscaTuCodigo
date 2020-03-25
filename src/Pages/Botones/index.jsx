import React from 'react'
import { ButtonsExample } from '../../Util/Buttons/ButtonsExamples'
import { Column } from 'rbx'

export default function BotonesPage(){
return (<>
<div  style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '2rem' }}>{'Botones'}</h1>
            <div id="prism-title">{'item.Subtitulo'}</div>
            {/* {item.Componentes.map((item, i) => { */}
                {/* return ( */}
                    <div>
                        <p>
                            item.titulo
                        </p>
                        <Column.Group style={{ textAlign: 'center' }}>
                            <Column>
                            <ButtonsExample/>

                            </Column>{/* <Prism  {...prism} prismData={item.codigo} />*/}
                            </Column.Group> 
                    </div>
                {/* ) */}
            {/* // })} */}

        </div>
</>)
}