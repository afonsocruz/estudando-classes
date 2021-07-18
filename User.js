class User {
  constructor(id, nome, cpf, disponibilidade, endereco) {
    this.id = id;
    this.nome = nome;
    this._cpf = cpf;
    this.disponibilidade = disponibilidade;
    this.endereco = endereco;
  }

  createUserObject() {
    let user = {
      user: {
        id: this.getUserId(),
        nome: this.getName(),
        cpf: this.getCpf(),
        disponibilidade: "disponibilidade",
        endereco: {
          rua: "qlq coisa",
          numero: "213",
          bairro: "aaa",
          complemento: ""
        }
      }
    }

    console.log(user);
  }

  getUserId() {
    let valueOne = Math.round(Math.random() * 8) + 1;
    let valueTwo = Math.round(Math.random() * 8) + 1;
    let valueThree = Math.round(Math.random() * 8) + 1;
    let valueFour = Math.round(Math.random() * 8) + 1;

    const result = String(valueOne) + String(valueTwo) + String(valueThree) + String(valueFour); 
    
    this.id = result;

    return this.id;
  }

  getName() {
    let inputName = document.querySelector("#name");
    
    this.name = inputName.value;

    return this.name;
  }

  getCpf() {
    let inputCpf = document.querySelector("#cpf");

    this._cpf = inputCpf.value;
    
    return this._cpf;
  }
}

const testClass = new User();

const botao = document.querySelector("#botao");

botao.addEventListener('click', function() {
  testClass.createUserObject();
})



