

function clicou(){
  document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
  //console.log(document.getElementById("agradecimento"));
  //alert("Obrigada por clicar");
}

function redirecionar(){
  window.open("https://elietemiranda.com");
  window.location.href = ("https://elietemiranda.com");
}

function trocar(elemento){
  document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
  //alert("trocar texto");
  elemento.innerHTML = "Obrigada por passar o mouse aqui";
}

function voltar(){
  document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  //elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
  alert("pagina carregada");
}

function funcaoChange(elemento){
  console.log(elemento.value);
}

/*function validaIdade(idade){
  var validar;
  if(idade >=18){
    validar = true
  }else{
    validar = false

    }
    return validar;
}

var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));
*/
/*
function soma(n1, n2){
  return n1 + n2;
}
alert(soma (5, 10));
*/
/*
function setReplace(frase, nome, name){
  return frase.replace(nome, name)
}
alert (setReplace("Vai Japão", "Japão", "Brasil"));
*/
// var d = new Date();
// alert(d.getMonth()+1);
// console.log(d.getDate());
// alert(d.getHours());

/*
var count;
for(count=0; count<=5; count++){
  alert(count);
};
*/
/*
var count = 5;
while (count < 5){
  console.log(count);
  count = count + 1;
  alert(count);
  count ++
}
*/

/*
var idade = prompt("Qual é a sua idade?");
if(idade > 18){
  alert("maior de idade");
}else{
  alert("menor de idade");
};*/


// var frutas = [{nome: "uva", cor:"vermelha"}, {nome: "uva", cor:"roxaa"}]
// console.log(frutas);
// alert(frutas[1].nome);

// var fruta = {nome: "uva", cor:"vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);


// var lista = ["maça", "laranja", "pera"];
// lista.push(uva); //incluir elementos
// lista.pop(uva); //retirar elementos

// console.log(lista.length); //quantidade de elementos da lista
// console.log(lista.reverse()); //reordena os elementos da lista
// console.log(lista[1]); //mostrar itens da lista
// console.log(lista.toString()); //mostrar os itens da lista
// console.log(lista.join(" - ")) //transforma o array em string e adiciona o traço

// var nome = "Eliete Miranda";
// var idade = 32;
// var frase = "Palmeiras é o melhor time do mundo";
// //alert (nome + " tem" + idade + " anos");
// alert (idade + idade2);
// console.log(nome);
// console.log(frase.replace("Palmeiras", "Atlético Mineiro"));
// //alert(frase.replace("Palmeiras", "Brasil"));
// console.log(frase.toUpperCase());
// //console.log(frase.toLowerCase());
