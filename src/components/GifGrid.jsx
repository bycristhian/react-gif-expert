//import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";
//git checkout -- . // para deshacer cambios no deseados en el repo


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    console.log({ isLoading });

    return (
        <>
             <h3>{ category }</h3>
             {
                isLoading && ( <h2>Cargando...</h2> ) //AND LOGICO
             }

             <div className="card-grid">
                {
                    images.map( (image) => (
                            <GifItem
                            key={ image.id }
                            { ...image }
                            />
                    ))
                }
              </div>
        </>
    )
}