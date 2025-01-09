const TelegramBot = require('node-telegram-bot-api')
const chatID = process.argv[3];
const botTOKEN = '7864713946:AAG5UjMYTm39SdLAALunWhqWVe2oWF80tyQ';
const bot = new TelegramBot(botTOKEN, {polling: true});
const message = process.argv[2];

bot.sendMessage(chatID, message)
    .then(data =>{
        console.log('Telegram enviado')
            process.exit(0)
        
    } )
    .catch(e => process.exit(1));