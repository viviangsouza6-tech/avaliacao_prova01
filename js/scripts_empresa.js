
 const formEmpresas = document.querySelector('#form-empresas')
 const divListaempresas = document.querySelector('#div-lista')

 const empresas = []
 
 formEmpresas.addEventListener('submit', (evt)=>{
 
     evt.preventDefault()
 
     const dadosFormEmpresas = new FormData(formEmpresas)
 
     const empresa = {
         descricao: dadosFormEmpresas.get('descricao'),
         quantidade: Number(dadosFormEmpresas.get('quantidade')),
     }
 

     addEmpresas(empresa)
 
     formEmpresas.reset()
 })
 const addEmpresas = (objEmpresas) =>{
 
     const valorTotal = objEmpresas.quantidade * 220
 
     let valorCalculado
 
     if (objEmpresas.quantidade <= 1000){
         valorCalculado = "Não atingiu"
     }else if(objEmpresas.quantidade <= 10000){
         valorCalculado = valorTotal * 0.08
     }else if(objEmpresas.quantidade <= 15000){
         valorCalculado = valorTotal * 0.10
     }else if(objEmpresas.quantidade <= 25000){
         valorCalculado = valorTotal * 0.15 
     }else{
         valorCalculado = valorTotal * 0.20
     }
 
     objEmpresas.valorTotal = valorTotal
     objEmpresas.valorCalculado = valorCalculado
 
     empresas.push(objEmpresas)
 
     listEmpresas()
 }
 
 const listEmpresas = ()=>{
 
     divListaempresas.innerHTML = ''
 
     empresas.forEach((elem, i)=>{
 
         divListaempresas.innerHTML += `
         ${i+1} - Descrição da empresa: ${elem.descricao}<br>
         Quantidade de lixo coletada: ${elem.quantidade} t<br>
         Valor da coleta: R$ ${elem.valorTotal}<br>
         Bônus: ${elem.valorCalculado}<br><br>
         `
     })
 }