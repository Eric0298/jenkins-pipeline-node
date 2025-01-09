const TelegramBot = require('node-telegram-bot-api');

// Leer argumentos de entrada.
const message = process.argv[2];
const chatID = process.argv[3];

if (!chatID || isNaN(chatID)) {
    console.error('Error: chatID no proporcionado o inválido.');
    process.exit(1);
}

const botTOKEN = '7864713946:AAG5UjMYTm39SdLAALunWhqWVe2oWF80tyQ'; // Reemplázalo si es necesario.
const bot = new TelegramBot(botTOKEN, { polling: false });

bot.sendMessage(chatID, message)
    .then(() => {
        console.log('Mensaje enviado correctamente a Telegram.');
        process.exit(0);
    })
    .catch((e) => {
        console.error('Error al enviar mensaje:', e.message);
        process.exit(1);
    });
