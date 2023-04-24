import React, { useState } from 'react'
import { Products } from '../Components/Products'

export const Home = () => {
    const myProducts = [
        {
            name: "webcam",
            stock: 5,
            comments: ["Comentario de prueba 01", "Comentario de prueba 02"],
        },
        {
            name: "monitor",
            stock: 2,
            comments: ["Comentario de prueba 03", "Comentario de prueba 04"],
        },
        {
            name: "teclado",
            stock: 3,
            comments: ["Comentario de prueba 05"],
        },
        {
            name: "ram",
            stock: 8,
            comments: ["Comentario de prueba 06"],
        }
    ];

    const [misProductos, setMisProductos] = useState(myProducts)

    const deleteProduct = (articulo) => {
        console.log("borrando");
        const eliminado = misProductos.filter((item, index) => {
            return articulo !== index;
        })
        setMisProductos(eliminado)
    }

    const addProduct = () => {
        console.log("añadiendo");
        let name = prompt("Escribe un nombre para el nuevo artículo");
        let stock = prompt("Indica la cantidad para el nuevo artículo");
        const nuevaLista = [...misProductos];
        nuevaLista.push({name: name, stock: stock})
        setMisProductos(nuevaLista);
    }

    const editProduct = (articulo) => {
        console.log("editando");
        const nuevaLista = [...misProductos];
        nuevaLista[articulo].name = prompt(`Escribe un nuevo nombre para ${nuevaLista[articulo].name}`);
        nuevaLista[articulo].stock = prompt(`Indica una nueva cantidad para ${nuevaLista[articulo].name}`);
        setMisProductos(nuevaLista);
    }

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const commentProduct = (index) => {
        console.log("comentando");
        setSelectedIndex(index);
        setModalVisible(true);
    }

    const changeUser = () => {
        console.log("cambiando usuario");
    }

    return (
        <div className='home'>
            <div className='cabecera'>
                <h1>Productos</h1>
                <div>
                    <h4 className='usuario'>PROVEEDOR</h4>
                    <button onClick={() => changeUser()}>CAMBIAR DE USUARIO</button>
                </div>
            </div>

            <Products 
                productos={misProductos}
                eliminar={deleteProduct}
                anadir={addProduct}
                editar={editProduct}
                comentar={commentProduct}>
            </Products>

            {modalVisible && (
                <div className='modal'>
                    <div className="modal__content">
                        <div className='modal__header'>
                            <div className='modal__boton'>
                                <button className='modal__boton' onClick={() => setModalVisible(false)}>X</button>
                            </div>
                            <p>Comentarios de index: {selectedIndex}</p>
                        </div>

                        <div className='modal__comments'>
                            {misProductos.map((item, index) => (
                                <div className='card' key={index}>
                                    <p>{item.comments}</p>
                                </div>))}
                        </div>

                        <div className='modal__new'>

                        </div>
                    </div>
                </div>
            )}

        </div>
    )

}