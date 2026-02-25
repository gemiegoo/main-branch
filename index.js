const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('--- ESCANEA EL QR SI ES NECESARIO ---');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log(' GLAWBOT-CORE: CONEXIÓN TOTAL ESTABLECIDA');
});

client.on('message', async msg => {
    // Comando de estado personalizado
    if (msg.body.toLowerCase() === '!status') {
        msg.reply('¡Hola Edgar!  Soy Glawbot-Core operativo en tu WinDev.\n\n Motor: Node.js v24\n Base: Java 21\n Nube: GitHub gemiegoo listo.\n\nTodo bajo control en el laboratorio.');
    }
});

client.initialize();
