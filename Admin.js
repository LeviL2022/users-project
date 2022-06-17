import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin('João', 'joa@j.com', '2035/12/13')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())