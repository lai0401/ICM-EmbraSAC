
let selectEmpresas = document.querySelector('#empresas')

fetch("Empresas-BD.json").then((response) => {
  response.json().then((empresas) => {
    console.log(empresas[0])
    
  })
})