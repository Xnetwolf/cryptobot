/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("Shiwallet")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
  if (message < 10000) {
    Bot.sendMessage("_❌ Minimum Withdraw 10 000 shiba")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(6) + " Shiba"
      )
    } else {
      Bot.sendMessage(
        "*✅ Withdrawal Requested Successfully\nTransaction will be made on 31 july if airdrop amount is finish\n\n💳 Transaction Details:\n 💰Amount = " +
          message +
          " Shiba\n💼 Wallet = " +
          wallet +
          "\n\n⏰Payment will be done to all wallet when Airdrop amount finish🎧 \n\n✅ Important❗️*\n_If You Do Fake Refer You Will Banned\n\n🌹 Payment Channel : @xnet_payment *")
      balance.add(-message)
      Api.sendMessage({
        chat_id: "@xnet_payment",
        text:
          "*🔋 New Withdraw Requested 🏦\n\n▪️ Status = Pending\n▪️ User =* " +
          user_link +
          "*\n▪️ User ID = " +
          user.telegramid +
          "\n▪️ Amount = " +
          message +
          " Shiba\n▪️ User Referrals = " +
          refList.length +
          "\n\n💳 Address =\n " +
          wallet +
          "\n\n👮🏻‍♂️ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown"
     })
    }
  }
}

