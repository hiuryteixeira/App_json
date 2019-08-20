const url = 'https://dados.ifpb.edu.br/dataset/d02eb6b8-5745-4436-ae22-ef1c182897d9/resource/61f5a0ad-642d-4580-ab62-1110318d0eea/download/alunos.json'
const axios = require('axios')

const area = f => f.area_conhecimento === 'ENGENHARIA CIVIL' // filtar por contador
const aprovacao = f => f.aprovado === true // O IGUAL E EXATAMENTE IGUAL  FILTRA APOSENTADO
const situacao = f => f.situacao === 'Matriculado'


axios.get(url).then(resposta => {
    const servidores = resposta.data
    module.exports.resultado =
    servidores.filter(area).filter(aprovacao).filter(situacao)

    // const resultado_filtro = servidores.filter(cargo).filter(situacao).filter(jornada)
    // console.log(resultado_filtro)
})