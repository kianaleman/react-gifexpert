import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    //!
    // Otra alternativa para añadir categoria es mandar las categorias como props


    const [inputValue, setInputValue] = useState('')

    const onInputChange = ( { target } ) =>{
        // console.log( event.target.value );
        // setInputValue('Hola Mundo');
        // setInputValue( event.target.value );
        setInputValue( target.value );

    }

    const onSubmit = ( event ) => {
        
        event.preventDefault();
        const newInputTrimmed = inputValue.trim().toLowerCase();

        if( newInputTrimmed.length <= 1 ) return;
        // console.log( event );
        // console.log(inputValue);
        // setCategories([inputValue, ...categories]);
        // setCategories( categories => [ inputValue, ...categories ] );
        onNewCategory( newInputTrimmed );
        setInputValue('');

    }


    return (
        // Los fragmentos se utilizan cuando se tienen mas de un elemento que sera el nodo root de ese componente


        <form onSubmit={ onSubmit } >
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ ( event ) => onInputChange( event ) }
                onChange={ onInputChange }
            />
        </form>
    )
}
