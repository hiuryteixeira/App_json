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
            document.getElementById("lista").innerHTML += `Justificativa:
    ${data[i].situacao} <br>`
    }
  });
});