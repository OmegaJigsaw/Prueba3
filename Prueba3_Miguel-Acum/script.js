const categorias = [
  { id: -1, nombre: "No Seleccionado" },
  { id: 1, nombre: "Familia" },
  { id: 2, nombre: "Amigos" },
  { id: 3, nombre: "Trabajo" },
];

// PROGRAMAR AQUÍ LA PRUEBA:

// CARGA CATEGORIAS
const selectCatergoria = document.querySelector("#categoria");

categorias.forEach(i => {
  let option = document.createElement("option");
  option.innerText = i.nombre;
  option.id = i.id;
  selectCatergoria.appendChild(option);
})

// VARIABLES
const correo = document.querySelector("#email");
const nombre = document.querySelector("#nombre");
const listaContactos = [];

// BOTON
const btnGuardar = document.querySelector("#btn-guardar");
btnGuardar.addEventListener("click", function(){
  if (nombre.value == ""){
    divName = document.querySelector("#divName")
    error = document.createElement("label");
    error.innerText = "Debe completar este campo"
    error.style.color = "red"
    error.style.display = "block"
    divName.appendChild(error)
  }
  else if(correo.value == ""){
    divEmail = document.querySelector("#divEmail");
    error = document.createElement("label");
    error.innerText = "Debe completar este campo";
    error.style.color = "red";
    error.style.display = "block";
    divEmail.appendChild(error);
  }
  else if (selectCatergoria.options[selectCatergoria.selectedIndex].value == "-1") {
    divCate = document.querySelector("#divCat");
    error = document.createElement("label");
    error.innerText = "Debe elegir en este campo";
    error.style.color = "red";
    error.style.display = "block";
    divCate.appendChild(error);
  }
  else{
    datosContacto ={
      nombre: nombre.value,
      correo: correo.value,
      categoria: selectCatergoria.options[selectCatergoria.selectedIndex].value
    }
    listaContactos.push(datosContacto);
    localStorage.setItem("contactos",JSON.stringify(listaContactos));
  }
})

//tabla
const contactos = JSON.parse(localStorage.getItem("contactos"))
const tbody = document.querySelector("#tbody")
contactos.forEach(i => {
  const fila = document.createElement("tr");
  const col = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");

  col.innerText = i.nombre;
  col2.innerText = i.correo;
  if (i.categoria == "1"){
    col3.innerText = "Famila";
  }
  else if (i.categoria == "2"){
    col3.innerText = "Amigos";
  }
  else if (i.categoria == "3"){
    col3.innerText = "Trabajo";
  }

  tbody.appendChild(fila);
  fila.appendChild(col);
  fila.appendChild(col2);
  fila.appendChild(col3);
})