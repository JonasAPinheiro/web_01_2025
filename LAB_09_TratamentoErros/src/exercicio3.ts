function executarOperacao () {
    try {
    throw new Error("Erro genérico");
    } catch ( erro: unknown ) {
        console.log("Erro :", erro as Error );
    }
}

executarOperacao();