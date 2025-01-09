if (process.argv[2] === 'true') {
    process.exit(0); // Indica éxito.
} else if (process.argv[2] === 'false') {
    process.exit(1); // Indica fallo.
} else {
    console.error('Parámetro no reconocido');
    process.exit(2); // Error no esperado.
}
