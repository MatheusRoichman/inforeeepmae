const loadStudents = () => {
    const students_table = document.querySelector('#tabela-aprovados');

    class Aluno {
        constructor(nome, nota) {
            this.nome = nome;
            this.nota = nota;
        }
    }
    
    let students_list = [
        new Aluno('Francisco Kaik Oliveira Paiva', 9.13),
        new Aluno('Uiara Carvalho do Nascimento', 9.11),
        new Aluno('Taciane Taynara Ferreira Gomes', 9.04),
        new Aluno('João Pierre Rodrigues de Carvalho', 8.88),
        new Aluno('Sara Helen Gomes de Carvalho', 8.74),
        new Aluno('Antônio Carlos Alves de Oliveira', 8.66),
        new Aluno('José Genilson Bernardino de Souza', 8.61),
        new Aluno('Marina Brena Gonçalves de Carvalho', 8.58),
        new Aluno('Júlio Mendes de Souza', 8.55),
        new Aluno('Crystian Geovane de Carvalho Bezerra', 8.27),
        new Aluno('Francisco Gustavo Pereira Teles', 8.21),
        new Aluno('Iarley da Silva de Pinho', 8.21),
        new Aluno('Rafael de Carvalho Soares', 8.21),
        new Aluno('Soraia do Nascimento Silva', 8.19),
        new Aluno('Breno de Souza Moreira', 8.16),
        new Aluno('Felipe de Sousa Ribeiro Dias', 8.04),
        new Aluno('Walisson Torres de Melo da Silva', 8.02),
        new Aluno('Maria Beatriz Rodrigues Torres', 7.97),
        new Aluno('Maria Eduarda Magalhães Maciel', 7.96),
        new Aluno('Antonio Harley Martins Souza', 7.92),
        new Aluno('Francisca Suellen Pereira Damascena', 7.89),
        new Aluno('Francisco Walison de Oliveira Silva', 7.88),
        new Aluno('Carlos Henrique Sousa Oliveira', 7.83),
        new Aluno('Isabelle Oliveira do Nascimento', 7.80),
        new Aluno('Gabriele de Carvalho Ferreira', 7.79),
        new Aluno('Ana Alícia de Carvalho Paiva da Silva', 7.75),
        new Aluno('Kelson Kevin Portela de Aguiar', 7.74),
        new Aluno('Francisco Ítalo do Nascimento', 7.61),
        new Aluno('Nayara Silva do Carmo', 7.58),
        new Aluno('Daniele Costa Veras', 7.55),
        new Aluno('Marília Oliveira Cedro da Silva', 7.55),
        new Aluno('Jeferson de Sousa Gomes', 7.55),
        new Aluno('Yuri de Farias Martins', 7.49),
        new Aluno('Pedro Yuri Araújo de Sousa' ,7.49),
        new Aluno('Yasmin da Silva Soares', 7.71),
        new Aluno('Israel do Santos Mesquita', 7.64),
        new Aluno('Maria Mirella Freitas Sousa', 9.69),
        new Aluno('Leticia de Paula Freitas', 9.58),
        new Aluno('Amanda Paulino Farias', 9.25),
        new Aluno('Arthur Pereira do Santos', 9.09),
        new Aluno('Dévilin Scarlat Ferreira da Costa Lima', 8.89),
        new Aluno('Francisco Elias de Paula Melo', 8.74),
        new Aluno('Débora Carvalho da Silva', 8.45),
        new Aluno('Íris Maria Pinto Guerreiro', 8.38),
        new Aluno('Miguel Ítalo da Costa Mendes', 8.21)
    ];
    
    students_list = students_list.sort((a, b) => a.nome.toLowerCase().localeCompare(b.nome.toLowerCase()));
    
    for (let i of students_list) {
        const tr_aluno = document.createElement('tr');
        
        const name_td = document.createElement('td');
        name_td.innerHTML = i.nome;
        
        const grade_td = document.createElement('td');
        grade_td.innerHTML = i.nota.toFixed(2);
        
        tr_aluno.append(name_td, grade_td);
        
        students_table.appendChild(tr_aluno);
    }
};

window.onload = loadStudents();