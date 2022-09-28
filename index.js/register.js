function validarForm() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let validPass = document.getElementById('validPass').value;
    let localSTG = JSON.parse(localStorage.getItem('usuario')) || []

    const array = []

    if (user === '' || pass === '' || validPass === '') {
        alert('formulario en blanco')
    } else {
                for (let i = 0; i < localSTG.length; i++) {
                    const usuarioEnLocalSTG = localSTG[i];
                    array.push(usuarioEnLocalSTG)
                }
                let userExists = localSTG.filter(local => local.user === user)
                    console.log(userExists)
                if (userExists.length === 0) {
                    if (pass === validPass) {
                        array.push({ id: localSTG.length + 1, user, pass, role: 'user'})
                        localStorage.setItem('usuario', JSON.stringify(array))
                        console.log(array)
                        alert('Se registro correctamente.Espere ser habilitado por el Administrador')

                    } else {
                            alert('contraseñas no son iguales')
                            }
                }else{
                        alert('usuario ya existe')
                    }
            }
}