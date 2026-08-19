async function showDress() {
const res = await fetch("https://6a7cb25ea008c10e4cbfaf68.mockapi.io/:endpoint")
.then(res => res.json())
.then(console.log);

} 
  
/* showDress.array.forEach(dress => *\{ const card = document.createElement("section")
    
});*/

// bookContainer.innerHTML = "";