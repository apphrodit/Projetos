class Avaliacao{

    constructor(i){
        this.restaurante_id = i.restaurante_id;
        this.cliente_id = i.cliente_id;
        this.data = i.data;
        this.nota = i.nota;
        this.descricao = i.descricao;
    }

    create(){
        return `INSERT INTO avaliacao (restaurante_id, cliente_id, data, nota, descricao)
        VALUES('${this.restaurante_id}', ${this.cliente_id}, '${this.data}', ${this.nota} ,'${this.descricao}')`;
    }

    read(){
        if(this.id == undefined)
            return `SELECT * FROM avaliacao`
        else
            return `SELECT * FROM avaliacao WHERE id = ${this.id}`
    }

    update(){
        return `UPDATE avaliacao SET restaurante_id = '${this.restaurante_id}', cliente_id = ${this.cliente_id}, data ='${this.data}', nota = ${this.nota} ,descricao ='${this.descricao}'`;
    }

    delete(){
        return `DELETE FROM avaliacao WHERE id = ${this.id}`;
    }
}

module.exports = Avaliacao;
