// referencia: https://pruebaangularjs.abelcabezaroman.com/

import React from 'react'
import del from './img/borrar.png' 
import edit from './img/editar.png' 
import comment from './img/comentar.png' 
import add from './img/anadir.png' 

export const Products = ({ productos, eliminar, anadir, editar, comentar }) => {

  return (
    <div className='prod'>
      {productos.map((item, index) => (
        <div className='card' key={index}>

          <div className='card_images'>
            <img className='card_img' title='comentar' alt='comentar' src={comment} onClick = {() => comentar(index)}/>
            <img className='card_img' title='editar' alt='editar' src={edit} onClick={() => editar(index)} />
            <img className='card_img' title='borrar' alt='borrar' src={del} onClick={() => eliminar(index)}/>
          </div>

          <div className='card_text'>
            <h3>{item.name}</h3>
            <p>Stock: {item.stock}</p>
          </div>

        </div>
      ))}

        <div className='anadir' onClick={() => anadir()}>
            <img className='anadir_img' title='añadir' alt='anadir' src={add} />
        </div>

    </div>
  )

}
