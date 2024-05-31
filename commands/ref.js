/*CMD
  command: ref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

function canRun(){
  var last_run_a = User.getProperty("last_run_a");
  if(!last_run_a){ return true }
   return
  return true;
}

if(!canRun()){ return }
User.setProperty("last_run_a", Date.now(), "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
var bonus = 1000
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(bonus)
  var refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid)
  refcom.add(bonus)
  Bot.sendMessageToChatWithId(referrer.telegramid, "*YOU REFERED AND EARNED 1000 shiba *")
} else {
  Bot.sendMessage()
}
