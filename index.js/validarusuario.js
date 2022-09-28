(
    function validarDato() {
        
        let id = localStorage.getItem('id')
        let localSTG = JSON.parse(localStorage.getItem('usuario')) || [];
        let usuarioExistente = localSTG.filter(local => local.id === Number(id))

        if (id === null) {
            location.href = 'index.html'
        } else if (usuarioExistente[0].role === 'admin') {
            location.href = 'homeadmin.html'
        }

    }
)()

const logout = () => {
    localStorage.removeItem('id')
    location.href = 'index.html'
}