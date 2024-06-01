/*CMD
  command: ⚙️Set wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send your Shiba wallet address
  keyboard: 
  aliases: 
  group: 
CMD*/

let wallet = User.getProperty("Shiwallet")
User.setProperty("Shiwallet" , data.message ,"string")
Bot.sendMessage("*✅ wallet address set To :* "+data.message+"")
