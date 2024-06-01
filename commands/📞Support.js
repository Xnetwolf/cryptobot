/*CMD
  command: 📞Support
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let Ask = User.getProperty("Ask")
var button = [{ title : "✏️Write me" , command : "Ask" }]
Bot.sendInlineKeyboard(button , "*📫 Last Question :* "+Ask+"")
