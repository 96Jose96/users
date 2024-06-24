//CONSOLE.LOG PARA VER EL CONTENIDO DE LA API

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))  //CONSOLE.LOG PARA LA API ORIGINAL



//VARIABLES:

const list = document.getElementById('listaUsuarios');
let usersList = [];

//FUNCIONES PARA EDAD ALEATORIA Y EMPUJAR USUARIOS AL ARRAY:

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
        console.log(usersList)  //CONSOLE.LOG PARA COMPROBAR EL ARRAY CON OBJETOS MODIFICADOS
        })       
}

//CREAR TARJETAS USUARIO CON LOS DATOS Y MOSTRARLOS

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