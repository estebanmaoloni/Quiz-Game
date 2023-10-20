fetch('base-preguntas.json')
.then(response => response.json())
.then(data => {

    let aciertosAnimacion = document.querySelector('.aciertos')
    let erroresAnimacion = document.querySelector('.errores')
    let puntosAnimacion = document.querySelector('.puntos')
    let puntosNegativosAnimacion = document.querySelector('.puntos')

    let aciertos = 0
    let errores = 0
    let puntos = 0
    
    const preguntas = data.nucleoPreguntas
    shuffleArray(preguntas)
    let indicePreguntaActual = 0
    function mostrarPregunta(indice) {
        const preguntaActual = preguntas[indice]
            let contenidoPrincipal = document.querySelector('.contenidoJuego')
            let contenedor = document.createElement('div')
                contenedor.className = 'contenedor-objetos'
                contenedor.innerHTML=`
                    <img src = "${preguntaActual.imagen}" class="imagen">
                    <h2 class="pregunta">${preguntaActual.pregunta}</h2>
                    <button class="botones1" id="estilo-botones">${preguntaActual.respuesta1}</button>
                    <button class="botones2" id="estilo-botones">${preguntaActual.respuesta2}</button>
                    <button class="botones3" id="estilo-botones">${preguntaActual.respuesta3}</button>
                    <button class="botones4" id="estilo-botones">${preguntaActual.respuesta4}</button>
                `
                contenidoPrincipal.append(contenedor)

                let seleccionarRespuesta1 = document.querySelector('.botones1')
                seleccionarRespuesta1.addEventListener('click',()=>{
                    if (preguntaActual.respuesta1===preguntaActual.respuestaCorrecta) {
                        aciertos++
                        puntos+=100
                        let sumarAciertos = document.querySelector('#aciertos')
                        sumarAciertos.innerHTML=`Aciertos:${aciertos}`
                        let sumarPuntos = document.querySelector('#puntos')
                        sumarPuntos.innerHTML=`Puntos:${puntos}`
                        aciertosAnimacion.classList.add('aciertosAnimacion')
                        puntosAnimacion.classList.add('puntosAnimacion')
                        let botonCorrecto = document.querySelector('.botones1')
                        botonCorrecto.innerHTML=`
                        <button id="estilo-botones-correcto">${preguntaActual.respuesta1}</button>
                        `
                        seleccionarRespuesta1.disabled = true
                        seleccionarRespuesta2.disabled = true
                        seleccionarRespuesta3.disabled = true
                        seleccionarRespuesta4.disabled = true

                        let contenedorSiguiente = document.createElement('div')
                        let botonSiguiente = document.querySelector('#botonSiguiente')
                        botonSiguiente.innerHTML=`
                            <button class="botonFuncion" data-aos="fade-up" data-aos-duration="5000">Siguiente </button>
                        `
                        botonSiguiente.append(contenedorSiguiente)

                        let botonFuncion = document.querySelector('.botonFuncion')
                        botonFuncion.addEventListener('click',()=>{
                            contenidoPrincipal.innerHTML=''
                            let eliminarElemento = document.querySelector('.botonFuncion')
                            eliminarElemento.parentNode.removeChild(eliminarElemento)
                            indicePreguntaActual++
                            if (indicePreguntaActual < preguntas.length) {
                                mostrarPregunta(indicePreguntaActual)
                                puntosNegativosAnimacion.classList.remove('puntosNegativosAnimacion')
                                erroresAnimacion.classList.remove('erroresAnimacion')
                                aciertosAnimacion.classList.remove('aciertosAnimacion')
                                puntosAnimacion.classList.remove('puntosAnimacion')
                            }else{
                                console.log('Fin')
                                Swal.fire({
                                    title: '¡Resultados!',
                                    html: `<p class="swal">Aciertos:${aciertos}</p>` +
                                        `<p class="swal">Errores:${errores}</p>` +
                                        `<p class="swal">Puntos:${puntos}</p>`,
                                    imageUrl:'./imagenes/',
                                    popup: 'swal2-show',
                                    allowOutsideClick: false,
                                    confirmButtonText: '¡Jugar otra vez!',
                                    customClass:{
                                        popup:'class-popup',
                                        confirmButton:'class-button',
                                        title:'class-title',
                                        image:'class-imagen',
                                    }
                                }).then((result) => {
                                    if (result.value) {
                                        window.location.href = `./index.html`
                                    }
                                }); 
                            }
                        })

                        confetti({
                            particleCount: 350,
                            spread: 280
                            });

                    }else{
                        errores++
                        puntos-=50
                        let sumarErrores = document.querySelector('#errores')
                        sumarErrores.innerHTML=`Errores:${errores}`
                        let sumarPuntos = document.querySelector('#puntos')
                        sumarPuntos.innerHTML=`Puntos:${puntos}`
                        erroresAnimacion.classList.add('erroresAnimacion')
                        puntosNegativosAnimacion.classList.add('puntosNegativosAnimacion')
                        let botonCorrecto = document.querySelector('.botones1')
                        botonCorrecto.innerHTML=`
                        <button id="estilo-botones-incorrecto">${preguntaActual.respuesta1}</button>
                        `
                        seleccionarRespuesta1.disabled = true
                        seleccionarRespuesta2.disabled = true
                        seleccionarRespuesta3.disabled = true
                        seleccionarRespuesta4.disabled = true

                        let contenedorSiguiente = document.createElement('div')
                        let botonSiguiente = document.querySelector('#botonSiguiente')
                        botonSiguiente.innerHTML=`
                            <button class="botonFuncion" data-aos="fade-up" data-aos-duration="5000">Siguiente </button>
                        `
                        botonSiguiente.append(contenedorSiguiente)

                        let botonFuncion = document.querySelector('.botonFuncion')
                        botonFuncion.addEventListener('click',()=>{
                            contenidoPrincipal.innerHTML=''
                            let eliminarElemento = document.querySelector('.botonFuncion')
                            eliminarElemento.parentNode.removeChild(eliminarElemento)
                            indicePreguntaActual++
                            if (indicePreguntaActual < preguntas.length) {
                                mostrarPregunta(indicePreguntaActual)
                                puntosNegativosAnimacion.classList.remove('puntosNegativosAnimacion')
                                erroresAnimacion.classList.remove('erroresAnimacion')
                                aciertosAnimacion.classList.remove('aciertosAnimacion')
                                puntosAnimacion.classList.remove('puntosAnimacion')
                            }else{
                                console.log('Fin')
                                Swal.fire({
                                    title: '¡Resultados!',
                                    html: `<p class="swal">Aciertos:${aciertos}</p>` +
                                        `<p class="swal">Errores:${errores}</p>` +
                                        `<p class="swal">Puntos:${puntos}</p>`,
                                    imageUrl:'./imagenes/',
                                    popup: 'swal2-show',
                                    allowOutsideClick: false,
                                    confirmButtonText: '¡Jugar otra vez!',
                                    customClass:{
                                        popup:'class-popup',
                                        confirmButton:'class-button',
                                        title:'class-title',
                                        image:'class-imagen',
                                    }
                                }).then((result) => {
                                    if (result.value) {
                                        window.location.href = `./index.html`
                                    }
                                }); 
                            }
                        })
                    }
                })
                let seleccionarRespuesta2 = document.querySelector('.botones2')
                seleccionarRespuesta2.addEventListener('click',()=>{
                    if (preguntaActual.respuesta2===preguntaActual.respuestaCorrecta) {
                        aciertos++
                        puntos+=100
                        let sumarAciertos = document.querySelector('#aciertos')
                        sumarAciertos.innerHTML=`Aciertos:${aciertos}`
                        let sumarPuntos = document.querySelector('#puntos')
                        sumarPuntos.innerHTML=`Puntos:${puntos}`
                        aciertosAnimacion.classList.add('aciertosAnimacion')
                        puntosAnimacion.classList.add('puntosAnimacion')
                        let botonCorrecto = document.querySelector('.botones2')
                        botonCorrecto.innerHTML=`
                        <button id="estilo-botones-correcto">${preguntaActual.respuesta2}</button>
                        `
                        seleccionarRespuesta1.disabled = true
                        seleccionarRespuesta2.disabled = true
                        seleccionarRespuesta3.disabled = true
                        seleccionarRespuesta4.disabled = true

                        let contenedorSiguiente = document.createElement('div')
                        let botonSiguiente = document.querySelector('#botonSiguiente')
                        botonSiguiente.innerHTML=`
                            <button class="botonFuncion" data-aos="fade-up" data-aos-duration="5000">Siguiente </button>
                        `
                        botonSiguiente.append(contenedorSiguiente)

                        let botonFuncion = document.querySelector('.botonFuncion')
                        botonFuncion.addEventListener('click',()=>{
                            contenidoPrincipal.innerHTML=''
                            let eliminarElemento = document.querySelector('.botonFuncion')
                            eliminarElemento.parentNode.removeChild(eliminarElemento)
                            indicePreguntaActual++
                            if (indicePreguntaActual < preguntas.length) {
                                mostrarPregunta(indicePreguntaActual)
                                puntosNegativosAnimacion.classList.remove('puntosNegativosAnimacion')
                                erroresAnimacion.classList.remove('erroresAnimacion')
                                aciertosAnimacion.classList.remove('aciertosAnimacion')
                                puntosAnimacion.classList.remove('puntosAnimacion')
                            }else{
                                console.log('Fin')
                                Swal.fire({
                                    title: '¡Resultados!',
                                    html: `<p class="swal">Aciertos:${aciertos}</p>` +
                                        `<p class="swal">Errores:${errores}</p>` +
                                        `<p class="swal">Puntos:${puntos}</p>`,
                                    imageUrl:'./imagenes/',
                                    popup: 'swal2-show',
                                    allowOutsideClick: false,
                                    confirmButtonText: '¡Jugar otra vez!',
                                    customClass:{
                                        popup:'class-popup',
                                        confirmButton:'class-button',
                                        title:'class-title',
                                        image:'class-imagen',
                                    }
                                }).then((result) => {
                                    if (result.value) {
                                        window.location.href = `./index.html`
                                    }
                                }); 
                            }
                        })

                        confetti({
                            particleCount: 350,
                            spread: 280
                            });

                    }else{
                        errores++
                        puntos-=50
                        let sumarErrores = document.querySelector('#errores')
                        sumarErrores.innerHTML=`Errores:${errores}`
                        let sumarPuntos = document.querySelector('#puntos')
                        sumarPuntos.innerHTML=`Puntos:${puntos}`
                        erroresAnimacion.classList.add('erroresAnimacion')
                        puntosNegativosAnimacion.classList.add('puntosNegativosAnimacion')
                        let botonCorrecto = document.querySelector('.botones2')
                        botonCorrecto.innerHTML=`
                        <button id="estilo-botones-incorrecto">${preguntaActual.respuesta2}</button>
                        `   
                        seleccionarRespuesta1.disabled = true
                        seleccionarRespuesta2.disabled = true
                        seleccionarRespuesta3.disabled = true
                        seleccionarRespuesta4.disabled = true

                        let contenedorSiguiente = document.createElement('div')
                        let botonSiguiente = document.querySelector('#botonSiguiente')
                        botonSiguiente.innerHTML=`
                            <button class="botonFuncion" data-aos="fade-up" data-aos-duration="5000">Siguiente </button>
                        `
                        botonSiguiente.append(contenedorSiguiente)

                        let botonFuncion = document.querySelector('.botonFuncion')
                        botonFuncion.addEventListener('click',()=>{
                            contenidoPrincipal.innerHTML=''
                            let eliminarElemento = document.querySelector('.botonFuncion')
                            eliminarElemento.parentNode.removeChild(eliminarElemento)
                            indicePreguntaActual++
                            if (indicePreguntaActual < preguntas.length) {
                                mostrarPregunta(indicePreguntaActual)
                                puntosNegativosAnimacion.classList.remove('puntosNegativosAnimacion')
                                erroresAnimacion.classList.remove('erroresAnimacion')
                                aciertosAnimacion.classList.remove('aciertosAnimacion')
                                puntosAnimacion.classList.remove('puntosAnimacion')
                            }else{
                                console.log('Fin')
                                Swal.fire({
                                    title: '¡Resultados!',
                                    html: `<p class="swal">Aciertos:${aciertos}</p>` +
                                        `<p class="swal">Errores:${errores}</p>` +
                                        `<p class="swal">Puntos:${puntos}</p>`,
                                    imageUrl:'./imagenes/',
                                    popup: 'swal2-show',
                                    allowOutsideClick: false,
                                    confirmButtonText: '¡Jugar otra vez!',
                                    customClass:{
                                        popup:'class-popup',
                                        confirmButton:'class-button',
                                        title:'class-title',
                                        image:'class-imagen',
                                    }
                                }).then((result) => {
                                    if (result.value) {
                                        window.location.href = `./index.html`
                                    }
                                }); 
                            }
                        })
                    }
                })
                let seleccionarRespuesta3 = document.querySelector('.botones3')
                seleccionarRespuesta3.addEventListener('click',()=>{
                    if (preguntaActual.respuesta3===preguntaActual.respuestaCorrecta) {
                        aciertos++
                        puntos+=100
                        let sumarAciertos = document.querySelector('#aciertos')
                        sumarAciertos.innerHTML=`Aciertos:${aciertos}`
                        let sumarPuntos = document.querySelector('#puntos')
                        sumarPuntos.innerHTML=`Puntos:${puntos}`
                        aciertosAnimacion.classList.add('aciertosAnimacion')
                        puntosAnimacion.classList.add('puntosAnimacion')
                        let botonCorrecto = document.querySelector('.botones3')
                        botonCorrecto.innerHTML=`
                        <button id="estilo-botones-correcto">${preguntaActual.respuesta3}</button>
                        `
                        seleccionarRespuesta1.disabled = true
                        seleccionarRespuesta2.disabled = true
                        seleccionarRespuesta3.disabled = true
                        seleccionarRespuesta4.disabled = true
                        
                        let contenedorSiguiente = document.createElement('div')
                        let botonSiguiente = document.querySelector('#botonSiguiente')
                        botonSiguiente.innerHTML=`
                            <button class="botonFuncion" data-aos="fade-up" data-aos-duration="5000">Siguiente </button>
                        `
                        botonSiguiente.append(contenedorSiguiente)                                

                        let botonFuncion = document.querySelector('.botonFuncion')
                        botonFuncion.addEventListener('click',()=>{
                            contenidoPrincipal.innerHTML=''
                            let eliminarElemento = document.querySelector('.botonFuncion')
                            eliminarElemento.parentNode.removeChild(eliminarElemento)
                            indicePreguntaActual++
                            if (indicePreguntaActual < preguntas.length) {
                                mostrarPregunta(indicePreguntaActual)
                                puntosNegativosAnimacion.classList.remove('puntosNegativosAnimacion')
                                erroresAnimacion.classList.remove('erroresAnimacion')
                                aciertosAnimacion.classList.remove('aciertosAnimacion')
                                puntosAnimacion.classList.remove('puntosAnimacion')
                            }else{
                                console.log('Fin')
                                Swal.fire({
                                    title: '¡Resultados!',
                                    html: `<p class="swal">Aciertos:${aciertos}</p>` +
                                        `<p class="swal">Errores:${errores}</p>` +
                                        `<p class="swal">Puntos:${puntos}</p>`,
                                    imageUrl:'./imagenes/',
                                    popup: 'swal2-show',
                                    allowOutsideClick: false,
                                    confirmButtonText: '¡Jugar otra vez!',
                                    customClass:{
                                        popup:'class-popup',
                                        confirmButton:'class-button',
                                        title:'class-title',
                                        image:'class-imagen',
                                    }
                                }).then((result) => {
                                    if (result.value) {
                                        window.location.href = `./index.html`
                                    }
                                }); 
                            }
                        })

                        confetti({
                            particleCount: 350,
                            spread: 280
                            });

                    }else{
                        errores++
                        puntos-=50
                        let sumarErrores = document.querySelector('#errores')
                        sumarErrores.innerHTML=`Errores:${errores}`
                        let sumarPuntos = document.querySelector('#puntos')
                        sumarPuntos.innerHTML=`Puntos:${puntos}`
                        erroresAnimacion.classList.add('erroresAnimacion')
                        puntosNegativosAnimacion.classList.add('puntosNegativosAnimacion')
                        let botonCorrecto = document.querySelector('.botones3')
                        botonCorrecto.innerHTML=`
                        <button id="estilo-botones-incorrecto">${preguntaActual.respuesta3}</button>
                        `
                        seleccionarRespuesta1.disabled = true
                        seleccionarRespuesta2.disabled = true
                        seleccionarRespuesta3.disabled = true
                        seleccionarRespuesta4.disabled = true

                        let contenedorSiguiente = document.createElement('div')
                        let botonSiguiente = document.querySelector('#botonSiguiente')
                        botonSiguiente.innerHTML=`
                            <button class="botonFuncion" data-aos="fade-up" data-aos-duration="5000">Siguiente </button>
                        `
                        botonSiguiente.append(contenedorSiguiente)

                        let botonFuncion = document.querySelector('.botonFuncion')
                        botonFuncion.addEventListener('click',()=>{
                            contenidoPrincipal.innerHTML=''
                            let eliminarElemento = document.querySelector('.botonFuncion')
                            eliminarElemento.parentNode.removeChild(eliminarElemento)
                            indicePreguntaActual++
                            if (indicePreguntaActual < preguntas.length) {
                                mostrarPregunta(indicePreguntaActual)
                                puntosNegativosAnimacion.classList.remove('puntosNegativosAnimacion')
                                erroresAnimacion.classList.remove('erroresAnimacion')
                                aciertosAnimacion.classList.remove('aciertosAnimacion')
                                puntosAnimacion.classList.remove('puntosAnimacion')
                            }else{
                                console.log('Fin')
                                Swal.fire({
                                    title: '¡Resultados!',
                                    html: `<p class="swal">Aciertos:${aciertos}</p>` +
                                        `<p class="swal">Errores:${errores}</p>` +
                                        `<p class="swal">Puntos:${puntos}</p>`,
                                    imageUrl:'./imagenes/',
                                    popup: 'swal2-show',
                                    allowOutsideClick: false,
                                    confirmButtonText: '¡Jugar otra vez!',
                                    customClass:{
                                        popup:'class-popup',
                                        confirmButton:'class-button',
                                        title:'class-title',
                                        image:'class-imagen',
                                    }
                                }).then((result) => {
                                    if (result.value) {
                                        window.location.href = `./index.html`
                                    }
                                }); 
                            }
                        })
                    }
                })
                let seleccionarRespuesta4 = document.querySelector('.botones4')
                seleccionarRespuesta4.addEventListener('click',()=>{
                    if (preguntaActual.respuesta4===preguntaActual.respuestaCorrecta) {
                        aciertos++
                        puntos+=100
                        let sumarAciertos = document.querySelector('#aciertos')
                        sumarAciertos.innerHTML=`Aciertos:${aciertos}`
                        let sumarPuntos = document.querySelector('#puntos')
                        sumarPuntos.innerHTML=`Puntos:${puntos}`
                        aciertosAnimacion.classList.add('aciertosAnimacion')
                        puntosAnimacion.classList.add('puntosAnimacion')
                        let botonCorrecto = document.querySelector('.botones4')
                        botonCorrecto.innerHTML=`
                        <button id="estilo-botones-correcto">${preguntaActual.respuesta4}</button>
                        `
                        seleccionarRespuesta1.disabled = true
                        seleccionarRespuesta2.disabled = true
                        seleccionarRespuesta3.disabled = true
                        seleccionarRespuesta4.disabled = true

                        let contenedorSiguiente = document.createElement('div')
                        let botonSiguiente = document.querySelector('#botonSiguiente')
                        botonSiguiente.innerHTML=`
                            <button class="botonFuncion" data-aos="fade-up" data-aos-duration="5000">Siguiente </button>
                        `
                        botonSiguiente.append(contenedorSiguiente)

                        let botonFuncion = document.querySelector('.botonFuncion')
                        botonFuncion.addEventListener('click',()=>{
                            contenidoPrincipal.innerHTML=''
                            let eliminarElemento = document.querySelector('.botonFuncion')
                            eliminarElemento.parentNode.removeChild(eliminarElemento)
                            indicePreguntaActual++
                            if (indicePreguntaActual < preguntas.length) {
                                mostrarPregunta(indicePreguntaActual)                                                               
                                puntosNegativosAnimacion.classList.remove('puntosNegativosAnimacion')
                                erroresAnimacion.classList.remove('erroresAnimacion')
                                aciertosAnimacion.classList.remove('aciertosAnimacion')
                                puntosAnimacion.classList.remove('puntosAnimacion')
                            }else{
                                console.log('Fin')
                                Swal.fire({
                                    title: '¡Resultados!',
                                    html: `<p class="swal">Aciertos:${aciertos}</p>` +
                                        `<p class="swal">Errores:${errores}</p>` +
                                        `<p class="swal">Puntos:${puntos}</p>`,
                                    imageUrl:'./imagenes/',
                                    popup: 'swal2-show',
                                    allowOutsideClick: false,
                                    confirmButtonText: '¡Jugar otra vez!',
                                    customClass:{
                                        popup:'class-popup',
                                        confirmButton:'class-button',
                                        title:'class-title',
                                        image:'class-imagen',
                                    }
                                }).then((result) => {
                                    if (result.value) {
                                        window.location.href = `./index.html`
                                    }
                                }); 
                            }
                        })

                        confetti({
                            particleCount: 350,
                            spread: 280
                            });

                    }else{
                        errores++
                        puntos-=50
                        let sumarErrores = document.querySelector('#errores')
                        sumarErrores.innerHTML=`Errores:${errores}`
                        let sumarPuntos = document.querySelector('#puntos')
                        sumarPuntos.innerHTML=`Puntos:${puntos}`
                        erroresAnimacion.classList.add('erroresAnimacion')
                        puntosNegativosAnimacion.classList.add('puntosNegativosAnimacion')
                        let botonCorrecto = document.querySelector('.botones4')
                        botonCorrecto.innerHTML=`
                        <button id="estilo-botones-incorrecto">${preguntaActual.respuesta4}</button>
                        `
                        seleccionarRespuesta1.disabled = true
                        seleccionarRespuesta2.disabled = true
                        seleccionarRespuesta3.disabled = true
                        seleccionarRespuesta4.disabled = true

                        let contenedorSiguiente = document.createElement('div')
                        let botonSiguiente = document.querySelector('#botonSiguiente')
                        botonSiguiente.innerHTML=`
                            <button class="botonFuncion" data-aos="fade-up" data-aos-duration="5000"">Siguiente </button>
                        `
                        botonSiguiente.append(contenedorSiguiente)

                        let botonFuncion = document.querySelector('.botonFuncion')
                        botonFuncion.addEventListener('click',()=>{
                            contenidoPrincipal.innerHTML=''
                            let eliminarElemento = document.querySelector('.botonFuncion')
                            eliminarElemento.parentNode.removeChild(eliminarElemento)
                            indicePreguntaActual++
                            if (indicePreguntaActual < preguntas.length) {
                                mostrarPregunta(indicePreguntaActual)
                                puntosNegativosAnimacion.classList.remove('puntosNegativosAnimacion')
                                erroresAnimacion.classList.remove('erroresAnimacion')
                                aciertosAnimacion.classList.remove('aciertosAnimacion')
                                puntosAnimacion.classList.remove('puntosAnimacion')
                            }else{
                                console.log('Fin')
                                Swal.fire({
                                    title: '¡Resultados!',
                                    html: `<p class="swal">Aciertos:${aciertos}</p>` +
                                        `<p class="swal">Errores:${errores}</p>` +
                                        `<p class="swal">Puntos:${puntos}</p>`,
                                    imageUrl:'./imagenes/',
                                    popup: 'swal2-show',
                                    allowOutsideClick: false,
                                    confirmButtonText: '¡Jugar otra vez!',
                                    customClass:{
                                        popup:'class-popup',
                                        confirmButton:'class-button',
                                        title:'class-title',
                                        image:'class-imagen',
                                    }
                                }).then((result) => {
                                    if (result.value) {
                                        window.location.href = `./index.html`
                                    }
                                }); 
                            }
                        })
                    } 
                })
            }    

        mostrarPregunta(indicePreguntaActual);
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



