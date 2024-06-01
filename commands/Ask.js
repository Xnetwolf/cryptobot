/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💬 How Can I Help You ?
  keyboard: 
  aliases: 
  group: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" , data.message ,"string")
Bot.sendMessage("*📩 Message sent to admin as :* "+data.message+"")
Bot.sendMessage("** You will receive an answer within 12 hours")
