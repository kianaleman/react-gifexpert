import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  // console.log({images, isLoading});

  // useEffect, hook de react que funciona para disparar eventos secundarios
  // es decir algun proceso que se desee ejecutar cuando algo suceda

  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []); // si las dependencias quedan vacias, solo se ejecutara la primera vez que se crea/dibuja el componente

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
