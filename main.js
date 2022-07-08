// CLASE CONSTRUCTORA
class Electrodomesticos {
    constructor(id, category, name, price, stock, cuotas){
        this.id = id;
        this.category = category;
        this.name = name;
        this.price = price;
        this.stock= stock;
        this.cuotas = cuotas || 0;
        this.precio_final_cuotas = 0;
    }
    // metodo
    calcularPrecioCuotas(){
        switch(this.cuotas) {
            case "3":
                let cuota3 = (this.precio / 3);
                this.precio_final_cuotas = Math.round(cuota3 * 1.05);
                break;
            case "6":
                let cuota6 = (this.precio / 6);
                this.precio_final_cuotas = Math.round(cuota6 * 1.15);
                break;
            case "12":
                let cuota12 = (this.precio / 12);
                this.precio_final_cuotas = Math.round(cuota12 * 1.40);
                break;
        }
        return this.precio_final_cuotas;
    }
}

// ARRAY QUE VA A CONTENER LOS PRODUCTOS
const productos = [];


// CREO LOS PRODUCTOS
const electroD1 = new Electrodomesticos(1, "Tecnologia", "Televisor", 35000, 5);
const electroD2 = new Electrodomesticos(2, "Tecnologia", "PlayStation 5", 80000, 3);
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
                <h3>El precio es: ${producto.price}</h3>
                <p>Seleccione la cantidad de cuotas: 
                    <select id=${producto.id}>
                        <option value="3">3 cuotas</option>
                        <option value="6">6 cuotas</option>
                        <option value="12">12 cuotas</option>
                    </select>
                </p>
                <p>El precio de cada cuota es: $${producto.precio_final_cuotas}</p>
                `
    // agregamos el div al div del html
                divContenedor.append(div)
                // recibimos el cambio del select
                
    
                //creamos el evento para que al seleccionar la cantidad de cuotas cambie el precio
            const select = document.getElementById(`${producto.id}`)

            //funcion que retorne el valor del select 
            function valorSelect(){
                return select.value
            }
            console.log(valorSelect())
    
            select.addEventListener("change", valorSelect);

}