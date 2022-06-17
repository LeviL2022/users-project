//function User(nome, email) {
//    this.nome = nome,
//        this.email = email
//
//    this.exibitInfos = function () {
//        return `${this.nome}, ${this.email}`
//    }
//}

//const novoUser = new User('Helio', 'hel@h.com')
//console.log(novoUser.exibitInfos())

//function Admin(role) {
//    User.call(this, 'Helio', 'hel@h.com')
//    this.role = role || 'estudante'
//}
//
//Admin.prototype = Object.create(User.prototype)
//const novoUser = new Admin('admin')
//console.log(novoUser.exibitInfos())
//console.log(novoUser.role)

const user = {
    exibitInfos: function (nome) {
        return nome
    }
}

const novoUser = Object.create(user)
console.log(novoUser.exibitInfos('Helio'))
console.log(user.isPrototypeOf(novoUser))














