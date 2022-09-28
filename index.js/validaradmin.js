/*(
    function validarDato(){
        let id = localStorage.getItem('id')
        let localSTG = JSON.parse(localStorage.getItem('usuario')) || []
        let userExists = localSTG.filter(local => local.id === id)
        if (id === null){
            window.location.href='./log-in.html'
        }else if(userExists[0].role === 'user')
        window.location.href='./users.html'
            
        }
    }
)()
*/
(function validarLogin(){
    const localSTGUsers = JSON.parse(localStorage.getItem('user')) || []
    const resultSearchUser = localSTGUsers.filter(data => data.stateLogin === true)

    if(resultSearchUser.length === 0){
        window.location.href = '/log-in.html'
    }else if(resultSearchUser[0].role !=='admin'){
        window.location.href = '/index.html'
    }
})()