// CLASE CONSTRUCTORA
class Electrodomesticos {
    constructor(id, category, name, precio, stock, cuotas){
        this.id = id;
        this.category = category;
        this.name = name;
        this.precio = precio;
        this.stock= stock;
        this.cuotas = cuotas || 0;
        this.precioFinalCuotas = "Seleccione las cuotas";
    }
    // metodo
    calcularPrecioCuotas(){
        switch(this.cuotas) {
            case "1": 
                const seleccionar = "Seleccione las cuotas"
                this.precioFinalCuotas = seleccionar;
                break;
            case "3":
                let cuota3 = (this.precio / 3);
                this.precioFinalCuotas = Math.round(cuota3 * 1.05);
                break;
            case "6":
                let cuota6 = (this.precio / 6);
                this.precioFinalCuotas = Math.round(cuota6 * 1.15);
                break;
            case "12":
                let cuota12 = (this.precio / 12);
                this.precioFinalCuotas = Math.round(cuota12 * 1.40);
                break;
        }
        return this.precioFinalCuotas;
    }
}
// ARRAY QUE VA A CONTENER LOS PRODUCTOS
const productos = [];


// CREO LOS PRODUCTOS
const electroD1 = new Electrodomesticos(1, "Tecnologia", "Televisor", 35000, 5,);
const electroD2 = new Electrodomesticos(2, "Tecnologia", "PlayStation 5", 80000,);
const electroD3 = new Electrodomesticos(3, "Tecnologia", "Notebook", 68000, 7);

// CARGO LOS PRODUCTOS AL ARRAY
productos.push(electroD1, electroD2, electroD3);

// SELECCIONO DONDE VOY A PONER MIS PRODUCTOS
const divContenedor = document.getElementById("contenedor")

// EMPIEZO A MOSTRAR LOS PRODUCTOS EN EL HTML

for(const producto of productos){
    // se cra este div por cada elemento dentro del array. un div para cada producto
    const div = document.createElement("div")
    // le cargo al div la estructura html que va a contener
    div.innerHTML = `
                <h2 class="categoria">La categoría del producto es: ${producto.category}</h2>
                <h3>El nombre del producto es: ${producto.name}</h3>
                <h3>El precio es: ${producto.precio}</h3>
                <p>Seleccione la cantidad de cuotas: 
                    <select id=${producto.id}>
                        <option value="1">Seleccione las cuotas</option>
                        <option value="3">3 cuotas</option>
                        <option value="6">6 cuotas</option>
                        <option value="12">12 cuotas</option>
                    </select>
                </p>
                <p id=precio-${producto.id}>El precio de cada cuota es: $ ${producto.precioFinalCuotas}</p>
                `
        // agregamos el div al div del html
        divContenedor.append(div)

        //constante sobre la que vamos a aplicar el evento
        const select = document.getElementById(`${producto.id}`)

        // evento (cambia el precio de las cuotas segun lo seleccionado en el select)
        select.addEventListener("change", () => {
            //paso lo parametros que cambio
            cambioCuotas(select.value, producto)  
        })
}
// recibe los parametros y muestra el precio
function cambioCuotas(cantCuotas, producto){
    producto.cuotas = cantCuotas;
    const precioFinalCuotas = producto.calcularPrecioCuotas();
    document.getElementById(`precio-${producto.id}`).innerHTML = `El precio de cada cuota es: $ ${precioFinalCuotas}`
}