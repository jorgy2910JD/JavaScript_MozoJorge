class CharacterRandomP extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML =  `
    <center>
        <br><br><br><br><br>
        <h1>Random User Generator ;)</h1>
        <div class="container">
            <div id="container">
                
            </div>        
            
            <div id="Info">
                
            </div>
            <div class="datos">
                <button id="btt" onmouseover="nombre()"><i class="user" aria-hidden="true"></i></i></i></button>
                <button id="btt" onmouseover="correo()"><i class="envelope" aria-hidden="true"></i></button>
                <button id="btt" onmouseover="cumpleaños()"><i class="birthday" aria-hidden="true"></i></button>
                <button id="btt" onmouseover="ubicacion()"><i class="map-marker" aria-hidden="true"></i></button>
                <button id="btt" onmouseover="telefono()"><i class="phone" aria-hidden="true"></i></button>
                <button id="btt" onmouseover="contraseña()"><i class="lock" aria-hidden="true"></i></button>

            </div> 

        </div>
    </center>
        `;  
}
}

customElements.define('persona-r', CharacterRandomP);

function User(){
    let xhr = new XMLHttpRequest();
    let url = `https://randomuser.me/api/`;
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayUser(response);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}


