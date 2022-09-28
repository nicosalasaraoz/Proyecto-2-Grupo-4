if (JSON.parse(localStorage.getItem("usuario")) === null) {
    localStorage.setItem("usuario", JSON.stringify([{ id: 1, user: "administrador@gmail.com", pass: "admin", role: 'admin', habilitado: true }]))
}

function login() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let localSTG = JSON.parse(localStorage.getItem('usuario')) || []
    let userExists = localSTG.filter(local => local.user === user)

    if (userExists.length > 0) {
        if (userExists[0].pass === pass && habilitado) {
            localStorage.setItem('id', JSON.stringify(userExists[0].id))
            setTimeout(() => {
                userExists[0].role === 'admin'
                    ?
                    location.href= "homeadmin.html"
                    :
                    location.href=  "users.html"
            }, 1000);
        }
        
        
    }else{
        alert("tu correo electronico no está registrado")
    }
}