const fs = require('fs');
const path = require('path');

/**
 * Lista arquivos e diretórios de forma recursiva.
 * @param {string} dir - O diretório a ser listado.
 * @param {string} indent - Identação para exibir a estrutura hierárquica.
 */
function listFiles(dir, indent = '') {
    // Lê o conteúdo do diretório
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        console.log(`${indent}${file}`); // Exibe o nome do arquivo ou diretório

        if (stats.isDirectory()) {
            // Se for um diretório, chama a função recursivamente
            listFiles(fullPath, `${indent}  `);
        }
    });
}

// Chama a função com o diretório atual
listFiles('./');