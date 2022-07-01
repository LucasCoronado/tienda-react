
const articulos = [
    { nombre: "Remera", descripcion: "Esto es una remera", id: 1, img: "https://picsum.photos/200" },
    { nombre: "Pantalon", descripcion: "Esto es un pantalon", id: 2, img: "https://picsum.photos/200" },
    { nombre: "Campera", descripcion: "Esto es una campera", id: 3, img: "https://picsum.photos/200" }
]

export const getData = new Promise((res, rej) => {
    //acciones
    let condition = true
    setTimeout(() => {
        if (condition) {
            res(articulos)
        } else {
            rej('salio mal :(')
        }
    }, 2000)
})