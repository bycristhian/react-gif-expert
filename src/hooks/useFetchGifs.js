import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => { // un hook es una funcion que retorna algo 

     const [images, setImages] = useState([]);  
     const [isLoading, setIsLoading] = useState(true); // estado para saber si se esta cargando la info

    
        const getImages = async () => {
            const newImages = await getGifs(category);
            setImages(newImages);
            setIsLoading(false); // Cambiamos el estado a false cuando ya tenemos las imagenes
        }
    
        useEffect(() => {
            getImages();
        }, [category]); // <-- Añadimos category como dependencia para que se ejecute al cambiar
    
    return {
        images,
        isLoading
    }
}
