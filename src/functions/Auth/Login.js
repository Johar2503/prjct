function validateUser(username, email) {
    var res = {
        status: false,
        userID: '',
        userType: ''
    }
    if(username === 'admin' && email === 'admin') {
        res = {
            status: true,
            userID: '0',
            userType: 'admin'
        }
    }else{
        res = {
            status: true,
            userID: '1',
            userType: 'user'
        }
    }
    return res
}


export { validateUser }