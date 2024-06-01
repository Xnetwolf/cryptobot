/*CMD
  command: ⚜️ Joined ⚜️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
}else{

let channel = "@XnetAirdrop";
let channel2 = "@xnet_payment";
let id = user.telegramid
Api.getChatMember({ 
chat_id : channel, channel2,
user_id : id,
on_result :"check"})
}
