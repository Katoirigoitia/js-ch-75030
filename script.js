const pacientes = [];

// Función interactiva para añadir pacientes
function agregarPaciente() {
    const nombrePaciente = prompt('Ingrese el nombre del paciente:');
    const nombreTutor = prompt('Ingrese el nombre del tutor:');
    const alimentacionPrevia = prompt('Ingrese la alimentación previa a la consulta:');
    const alimentacionPostConsulta = prompt('Ingrese la alimentación posterior a la consulta:');

    const confirmacion = confirm(`¿Desea guardar la siguiente información?\n
        Paciente: ${nombrePaciente}\n
        Tutor: ${nombreTutor}\n
        Alimentación previa: ${alimentacionPrevia}\n
        Alimentación posterior: ${alimentacionPostConsulta}`);

    if (confirmacion) {
        const paciente = {
            nombrePaciente,
            nombreTutor,
            alimentacionPrevia,
            alimentacionPostConsulta
    };
        pacientes.push(paciente);
        alert('Información guardada exitosamente.');
    } else {
        alert('Información no guardada.');
    }
}

// lista de pacientes
function listaPacientes() {
    if (pacientes.length > 0) {
        console.log('Lista de Pacientes:');
        pacientes.forEach((paciente, index) => {
            console.log(`Paciente ${index + 1}:`);
            console.log(`Nombre: ${paciente.nombrePaciente}`);
            console.log(`Tutor: ${paciente.nombreTutor}`);
            console.log(`Alimentación Previa: ${paciente.alimentacionPrevia}`);
            console.log(`Alimentación Posterior: ${paciente.alimentacionPostConsulta}`);
            console.log('----------------------');
    });
    alert(`Se han registrado ${pacientes.length} pacientes.`);
    } else {
    alert('No se han registrado pacientes.');
    }
}

// funciones en consola.
agregarPaciente(); // Añadir un paciente
agregarPaciente(); // Añadir otro paciente
listaPacientes(); // Mostrar la lista de pacientes
