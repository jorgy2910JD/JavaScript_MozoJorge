function fecth() {
    let xhr = new XMLHttpRequest();
    let url = 'https://swapi.py4e.com/api/people/1/' ;

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
function displayStar (Data) {
    let starInfo = document.getElementById('Datos');
    if (Data.response==="error") {
        starInfo.innerHTML= '<p> Error!!! </p>'

    }else {
        console.log(Data);
        starInfo.innerHTML=`
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Height</th>
            <th scope="col">Mass</th>
            <th scope="col">Hair Color</th>
            <th scope="col">Eye Color</th>
            <th scope="col">Birth</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${Data.name}</td>
            <td>${Data.height}</td>
            <td>${Data.mass}</td>
            <td>${Data.hair_color}</td>
            <td>${Data.eye_color}</td>
            <td>${Data.birth_year}</td>
            <td>${Data.gender}</td>
          </tr>
        </tbody>
      </table> 
      `
    }
}
fecth();



