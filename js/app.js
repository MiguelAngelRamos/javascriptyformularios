//* querySelector
let boton = document.querySelector('#addText');
let vacioDiv = document.querySelector('#miDiv');

let parrafo = document.querySelector('.parrafo');
console.log(parrafo);

//* Vamos a estar atentos al evento click del botón

boton.addEventListener('click', function() {
  // console.log('Damos Click!!');
  //* creando un elemento (parrafo)
  let nuevoParrafo = document.createElement('p');
  //* agregamos texto al parrafo
  nuevoParrafo.textContent = 'Bootcamp Java full Stack';

  //* Agregar el nuevo elemento "p" al div vacio
  vacioDiv.appendChild(nuevoParrafo);

  //* Agregamos los estilos del div
  vacioDiv.classList.add('bg-success', 'p-3', 'text-white');
});