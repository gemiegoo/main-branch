const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        handleSIGINT: false,
        args: ['--no-sandbox']
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log(' SISTEMA LISTO Y ESCUCHANDO A EDGAR');
});

client.on('message_create', async msg => {
    // Usamos message_create para que también detecte lo que tú escribes
    if (msg.body.toLowerCase() === '!status') {
        console.log('--- Comando !status detectado ---');
        await client.sendMessage(msg.from, '¡Confirmado Edgar! \n\nEstoy operando desde tu WinDev.\nJava 21 y Node 24 están rugiendo. ');
    }
});

client.initialize();
