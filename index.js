const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
require('dotenv').config();

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('--- AGENTE GLAWBOT: ESCANEA PARA CONTROL TOTAL ---');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log(' GLAWBOT-CORE OPERATIVO EN WINDEV');
});

client.on('message', async msg => {
    if (msg.body === '!status') {
        msg.reply(' Agente Glawbot en línea.\n Sistema: WinDev VM\n Google Cloud: Conectado');
    }
});

client.initialize();
