import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ( {target} ) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault(); // Evita que se recargue la pagina
        if( inputValue.trim().length <= 1) return;

       // setCategories( categories => [ inputValue, ...categories ] )
        onNewCategory( inputValue.trim() );
        setInputValue(''); 
    }



   return (
    <form onSubmit={ onSubmit } > 
      <input 
          type="text"
          placeholder="Buscar gifs"
          value={ inputValue } 
          onChange={ onInputChange }
       />
      </form>
   )
}
