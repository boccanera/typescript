enum Profissao {
    Pedreiro,
    Desenvolvedor,
    JogadorDeFutebol,
    Engenheiro
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}


const Maria: Pessoa = {
    nome: 'Maria',
    idade: 20,
    profissao: Profissao.Engenheiro
}

const Joao: Pessoa = {
    nome: 'Joao',
    idade: 30,
    profissao: Profissao.JogadorDeFutebol
}

const Pedro: Pessoa = {
    nome: 'Pedro',
    idade: 22,
    profissao: Profissao.Desenvolvedor
}