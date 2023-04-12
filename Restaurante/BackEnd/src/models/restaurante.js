class Restaurantes{

    constructor(i){
       this.id = i.id
       this.nome = i.nome
       this.categoria_id = i.categoria_id
       this.endereco = i.endereco
    }

    create(){
        return `INSERT INTO restaurante (nome, categoria_id, endereco)
        VALUES('${this.nome}', '${this.categoria_id}', '${this.endereco}')`;
    }

    read(){
        if(this.id == undefined)
            return `SELECT * FROM restaurante`
        else
            return `SELECT * FROM restaurante WHERE id = ${this.id}`
    }

    update(){
        return `UPDATE restaurante SET nome = '${this.nome}', categoria_id = '${this.categoria_id}', endereco = '${this.endereco}'`;
    }

    delete(){
        return `DELETE FROM restaurante WHERE id = ${this.id}`;
    }
}

module.exports = Restaurantes;