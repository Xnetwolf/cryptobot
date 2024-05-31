/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("main_menu")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join @XnetAirdrop and @xnet_payment")
}
