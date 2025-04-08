type Evento = {
    nome: string;
    mes: string;
}

const eventos: Evento [] = [
    {nome: "Workshop TypeScript", mes: "Janeiro"},
    {nome: "Hackathon", mes: "Março"},
    {nome: "Conferência de IA", mes: "Janeiro"}
];

const mesDesejado: string = "Março";

const eventosPorMes = eventos.filter(evento => evento.mes == mesDesejado);
console.log(eventosPorMes);