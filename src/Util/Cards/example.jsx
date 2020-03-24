import React from 'react'
import {CardColumns,Card,CardTitle,CardDescription, CardMedia } from './index'
// export  const CardExample=()=>(
//     <CardColumns>
//         <Card >
//             <CardTitle> Hola</CardTitle>
//             <CardDescription> AOMfqwdmqwOD </CardDescription>
//         </Card>
//     </CardColumns>
// )
// export  const CardExample=()=>(
//     <CardColumns>
//         <Card >
//             <CardTitle> Hola</CardTitle>
//             <CardDescription> AOMfqwdmqwOD </CardDescription>
//         </Card>
        // <Card Background="#afaaaa" >
        //     <CardTitle FontSize="20px" FontWeight="900" Color="#886e5c"  TextAlign="center" > Card Personalizado</CardTitle>
        //     <CardDescription FontSize="15px" Color="#ffffff" TextAlign="right" > Este es un contenido de ejemplo.
        //     </CardDescription>
        //     <CardMedia BackgroundImage="https://depor.com/resizer/o5aJA-70SxxSWXCbiXJEBTqPxGU=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/XHO6FIRAJFDWXEXIGUJZ3MA3MI.jpg">
        //     </CardMedia>
        // </Card>
//     </CardColumns>
// )

// export  const CardExample1=()=>(
//     <CardColumns>
//         <Card Background="#afaaaa" >
//             <CardTitle FontSize="20px" FontWeight="900" Color="#886e5c" TextAlign="center"> Card Personalizado</CardTitle>
//             <CardDescription  FontSize="15px" Color="#ffffff" TextAlign="right" > Este es un contenido de ejemplo.
//             </CardDescription>
//         </Card>
//     </CardColumns>
// )

export const CardExample=()=>(
    <CardColumns>
        <Card>
        <CardMedia title="Dota 2" BackgroundImage="https://depor.com/resizer/o5aJA-70SxxSWXCbiXJEBTqPxGU=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/XHO6FIRAJFDWXEXIGUJZ3MA3MI.jpg"/>
            <CardTitle TextAlign="center"> Dota 2</CardTitle>
            <CardDescription> Razor, Lich Tauren. </CardDescription>
        </Card>
    </CardColumns>
)