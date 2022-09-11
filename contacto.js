function validar() {
    let textoUno = document.getElementById('texto1').value
    let textoDos = document.getElementById('texto2').value    
    if(textoUno === '' || textoDos === ''){
        document.getElementById('texto1').className = 'form-control is-invalid'
        document.getElementById('texto2').className = 'form-control is-invalid'
    }else{
        document.getElementById('texto1').className = 'form-control is-valid'
        document.getElementById('texto2').className = 'form-control is-valid'
    }}