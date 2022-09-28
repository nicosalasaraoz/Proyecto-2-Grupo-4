(
    function validarDato() {
        let id = localStorage.getItem('id')
        let localSTG = JSON.parse(localStorage.getItem('usuario')) || [];
        let usuarioExistente = localSTG.filter(local => local.id === Number(id))

        if (id !== null) {
            if (usuarioExistente[0].role === 'usuario' ) {
                location.href = '/users.html'
            } else {
                location.href = '/homeadmin.html'
            }
        }

    }
)()
