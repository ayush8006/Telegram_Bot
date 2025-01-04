const { Telegraf } = require('telegraf');
require('dotenv').config();
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

bot.start((ctx) => ctx.reply('Welcome to Ayush\'s Tele Bot'));

bot.command('binarysearch',(ctx)=>ctx.reply())
