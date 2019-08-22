$(document).ready(function(){
    $.get( "http://localhost:3003/", function(data) {
        
        for(let i=0; i<data.length; i++)
        {
            document.getElementById("lista").innerHTML += `Nome:
    ${data[i].nome} `
            document.getElementById("lista").innerHTML += `Area:    
    ${data[i].area_conhecimento} `
            document.getElementById("lista").innerHTML += `Resumo:
    ${data[i].aprovado} `
            document.getElementById("lista").innerHTML += `Aprovado:
    ${data[i].aprovado} `
            document.getElementById("lista").innerHTML += `Data de Inicio:
    ${data[i].inicio_execucao} `
            document.getElementById("lista").innerHTML += `Nome:
    ${data[i].participantes} <br>` // para filtar e imprimir nome tem que criar vetor e laço de repetição.
    }
  });
});