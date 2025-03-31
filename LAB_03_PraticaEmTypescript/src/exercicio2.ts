const produtos: Array<string> = ["Arroz", "Feijão", "Leite", "Pão"];

const posLeite = produtos.indexOf("Leite");
produtos.splice(posLeite, 1, "Queijo");
produtos.shift();
produtos.push("Café");

console.log(produtos, `O tamanho da lista é de ${produtos.length} items`);
