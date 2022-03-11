export default class User {
  url = 'http://localhost:4000/usuario/';
  constructor(name, lastName, email) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
  }

  crearPerfil(persona) {
    axios
      .post(this.url, persona)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  buscarPerfil(email) {
    return axios.get(this.url).then(({ data }) => {
      console.log(data.find((user) => user.email === email));
      localStorage.setItem(
        'buscar',
        JSON.stringify(data.find((user) => user.email === email))
      );
    });
  }
  modificarPerfil(id, persona) {
    axios
      .put(this.url + id, persona)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  eliminarPerfil(id) {
    axios
      .delete(this.url + id)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }
}
