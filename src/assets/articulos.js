
const articulos = [
    { nombre: "Remera", descripcion: "Esto es una remera", id: 1, img: "https://picsum.photos/200" },
    { nombre: "Pantalon", descripcion: "Esto es un pantalon", id: 2, img: "https://picsum.photos/200" },
    { nombre: "Campera", descripcion: "Esto es una campera", id: 3, img: "https://picsum.photos/200" }
]

export const getData = new Promise((res, rej) => {

    let condition = true
    setTimeout(() => {
        if (condition) {
            res(articulos)
        } else {
            rej('salio mal :(')
        }
    }, 2000)
})

const articulo = {
    nombre: "Remera",
    precio: 1500,
    descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eos doloremque eligendi quisquam suscipit at provident facilis architecto laboriosam sunt blanditiis veniam fuga, quasi tenetur necessitatibus dolore ipsa magnam ducimus pariatur!',
    id: 1,
    img: "https://picsum.photos/900",
    stock: 8
};

export const getArticuloData = new Promise((res, rej) => {

    let condition = true
    setTimeout(() => {
        if (condition) {
            res(articulo)
        } else {
            rej('salio mal :(')
        }
    }, 2000)
})