/*1. La página HTML (`index.html`) tiene una lista (`ul`) con el id `listaUsuarios` donde se mostrarán los detalles de los usuarios.
2. El archivo CSS (`styles.css`) proporciona estilos básicos para mejorar la apariencia de la lista.
3. El archivo JavaScript (`script.js`) realiza lo siguiente:
    - Obtiene datos simulados de usuarios desde la API JSONPlaceholder `https://jsonplaceholder.typicode.com/users`.
    - Agrega una edad aleatoria a cada usuario.
    - Cada usuario tendrá una imagen asociada por `ID` (están en la carpeta assets/img) son extensión `.jpeg`  
    - Muestra detalles específicos de cada usuario en la lista en el DOM: name, age, username, img, phone, email, company, address
    - address tendrá estos datos como valor: usuario.address.street, usuario.address.suite, usuario.address.city

Debería quedar algo similar a esto

![users](./assets/img/users.png)

## Consejos

Aprovecha para usar:
- Destructuring
- spread operator. Crea un nuevo array con el objeto y con los nuevos datos a añadir (age, img, address con los nuevos datos)
- Modifica el archivo `styles.css` para cambiar estilos.
- Ajusta el archivo `script.js` para mostrar diferentes detalles de usuarios según tus necesidades.*/


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log())



//VARIABLES:

const list = document.getElementById('listaUsuarios');
let usersList = [];

//FUNCIONES:

const getAge = (min, max) => Math.floor(Math.random() * (max - min) + min)

const addUsers = (user) => {
    usersList.push(user);
}



function getUsers(api) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Solicitud no exitosa');
            }
            return response.json()
        })
        .then(data => {
            data.forEach(user => {
                getAge(20, 60);
                user.edad = getAge(20, 60);
                user.img = `./assets/img/${user.id}.jpeg`
                addUsers(user);
            });
        showUsers(usersList)    
        console.log(usersList)
        })       
}

function showUsers(usersList) {
    usersList.forEach (user => {
        const template = document.createElement('li');
        const userImg = document.createElement('img');
        userImg.classList.add('image');
        userImg.src = user.img, userImg.alt = 'Foto'
        template.innerHTML = 
            `
            <div class='card'>
                <div class='mainData'>
                    <h2><span>Nombre:</span> ${user.name}</h2>
                    <p><span>Edad:</span> ${user.edad}</p>
                    <p><span>Username:</span> ${user.username}</p>
                    <p><span>Teléfono:</span> ${user.phone}</p>
                    <p><span>Email:</span> ${user.email}</p>
                </div>
                <div class='address'>  
                    <p><span>Compañía:</span> ${user.company.name}</p>
                    <p><span>Dirección:</span> ${user.address.street} ${user.address.suite} ${user.address.city}</p>
                </div>
            </div>
            `
        template.appendChild(userImg);  
        listaUsuarios.appendChild(template);
    })
}    

getUsers('https://jsonplaceholder.typicode.com/users')