    /*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var button = [{ title: "⚜️ Joined ⚜️", command: "⚜️ Joined ⚜️" }]
Bot.sendInlineKeyboard(
  button,
  global.intro_msg
)
function hello(message) {
  Bot.sendMessage(message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("You were referred to the airdrop bot")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(0)
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*❤️ YOU REFERED SOMEONE BALANCE WILL BE ADDED WHEN REFER JOINS ALL CHANNELS ❤️*"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot ❌*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
status.add(1)

