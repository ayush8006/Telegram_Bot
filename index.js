const { Telegraf } = require('telegraf');
require('dotenv').config();

const axios =require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString=
`const binarySearch = function_search(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
;

try {

    bot.start((ctx) => ctx.reply('Welcome to Ayush\'s Tele Bot'));

    bot.command('binarysearch',(ctx)=>ctx.reply(binarySearchString));

    bot.on('sticker', (ctx) => ctx.reply('👍'));
    
    bot.command('rollinghashjava',async(ctx)=>{
        const response= await axios.get('https://raw.githubusercontent.com/shakeebparwez/CP-Learn-And-Solve/refs/heads/main/PatternStringMatching/PolynomialHash.java');
        ctx.reply(response.data);
    })
    
    bot.command('quit', async (ctx) => {
    // Explicit usage
    await ctx.telegram.leaveChat(ctx.message.chat.id)
  
    // Using context shortcut
    await ctx.leaveChat()
  })

    bot.launch();

} catch (error) {

    console.log("Unexpected Command");
    
}


