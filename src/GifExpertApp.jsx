import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  // Almacenar informacion que tienda a cambiar el html => pensar en un hook que mantenga el estado

  // Va en contra de los hooks, no es buena practica
  // if( true ){
  //   const [ categories2 , setCategories2 ] = useState([ 'One Punch', 'Dragon Ball' ]);
  // }

  // se pueden tener varios hooks tanto como se deseen
  const [categories, setCategories] = useState(["one punch"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    // categories.push( newCategory );
    // console.log('valorant');
    // dejar de usar push para arreglar, push se usa para mutaciones
    // setCategories( [ 'Valorant', ...categories ] );

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat, 'Valorant'] );
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={ setCategories }
        // Cuando lleva la palabra on indica que esta emitiendo algo
        onNewCategory={onAddCategory}
      />

      {/* Listado de gif */}

      {/* <button onClick={ onAddCategory }>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* <li> ABC </li> */}

      {/* Gif Item */}
    </>
  );
};
