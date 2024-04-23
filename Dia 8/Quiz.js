function Swapi ();

fetch ("https://swapi.py4e.com/api/people/1/")

.then(res=> res.json()) 
.then(response=> {
    console.log(response)
})




