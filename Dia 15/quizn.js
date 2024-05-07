const namePerson = document.getElementById("name").value;
const emailPerson = document.getElementById("email").value;
const birthdayPerson = document.getElementById("birthday").value;
const addressPerson = document.getElementById("address").value;
const phonePerson = document.getElementById("phoneNumber").value;
const passwordPerson = document.getElementById("password").value;






function fecth() {
    let xhr = new XMLHttpRequest();
    let url = 'https://randomuser.me/api/' ; 
    xhr.open('GET',url,true)
    xhr.onreadystatechange=function(){
        if(this.readyState ===4 && this.status===200){
            let response =JSON.parse(this.responseText);
            console.log(response);
            displayStar(response);
        }
        else{
            console.log("ERROR!")
            console.log(this.statusText);
        }
    }
    xhr.send(); 

}
