/**
 * 
 * Dynamic import
 * 
 */

// Import Estático
import * as modulo from './umArquivo.mjs';
modulo.umMetodo();


// Import Dinamico
const caminhoModulo = './umArquivo.mjs';

import(caminhoModulo)
    .then((modulo) => {
        modulo.umMetodo();
        // executa a função metodoUm que está no módulo       
    });
