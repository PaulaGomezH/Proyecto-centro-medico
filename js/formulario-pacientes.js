const formulario = document.getElementById("registro-pacientes-form")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const paciente ={
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value,
    }
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formulario.reset()
    alert("paciente registrado con exito")
})