type Tarefa = {
    descricao: string;
    prioridade: number;
    concluida: boolean;
}

const tarefas : Tarefa [] = [
    {descricao: "Fazer relatório", prioridade: 2, concluida: false},
    {descricao: "Enviar e-mail", prioridade: 3 , concluida: false},
    {descricao: "Reunião com equipe", prioridade: 1 , concluida: false}
];

function executarTarefas(tarefas: Tarefa[], callback: (descricao: string, indice: number, totalTarefas:number) => void, tempo: number){
    tarefas.sort((a: Tarefa, b: Tarefa) => a.prioridade - b.prioridade);

    for(let i = 0; i < tarefas.length; i++){
        setTimeout(() => {
            callback(tarefas[i].descricao, i, tarefas.length);
            tarefas[i].concluida = true;
        }, tempo * i);
    }
}

function imprimirTarefa(descricao:string, indice: number, totalTarefas: number){
    console.log(`Tarefa conclúida: ${descricao}`);
    console.log(`Progresso: ${((indice + 1) / totalTarefas).toFixed(2)}`);
}

executarTarefas(tarefas, imprimirTarefa, 1500);