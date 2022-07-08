
const articulos = [
    { nombre: "Remera1", descripcion: "Esto es una remera", id: 1, img: "https://picsum.photos/200", tipo: "remeras", stock: 7, precio: 111},
    { nombre: "Pantalon1", descripcion: "Esto es un pantalon", id: 2, img: "https://picsum.photos/200", tipo: "pantalones", stock: 6, precio: 222},
    { nombre: "Campera1", descripcion: "Esto es una campera", id: 3, img: "https://picsum.photos/200", tipo: "camperas", stock: 8, precio: 333},
    { nombre: "Remera2", descripcion: "Esto es una remera", id: 4, img: "https://picsum.photos/200", tipo: "remeras", stock: 7, precio: 111},
    { nombre: "Pantalon2", descripcion: "Esto es un pantalon", id: 5, img: "https://picsum.photos/200", tipo: "pantalones", stock: 6, precio: 222},
    { nombre: "Campera2", descripcion: "Esto es una campera", id: 6, img: "https://picsum.photos/200", tipo: "camperas", stock: 8, precio: 333},
    { nombre: "Remera3", descripcion: "Esto es una remera", id: 7, img: "https://picsum.photos/200", tipo: "remeras", stock: 7, precio: 111},
    { nombre: "Pantalon3", descripcion: "Esto es un pantalon", id: 8, img: "https://picsum.photos/200", tipo: "pantalones", stock: 6, precio: 222},
    { nombre: "Campera3", descripcion: "Esto es una campera", id: 9, img: "https://picsum.photos/200", tipo: "camperas", stock: 8, precio: 333},
]

export const getData = (categoryId) => {
return new Promise((res, rej) => {
    const articulosFiltrados = articulos.filter(
        (art) => art.tipo === categoryId
        )
    setTimeout(() => {
        categoryId
        ? res(articulosFiltrados)
        : res(articulos)
    }, 2000)
});
};


export const getArticuloData = (id) => {
    return new Promise((res, rej)=> {
        const articuloEncontrado = articulos.find(art => art.id === Number(id))
        setTimeout(() => {
            res(articuloEncontrado);
        }, 1000)
    })
}