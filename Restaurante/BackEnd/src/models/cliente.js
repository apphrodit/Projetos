class Cliente {

    constructor(i){
        this.id = i.id
        this.nome = i.nome
        this.telefone = i.telefone
        this.email = i.email
        this.senha = i.senha
    }

    create(){
        return `INSERT INTO cliente (nome, telefone, email, senha)
        VALUES('${this.nome}', '${this.telefone}', '${this.email}', '${senha}')`;
    }

    read(){
        if(this.id == undefined)
            return `SELECT * FROM cliente`
        else
            return `SELECT * FROM cliente WHERE id = ${this.id}`
    }

    update(){
        return `UPDATE cliente SET nome = '${this.nome}', telefone = '${this.telefone}', email = '${this.email}', senha = '${this.senha}' WHERE id = ${this.id}`;
    }

    delete(){
        return `DELETE FROM cliente WHERE id = ${this.id}`;
    }
}

module.exports = Cliente;