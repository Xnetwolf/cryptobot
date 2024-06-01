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
  var wallet = User.getProperty(global.wallet)//"Shiwallet" wallet
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
 //min withdraw + walletname
    if (message < 10000) {
        Bot.sendMessage("_❌ Minimum Withdraw " + global.min_withdrw+" "+global.walletname)
  } else {
    if (message > balance.value()) {
        Bot.sendMessage(
            "_❌ Maximum Withdraw " + balance.value().toFixed(6) + global.walletname
      )
    } else {
     // withdraw message
        Bot.sendMessage(
            "*✅ Withdrawal Requested Successfully\n" + global.withdrw_msg + "\n\n💳 Transaction Details:\n 💰Amount = " +
          message +
          global.walletname +"\n💼 Wallet = " +
            wallet +
            "\n\n⏰Payment will be done to all wallet when Airdrop amount finish🎧 \n\n✅ Important❗️*\n_If You Do Fake Refer You Will Banned\n\n🌹 Payment Channel : " + global.pay_channel+ "*")
      balance.add(-message)
      Api.sendMessage({
        chat_id: global.pay_channel,
        text:
          "*🔋 New Withdraw Requested 🏦\n\n▪️ Status = Pending\n▪️ User =* " +
          user_link +
          "*\n▪️ User ID = " +
          user.telegramid +
          "\n▪️ Amount = " +
            message +
            global.walletname + "\n▪️ User Referrals = " +
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

