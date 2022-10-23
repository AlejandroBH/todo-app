// Generamos instancia de interfaz Date().
const data = new Date();

// Creamos objeto para definir formato de fecha
const dataOptions = {
    weekend: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

// Creamos objeto para definir formato de hora
const hourOptions = {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Sao_Paulo'
}

// En caso de que necesitemos utilizar el formato en varios lugares del codigo
const formatData = new Intl.DateTimeFormat('es-MX', {
    ...dataOptions,
    ...hourOptions
})


// Depuracion de codigo
console.log(data);
console.log(data.toLocaleDateString('es-MX'));
console.log(data.toLocaleDateString('es-MX', dataOptions));
console.log(data.toLocaleTimeString('es-MX'));
console.log(data.toLocaleTimeString('es-MX', hourOptions));

console.log(data.toLocaleString('es-MX', {
    ...dataOptions,
    ...hourOptions
}));

console.log(formatData.format(data));