import User from './user.js';
import divMostrarPerfil from './interfaceUsuario.js';

const formulario = document.getElementById('formulario');
const btnCorreo = document.getElementById('btnCorreo');
const btnEditar = document.getElementById('btnEditar');
const btnEliminar = document.getElementById('btnEliminar');

const persona = new User();

document.addEventListener('DOMContentLoaded', () => {
  divMostrarPerfil();
  formulario.reset();
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  persona.name = name;
  persona.lastName = lastName;
  persona.email = email;
  persona.crearPerfil(persona);
  formulario.reset();
});

btnCorreo.addEventListener('click', () => {
  let correo = document.getElementById('email').value;
  persona.buscarPerfil(correo);
  let perfilPersona = JSON.parse(localStorage.getItem('buscar'));
  console.log(perfilPersona);
  const { name, lastName, email, id } = perfilPersona;

  document.getElementById('name').value = name;
  document.getElementById('lastName').value = lastName;
  document.getElementById('email').value = email;
  document.getElementById('id').value = id;
});

btnEditar.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const id = document.getElementById('id').value;

  persona.name = name;
  persona.lastName = lastName;
  persona.email = email;
  persona.modificarPerfil(id, persona);
  formulario.reset();
});

btnEliminar.addEventListener('click', () => {
  const id = document.getElementById('id').value;
  persona.eliminarPerfil(id);
});
