(
    function validarDato() {
        let id = localStorage.getItem('id')
        let localSTG = JSON.parse(localStorage.getItem('usuario')) || [];
        let usuarioExistente = localSTG.filter(local => local.id === Number(id))

        if (id === null) {
            location.href = './log-in.html'
        } else if (usuarioExistente[0].role === 'user') {
            location.href = 'users.html'
        }

    }
)()

const logout = () => {
    localStorage.removeItem('id')
    location.href = 'log-in.html'
}