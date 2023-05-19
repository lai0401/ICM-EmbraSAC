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
  options.setAttribute('label', 'UFs')
  response.forEach(function(uf){
    options.innerHTML += '<option> '+uf.sigla+' </option>'
  })

  uf.append(options)

})



//Enviar formulário  de cadastro
//const handleSubmit = (event) => {
//  event.preventDefault();

  //const userFirstname = document.querySelector('input[name=userFirstname]').value;
//  const userLastname = document.querySelector('input[name=userLastname]').value;
//  const cpf = document.querySelector('input[name=cpf]').value;
  //const birthdayDate = document.querySelector('input[name=birthdayDate]').value;
//  const genero = document.querySelector('input[name=gender]').value;
//  const email = document.querySelector('input[name=email]').value;
//  const telefone = document.querySelector('input[name=number]').value;
//  const senha = document.querySelector('input[name=password]').value;
 // const confirmarSenha = document.querySelector('input[name=passwordConfirm]').value;
//  const uf = document.querySelector('select[name=uf]').value;
//  const termos = document.querySelector('input[name=terms]').value;
  
 // fetch('https://api.sheetmonkey.io/form/jngXyAKYbs1RW3cCso2Pkb', {

   // method: 'post',
    //headers: {
     // 'Accept': 'application/json',
     // 'Content-Type': 'application/json',
   // },
    //body: JSON.stringify({ userFirstname, userLastname, cpf, birthdayDate, genero, email, telefone, senha, confirmarSenha, uf, termos}),
  //});
//}
//document.querySelector('form').addEventListener('submit', handleSubmit);

//Enviar reclamação SEM cadastro

////////