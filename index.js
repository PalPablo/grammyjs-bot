 require('dotenv').config()
 const { Bot, GrammyError, HttpError, Keyboard, InlineKeyboard } = require('grammy') 
 const {hydrate} = require('@grammyjs/hydrate')

 const bot = new Bot(process.env.BOT_API_KEY)
 bot.use(hydrate())


bot.api.setMyCommands([ // в setMyCommands использовать только snake_case
  {
    command: 'start', 
    description: 'Запуск бота',
  },
  {
    command: 'mood',
    description: 'Оценить настроение'
  },
  {
    command: 'share',
    description: 'Поделиться данными'
  },
  {
    command: 'inline_keyboard',
    description: 'Инлайн клавиатура' 
  },
  {
    command: 'menu',
    description: 'Получить меню' 
  },
])

//  bot.command('start', async (ctx) => {
//   await ctx.reply('Привет! Я - бот.') // команды меню должны идти на первом месте по порядку, иначе они не будут отрабатывать
//  })
 
//  bot.command(['say_hello', 'hello', 'hi'], async (ctx) => {
//   await ctx.reply('Hello')
//  })
 
//////////////////// 

//  bot.command('start', async (ctx) => {
//   await ctx.reply('Привет! Я - бот.', {
//     reply_parameters: {message_id: ctx.msg.message_id}
//   }) 
//  }) //ответ на конкретное сообщение пользователя
 
/////////////////////

//  bot.command('start', async (ctx) => {
//   await ctx.reply('Привет! Я - бот. Тг канал: <a href="https://t.me/Pablozya">ссылка</a>', {
//     parse_mode: 'HTML'
//   }) 
//  })


// bot.command('start', async (ctx) => {
//   await ctx.react('🎃')
//   await ctx.reply('Привет\\! Я \\- бот\\. Тг канал: [это ссылка](https://t.me/Pablozya)', {
//     parse_mode: 'MarkdownV2', /*тут некоторые знаки надо экранировать*/
//     disable_web_page_preview: true
//   }) 
//  })

/////////////////////////

//  bot.on('message', async (ctx) => {
//   await ctx.reply('Надо подумать...')
//  })

/////////////////////////

//  bot.on('message:voice', async (ctx) => {
//   await ctx.reply('Получил голосовое')
//  })

///////////////////////////

//  bot.on('message:entities:url', async (ctx) => {
//   await ctx.reply('Получил ссылку') // бот отвечает на сообщение, у которого есть особые сущности и среди этих сущностей есть URL
//  })

///////////////////////////

//  bot.on([':media', '::url'], async (ctx) => {
//   await ctx.reply('Получил фото, видео, ссылку')
//  }) // несколько команд

///////////////////////////

//  bot.on(':photo').on('::hashtag', () => {
//  }) // комбинация команд

///////////////////////////

//  bot.on('msg').filter ((ctx) => {
//   return ctx.from.id === 198735326 // если из этой функции возвращается true, то вызывается вторая функция
//  }, async(ctx) => {   
//   await ctx.reply('Привет, админ!')
//  }) // создание собственных команд

//////////////////////////////

//  bot.hears(['пинг', 'пинг2'], async (ctx) => {
//   await ctx.reply('понг') // ответ на конкретные сообщения, пробелы в телеге перед сообщениями роли не играют
//  })

///////////////////////////////

//  bot.hears([/пипец/, /капец/], async (ctx) => {
//   await ctx.reply('Не ругайся') // для ответа на конкретные слова в тексте служат регулярные выражения
//  })

///////////////////////////////

// bot.on('msg', async (ctx) => {
//   // console.log(ctx.msg); /* получение в консоле объекта с информацией о сообщении */
//   // console.log(ctx.from); /* информация об отправителе */
//   // console.log(ctx.me); /* инфа о боте */
// })

///////////////////////////////

// bot.hears('ID', async (ctx) => {
//   await ctx.reply(`Ваш id: ${ctx.from.id}`)
// })

//////////////////////////

// Custom keyboard

// Одноразовая клавиатура 1

// bot.command('mood', async (ctx) => {
//   const moodKeyboard = new Keyboard().text('Хорошо').row().text('Норм').row().text('Плохо').resized().oneTime()/*убирает клаву после нажатия*/
//   await ctx.reply('Как настроение?', {
//     reply_markup: moodKeyboard
//   }) 
// })

// bot.hears('Хорошо', async (ctx) => {
//   await ctx.reply('Класс', {
//     reply_markup: {remove_keyboard: true} /*убирает клаву после нажатия*/
//   })
//   })

/////////////////////////

// Одноразовая клавиатура 2

// bot.command('mood', async (ctx) => {
//   const moodKeyboard = new Keyboard().text('Хорошо').row().text('Норм').row().text('Плохо').resized()
//   await ctx.reply('Как настроение?', {
//     reply_markup: moodKeyboard
//   }) 
// })

// bot.hears('Хорошо', async (ctx) => {
//   await ctx.reply('Класс', {
//     reply_markup: {remove_keyboard: true} /*убирает клаву после нажатия*/
//   })
//   })

////////////////////////

// bot.command('mood', async (ctx) => {

// const moodLabels = ['Хорошо', 'Норм', 'Плохо']
// const rows = moodLabels.map((label) => {
//   return [
//     Keyboard.text(label)
//   ]
// })
// const moodKeyboard = Keyboard.from(rows).resized()
// await ctx.reply('Как настроение?', {
//       reply_markup: moodKeyboard
//     }) 
//   })
 
////////////////////////////
 
// bot.command('share', async (ctx) => {
//   const shareKeyboard = new Keyboard().requestLocation('Геолокация').requestContact('Контакт').
//   requestPoll('Опрос').placeholder('Укажи данные...').resized()

//   await ctx.reply('Чем хочешь поделиться?', {
//           reply_markup: shareKeyboard 
//   })
// })

// bot.on(':contact', async (ctx) => {
//   await ctx.reply('Спасибо за контакт!')
// })

///////////////////////////////////

// inline keyboard

// bot.command('inline_keyboard', async (ctx) => {
  // const inlineKeyboard = new InlineKeyboard()
  // .text('1', 'button-1').row() /*построить кнопки в колонку*/
  // .text('2', 'button-2').row()
  // .text('3', 'button-3')

//   const inlineKeyboard2 = new InlineKeyboard().url('Перейти в тг-канал', 'https://t.me/Pablozya')
//   await ctx.reply('Нажмите кнопку', {
//     reply_markup: inlineKeyboard2
//   })
// })


// реакция на нажатие кнопок 1
// bot.callbackQuery(['button-1', 'button-2', 'button-3'], async (ctx) => {
//   // await ctx.answerCallbackQuery('Вы выбрали цифру!') /*появляется сообщение в центре или сверху экрана*/
//   await ctx.reply('Вы выбрали цифру')
// })

// реакция на нажатие кнопок 2
// bot.on('callback_query:data', async (ctx) => {
//   await ctx.answerCallbackQuery();
//   await ctx.reply(`Вы нажали кнопку: ${ctx.callbackQuery.data}`)
// })

// реакция на нажатие кнопок 3
// bot.callbackQuery(/button-[1-3]/, async (ctx) => {
//   await ctx.answerCallbackQuery() 
//   await ctx.reply(`Вы нажали кнопку: ${ctx.callbackQuery.data}`)
// })

///////////////////////////

//Плагины
//hydrate нужно установить этот плагин npm i @grammyjs/hydrate, повторно запустить бота и 
// импортировать наверху кода
// добавить menu в setMyCommands

const menuKeyboard = new InlineKeyboard()
.text('Узнать статус заказа', 'order-status')
.text('обратиться в поддержку', 'support') 
const backKeyboard = new InlineKeyboard().text('< назад в меню', 'back')

bot.command('menu', async (ctx) => {
  await ctx.reply('Выберите пункт меню', {
    reply_markup: menuKeyboard
  })
})

bot.callbackQuery('order-status', async (ctx) => {
  await ctx.callbackQuery.message.editText('Статус заказа: в пути', {
    reply_markup: backKeyboard, 
  })
  await ctx.answerCallbackQuery()
})

bot.callbackQuery('support', async (ctx) => {
  await ctx.callbackQuery.message.editText('Напишите ваш запрос', {
    reply_markup: backKeyboard, 
  })
  await ctx.answerCallbackQuery()
})

bot.callbackQuery('back', async (ctx) => {
  await ctx.callbackQuery.message.editText('Выберите пункт меню', {
    reply_markup: menuKeyboard, 
  })
  await ctx.answerCallbackQuery()
})

/////////////////////////

 bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});
 
 bot.start();