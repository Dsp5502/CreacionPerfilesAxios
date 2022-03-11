const url = 'http://localhost:4000/usuario/';

const tbody = document.querySelector('tbody');

const divMostrarPerfil = async () => {
  const resp = await fetch(url);
  const personas = await resp.json();

  personas.forEach((persona) => {
    const { name, lastName, id, email } = persona;
    tbody.innerHTML += `
          <tr>
          <td><a id=${id} href="#"  style="background-color: blue;">${id}</a></td>
          <td>${name} ${lastName}</td>
          <td>${email}</td>
          </tr>
        `;
  });
};

export default divMostrarPerfil;
