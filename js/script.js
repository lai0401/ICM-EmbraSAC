//Cidades e estados
const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
const cidade = document.getElementById("cities")
const uf = document.getElementById("uf")

uf.addEventListener('change', async function(){
  const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf.value+'/municipios'
  const request = await fetch(urlCidades)
  const response = await request.json()
  
  let options = ''
  response.forEach(function(cidades){
    options += '<option>'+cidades.nome+'</option>'
  })
  cidade.innerHTML = options
})



window.addEventListener('load', async() => {
  const request = await fetch(urlUF)
  const response = await request.json()

  const options = document.createElement("optgroup")
  options.setAttribute('label', '')
  response.forEach(function(uf){
    options.innerHTML += '<option> '+uf.sigla+' </option>'
  })

  uf.append(options)

}) 

//Animação do botão, para usar futuramente, quando funcionar
/*
const submitButton = document.querySelector('#sendForm');

const addingLoading = () => {
  submitButton.innerHTML = '<img src="./images/NKEOW-removebg-preview.png" id="Loading" alt="">'

}
const removingLoading = () => {
  submitButton.innerHTML = 'Cadastro finalizado'
}
*/
/*
const handleSubmit = (event) => {
  event.preventDefault();
  addingLoading();

  fetch('https://api.sheetmonkey.io/form/jngXyAKYbs1RW3cCso2Pkb').then(() => removingLoading());
}

document.querySelector('#register').addEventListener('submit', handleSubmit);*/