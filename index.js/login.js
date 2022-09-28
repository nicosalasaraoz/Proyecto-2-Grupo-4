function login() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let localSTG = JSON.parse(localStorage.getItem('usuario')) || []
    let userExists = localSTG.filter(local => local.user === user)

    if (userExists.length > 0) {
        if (userExists[0].pass === pass) {
            localStorage.setItem('id', JSON.stringify(userExists[0].id))
            setTimeout(() => {
                userExists[0].role === 'admin'
                    ?
                    location.href= "homeadmin.html"
                    :
                    location.href=  "users.html"
            }, 1000);
        }
    }
}