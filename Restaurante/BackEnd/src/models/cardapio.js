class Cardapio{

    constructor(i){
        this.id = i.id
        this.restaurante_id = i.restaurante_id 
        this.descricao = i.descricao
        this.valor = i.valor
    }

    create(){
        return `INSERT INTO cardapio (restaurante_id, descricao, valor)
        VALUES('${this.restaurante_id}', '${this.descricao}', ${this.valor})`;
    }

    read(){
        if(this.id == undefined)
            return `SELECT * FROM cardapio`
        else
            return `SELECT * FROM cardapio WHERE id = ${this.id}`
    }

    update(){
        return `UPDATE cliente SET restaurante_id = '${this.restaurante_id}', descricao ='${this.descricao}', valor = ${this.valor}`;
    }

    delete(){
        return `DELETE FROM cardapio WHERE id = ${this.id}`;
    }
}

module.exports = Cardapio;