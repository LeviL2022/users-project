const users = {
    nome: "Juliana",
    email: "juu@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "mari@m.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, users)
admin.criarCurso()
admin.exibirInfos()