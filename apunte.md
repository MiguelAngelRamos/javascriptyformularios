## Documentación queryselector y getelementById

### Introducción

querySelector y getElementById son métodos de JavaScript que se utilizan para seleccionar elementos de una página web, pero difieren en la forma en que seleccionan los elementos.

getElementById selecciona un elemento en la página web por su atributo id. Como los id deben ser únicos en una página, este método devuelve un único elemento. Por ejemplo:

```js
const myElement = document.getElementById('my-id');
```

Por otro lado, querySelector utiliza selectores CSS para seleccionar elementos de la página web. Esto significa que se pueden seleccionar elementos por etiqueta, clase, atributo y otros criterios. Además, querySelector puede devolver múltiples elementos si se encuentra más de un elemento que cumple con los criterios de selección. 

Por ejemplo:
```js
const myElement = document.querySelector('#my-id');
const myElements = document.querySelectorAll('.my-class');
```
En general, se recomienda utilizar getElementById cuando se necesita seleccionar un elemento específico de la página por su ID único. Por otro lado, se recomienda utilizar querySelector y querySelectorAll cuando se necesita seleccionar elementos basados en criterios más específicos, como la clase, la etiqueta o los atributos.




