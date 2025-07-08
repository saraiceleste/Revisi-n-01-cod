const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//add id 
const $n = document.querySelector('#n');
const $b = document.querySelector('#b');
const $l = document.querySelector('#l');
 

/**
 * se muestra la información de un usuario de GitHub en el DOM
 * @param {string} username -  
 */


//add async function
async function displayUser(username) {
  $n.textContent = 'cargando...';


  try {
  const response = await fetch(`${usersEndpoint}/${username}`);

// add answer validation http
  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
  console.log(data);

  //Se eliminó el uso incorrecto de comillas simples y se usó acceso directo a propiedades + fallback
  $n.textContent = data.name ||'Nombre no disponible'
  $b.textContent = data.blog || 'Blog no disponible'
  $l.textContent = data.location || 'Ubicacion no disponible'
} catch (error) {
  handleError (error);
  }
}

function handleError(err) {
  console.error('¡Ocurrió un error!', err);
  //corrrecion de nombre de variable
  $n.textContent = `Algo salió mal: ${err.message}`;
}
displayUser('stolinski');