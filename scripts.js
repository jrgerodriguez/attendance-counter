let totalGeneral = document.querySelector('.total-general')

let totalHombres = 0
let totalMujeres = 0
let totalJovenes = 0


const actualizarTotalGeneral = () => {
    totalGeneral.textContent = totalHombres + totalMujeres + totalJovenes
}

const obtenerTotalHombres = () => {
     

    const incremento = document.querySelector('.incremento-hombres')
    const decremento = document.querySelector('.decremento-hombres')
    const total = document.querySelector('.total-hombres')

    const actualizarTotal = () => {
        total.textContent = totalHombres
        actualizarTotalGeneral()
    }

    incremento.addEventListener("click", () => {
        totalHombres++
        actualizarTotal()
    })

    decremento.addEventListener("click", () => {
        totalHombres--
        actualizarTotal()
    })
}

const obtenerTotalMujeres = () => {
     

    const incremento = document.querySelector('.incremento-mujeres')
    const decremento = document.querySelector('.decremento-mujeres')
    const total = document.querySelector('.total-mujeres')

    const actualizarTotal = () => {
        total.textContent = totalMujeres
        actualizarTotalGeneral()
    }

    incremento.addEventListener("click", () => {
        totalMujeres++
        actualizarTotal()
    })

    decremento.addEventListener("click", () => {
        totalMujeres--
        actualizarTotal()
    })
}

const obtenerTotalJovenes = () => {
     

    const incremento = document.querySelector('.incremento-jovenes')
    const decremento = document.querySelector('.decremento-jovenes')
    const total = document.querySelector('.total-jovenes')

    const actualizarTotal = () => {
        total.textContent = totalJovenes
        actualizarTotalGeneral()
    }

    incremento.addEventListener("click", () => {
        totalJovenes++
        actualizarTotal()
    })

    decremento.addEventListener("click", () => {
        totalJovenes--
        actualizarTotal()
    })
}



obtenerTotalHombres()
obtenerTotalMujeres()
obtenerTotalJovenes()