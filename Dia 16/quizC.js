const foto =document.querySelector('#foto');
const namePerson = document.querySelector('#namePerson');
const emailPerson = document.querySelector('#emailPerson');
const birthdayPerson = document.querySelector('#birthdayPerson');
const addressPerson = document.querySelector('#addressPerson');
const phonePerson = document.querySelector('#phonePerson');
const passwordPerson = document.querySelector('#passwordPerson');

const createUser = async () => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.medium;
    namePerson.textContent = datos.name.first;
    emailPerson.textContent = datos.email;
    birthdayPerson.textContent = datos.dob.date;
    addressPerson.textContent = datos.location.street.name + ', ' + datos.location.city + ', ' + datos.location.country;
    phonePerson.textContent = datos.phone;
    passwordPerson.textContent = datos.login.password;
}
document.addEventListener ("DOMContentLoaded", createUser);