// Aplicación para agregar pacientes a una lista.
// En el 
const pacientes = [];

// Función interactiva para añadir pacientes
function agregarPaciente() {
  let seguirAgregando = true;

  while (seguirAgregando) {
    const nombrePaciente = prompt('Ingrese el nombre del paciente:');
    const nombreTutor = prompt('Ingrese el nombre del tutor:');
    const alimentacionPrevia = prompt('Ingrese la alimentación previa a la consulta:');
    const alimentacionPosterior = prompt('Ingrese la alimentación posterior a la consulta:');

    const confirmacion = confirm(`¿Esta información es correcta?\n
      Paciente: ${nombrePaciente}\n
      Tutor: ${nombreTutor}\n
      Alimentación previa: ${alimentacionPrevia}\n
      Alimentación posterior: ${alimentacionPosterior}`);

    if (confirmacion) {
      const paciente = {
        nombrePaciente,
        nombreTutor,
        alimentacionPrevia,
        alimentacionPosterior
      };
      pacientes.push(paciente);
      alert('Información guardada exitosamente.');
    } else {
      alert('Información no guardada.');
    }

    seguirAgregando = confirm('Agregar otro paciente?');
  }
}

// Función para mostrar la lista de pacientes
function mostrarPacientes() {
  if (pacientes.length > 0) {
    console.log('Lista de Pacientes:');
    pacientes.forEach((paciente, index) => {
      console.log(`Paciente ${index + 1}:`);
      console.log(`Nombre: ${paciente.nombrePaciente}`);
      console.log(`Tutor: ${paciente.nombreTutor}`);
      console.log(`Alimentación Previa: ${paciente.alimentacionPrevia}`);
      console.log(`Alimentación Posterior: ${paciente.alimentacionPosterior}`);
      console.log('----------------------');
    });
    alert(`Se han registrado ${pacientes.length} pacientes. Revisa la consola para más detalles.`);
  } else {
    alert('No se han registrado pacientes.');
  }
}

// Ejemplo de cómo utilizar las funciones
agregarPaciente(); // Añadir pacientes
mostrarPacientes(); // Mostrar la lista de pacientes
