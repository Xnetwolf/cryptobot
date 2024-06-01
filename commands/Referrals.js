/*CMD
  command: Referrals
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
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink("Xnet_Airdrop_bot","Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*⏯ Total Invites : "+refList.length+" Users\n\n⛔️ Per Referral 1000 shiba\n\n🔗 Referral Link ⬇️\n"+reflink+"*");

}
