/*
function logout() {

    const localSTGUsers = JSON.parse(localStorage.getItem('user')) || []
    const idStorage = localStorage.getItem('id')
    const resultSearchUser = localSTGUsers.filter(data => data.id === Number(idStorage)) 
    const arrayUser = []

    for (let i = 0; i < localSTGUsers.length; i++) {
        const element = localSTGUsers[i];
        if (element.user !== resultSearchUser[0].user) {
            arrayUser.push(element)
        }
    }

    if (resultSearchUser.length === 1) {
        resultSearchUser[0].stateLogin = false
        arrayUser.push(...resultSearchUser)

        localStorage.setItem('user', JSON.stringify(arrayUser))
        localStorage.removeItem('id')

        setTimeout(() => {
            location.href = "index.html"
        }, 3000)

    }
}
*/