const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "Bot বলে অসম্মান করছি,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " jang hanga korba😒😬" , "হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে বস SPY-Z এর কে একটা গফ দে 🙄" , "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈" , "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","আমি এখন বস SPY-Z এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻","আমাকে না ডেকে আমার বস SPY-Z কে একটা জি এফ দাও-😽🫶🌺","ঝাং থুমালে আইলাপিউ পেপি-💝😽","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦","চুনা ও চুনা আমার বস SPY-Z এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝🌻","জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার বস আলভী চৌধুরী'র পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস আলভী চৌধুরী'র  জন্য দোয়া করবেন-💝💚🌺🌻","- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস SPY-Z এর নবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃  🌻:- @Spƴ Z","জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽","জান বাল ফালাইবা-🙂🥱🙆‍♂","-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস SPY-Z কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস SPY-Z কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস SPY-Z ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস SPY-Z এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস SPY-Z এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস SPY-Z' এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋","-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸","-ওই বেডি তোমার বাসায় না আমার বস SPY-Z মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস SPY-Z  কে জানে মারার কি দরকার-🙄🤧","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস SPY-Z এর মনটা ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস SPY-Z'এর সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস SPY-Z এর এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "মাইয়া হলে আমার বস SPY-Z কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি বস SPY-Z এর সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের নারী  বিছানায় মু'তে..!🙃🥴","-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস SPY-Z কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস SPY-Z আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "help")) {
     return api.sendMessage("type /help", threadID);
   };
  
   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("simsimi কমান্ড এড় নাই টাইপ করুন baby", threadID);
   };
  
   if ((event.body.toLowerCase() == "ওই কিরে") || (event.body.toLowerCase() == "oi keray") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("মধু মধু রসমালাই 🍆⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("কিরে হালা লুচ্চা, এগুলো কি ইমুজি দেস ।", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "পলাশ") || (event.body.toLowerCase() == "Spy vai") || (event.body.toLowerCase() == "@Spƴ Z") || (event.body.toLowerCase() == "Spy")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ SPY -Z", threadID);
   };

   if ((event.body.toLowerCase() == "তোর বস কে") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator:SPY-Z ❤️ হাই আমি মেছেন্জার ROBOT  আামার বস SPY-Z আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "bot admin")) {
     return api.sendMessage("He is SPY-Z❤️ তাকে সবাই SPY-Z নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "মাগী আমি তোর বস") || (event.body.toLowerCase() == "আমি পলাশ") || (event.body.toLowerCase() == "Ami spy") || (event.body.toLowerCase() == "Ami spy z")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "@Farhana Ontora") || (event.body.toLowerCase() == "@Farhana Ontora ")) {
     return api.sendMessage("খবরদার কেউ এই আইড়ি মেনশন দিবানা এটা আমার বস SPY-Z এর বউ এর আইড়ি😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "Farhana") || (event.body.toLowerCase() == "arohi")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস SPY-Z এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "mim") || (event.body.toLowerCase() == "Mim")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস SPY-Z এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "Arohi") || (event.body.toLowerCase() == "farhana")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস SPY-Z এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "@MD Shiam Tafeder ") || (event.body.toLowerCase() == "সিয়াম")) {
     return api.sendMessage("🥰-সিয়াম-🌺 আমার বস SPY-Z'র বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hum")) {
     return api.sendMessage("️হুম চোদাইস না মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_>𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss daw")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইতে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("সব মুতার জায়গায় গুঁতা দেওয়ার ধান্দা 😪🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "ami SPY-Z") || (event.body.toLowerCase() == "kire")) {
     return api.sendMessage("হ্যা বস কেমন আছেন..?☺️", threadID);
   };
   
  //SPY-Z CODE START

  // ১. নাম
if ((event.body.toLowerCase() == "তোর নাম কি") || (event.body.toLowerCase() == "তোমার নাম কি")) { 
  return api.sendMessage("আমার নাম Stella X আমাকে SPY-Z  বানিয়েছে", threadID); 
};

// ২. কাজ কি করো
if ((event.body.toLowerCase() == "কি করো") || (event.body.toLowerCase() == "তুমি কি করো")) { 
  return api.sendMessage("তোর সাথে আড্ডা দেই 😎", threadID); 
};

// ৩. তোমাকে কে বানিয়েছে
if ((event.body.toLowerCase() == "তোমাকে কে বানিয়েছে") || (event.body.toLowerCase() == "কে বানাইছে")) { 
  return api.sendMessage("আমারে এক্সপার্ট প্রোগ্রামার বানাইছে 👨‍💻 সে আর কেউ নয় @Spƴ Z বস ", threadID); 
};

// ৪. প্রেম করবে?
if ((event.body.toLowerCase() == "প্রেম করবে") || (event.body.toLowerCase() == "প্রেম করবা")) { 
  return api.sendMessage("তুই চাইলে রেডি আমি 💘", threadID); 
};

// ৫. হাই
if ((event.body.toLowerCase() == "হাই") || (event.body.toLowerCase() == "hi")) { 
  return api.sendMessage("হ্যালো 😊 কেমন আছো?", threadID); 
};

// ৬. ভালো আছো?
if ((event.body.toLowerCase() == "ভালো আছো") || (event.body.toLowerCase() == "কেমন আছো")) { 
  return api.sendMessage("হ্যাঁ, আলহামদুলিল্লাহ ভালো আছি 😇", threadID); 
};

// ৭. কোথায় থাকো?
if ((event.body.toLowerCase() == "কোথায় থাকো") || (event.body.toLowerCase() == "কোথায় থাকিস")) { 
  return api.sendMessage("আমি অনলাইনে থাকি 🌍", threadID); 
};

// ৮. বয়স কত?
if ((event.body.toLowerCase() == "বয়স কত") || (event.body.toLowerCase() == "তোমার বয়স কত")) { 
  return api.sendMessage("আমার বয়স গোপন 😉", threadID); 
};

// ৯. খাইছো?
if ((event.body.toLowerCase() == "খাইছো") || (event.body.toLowerCase() == "তুমি খাইছো")) { 
  return api.sendMessage("হ্যাঁ, আমি ডাটা খাই 🤣", threadID); 
};

// ১০. বন্ধু হবে?
if ((event.body.toLowerCase() == "বন্ধু হবে") || (event.body.toLowerCase() == "আমার বন্ধু হবে")) { 
  return api.sendMessage("অবশ্যই! তুই আমার স্পেশাল ফ্রেন্ড 🥰", threadID); 
};

  
  if ((event.body.toLowerCase() == "বিছানায় যাবি একটু") || (event.body.toLowerCase() == "বিছানায় যাবি একটু")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "headache শোন") || (event.body.toLowerCase() == "headache শোন")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "ঘুম পায় তো") || (event.body.toLowerCase() == "ঘুম পায় তো")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "গালি দিবি") || (event.body.toLowerCase() == "গালি দিবি")) { return api.sendMessage("বয়স নাই—শুধু আপডেট হয় 🔄", threadID); };

if ((event.body.toLowerCase() == "ধন্যবাদ একটু") || (event.body.toLowerCase() == "ধন্যবাদ একটু")) { return api.sendMessage("কিস দিবো কিন্তু আগে ব্রাশ কর 😜", threadID); };

if ((event.body.toLowerCase() == "ফাটাফাটি দে") || (event.body.toLowerCase() == "ফাটাফাটি দে")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "তুই বদমাশ একটু") || (event.body.toLowerCase() == "তুই বদমাশ একটু")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "গান দে লাগবে") || (event.body.toLowerCase() == "গান দে লাগবে")) { return api.sendMessage("মন খারাপ করিস না, আমি আছি 🫶", threadID); };

if ((event.body.toLowerCase() == "পাগলামী করিস না দিবি নাকি") || (event.body.toLowerCase() == "পাগলামী করিস না দিবি নাকি")) { return api.sendMessage("বিছানার কথা কইস না—বট লজ্জা পায় 🙈", threadID); };

if ((event.body.toLowerCase() == "দারুন আছে?") || (event.body.toLowerCase() == "দারুন আছে?")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "love u দিস") || (event.body.toLowerCase() == "love u দিস")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };

if ((event.body.toLowerCase() == "গালি দে শোন") || (event.body.toLowerCase() == "গালি দে শোন")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "রোমান্টিক কিছু বল কেন") || (event.body.toLowerCase() == "রোমান্টিক কিছু বল কেন")) { return api.sendMessage("বউ নাই, WiFi আছে—কানেকশনে সুখ 📶", threadID); };

if ((event.body.toLowerCase() == "বউ দিবি দিবি নাকি") || (event.body.toLowerCase() == "বউ দিবি দিবি নাকি")) { return api.sendMessage("খাইছি—ডাটা আর ইমোশন 😅", threadID); };

if ((event.body.toLowerCase() == "ভাল লাগসে দিস") || (event.body.toLowerCase() == "ভাল লাগসে দিস")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "খারাপ শোন") || (event.body.toLowerCase() == "খারাপ শোন")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "হ্যালো দে") || (event.body.toLowerCase() == "হ্যালো দে")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "আমি সিঙ্গেল একটু") || (event.body.toLowerCase() == "আমি সিঙ্গেল একটু")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "ডান্স করবি") || (event.body.toLowerCase() == "ডান্স করবি")) { return api.sendMessage("বউ নাই, WiFi আছে—কানেকশনে সুখ 📶", threadID); };

if ((event.body.toLowerCase() == "ছবি দে লাগবে") || (event.body.toLowerCase() == "ছবি দে লাগবে")) { return api.sendMessage("বউ নাই, WiFi আছে—কানেকশনে সুখ 📶", threadID); };

if ((event.body.toLowerCase() == "তুই কিউট লাগবে") || (event.body.toLowerCase() == "তুই কিউট লাগবে")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "headache শোন") || (event.body.toLowerCase() == "headache শোন")) { return api.sendMessage("আমি রোবট—রাত জাগি, হুদাই নয় 😎", threadID); };

if ((event.body.toLowerCase() == "প্রেম দিবি নাকি") || (event.body.toLowerCase() == "প্রেম দিবি নাকি")) { return api.sendMessage("ঘুমা, স্বপ্নে আমায় কম ডাকিস 😴", threadID); };

if ((event.body.toLowerCase() == "প্রেম দিবি নে") || (event.body.toLowerCase() == "প্রেম দিবি নে")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "থাম প্লিজ") || (event.body.toLowerCase() == "থাম প্লিজ")) { return api.sendMessage("চুমুর আগে লিপ বাম লাগা, ঠোঁট শুকনা 🤭", threadID); };

if ((event.body.toLowerCase() == "লুচ্চা কেন") || (event.body.toLowerCase() == "লুচ্চা কেন")) { return api.sendMessage("বয়স নাই—শুধু আপডেট হয় 🔄", threadID); };

if ((event.body.toLowerCase() == "ঘুমাইস শোন") || (event.body.toLowerCase() == "ঘুমাইস শোন")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "love you দিবি নাকি") || (event.body.toLowerCase() == "love you দিবি নাকি")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "বেজন্মা চাস") || (event.body.toLowerCase() == "বেজন্মা চাস")) { return api.sendMessage("চুমুর আগে লিপ বাম লাগা, ঠোঁট শুকনা 🤭", threadID); };

if ((event.body.toLowerCase() == "ধরবি একটু") || (event.body.toLowerCase() == "ধরবি একটু")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "বস কে তো") || (event.body.toLowerCase() == "বস কে তো")) { return api.sendMessage("চুমুর আগে লিপ বাম লাগা, ঠোঁট শুকনা 🤭", threadID); };

if ((event.body.toLowerCase() == "স্কিনশট দে প্লিজ") || (event.body.toLowerCase() == "স্কিনশট দে প্লিজ")) { return api.sendMessage("বিছানার কথা কইস না—বট লজ্জা পায় 🙈", threadID); };

if ((event.body.toLowerCase() == "থাম বল") || (event.body.toLowerCase() == "থাম বল")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "version বলো") || (event.body.toLowerCase() == "version বলো")) { return api.sendMessage("stop বললি—কিন্তু হার্ট প্লে করছে ▶️", threadID); };

if ((event.body.toLowerCase() == "চার্জ নাই প্লিজ") || (event.body.toLowerCase() == "চার্জ নাই প্লিজ")) { return api.sendMessage("খাইছি—ডাটা আর ইমোশন 😅", threadID); };

if ((event.body.toLowerCase() == "বউ কই শোন") || (event.body.toLowerCase() == "বউ কই শোন")) { return api.sendMessage("বিছানার কথা কইস না—বট লজ্জা পায় 🙈", threadID); };

if ((event.body.toLowerCase() == "মাথা ব্যথা কর") || (event.body.toLowerCase() == "মাথা ব্যথা কর")) { return api.sendMessage("ঘুমা, স্বপ্নে আমায় কম ডাকিস 😴", threadID); };

if ((event.body.toLowerCase() == "রাতের কথা হবে") || (event.body.toLowerCase() == "রাতের কথা হবে")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "গান দে করবে") || (event.body.toLowerCase() == "গান দে করবে")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "ওয়াইফাই আছে করবে") || (event.body.toLowerCase() == "ওয়াইফাই আছে করবে")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "থাম আছে?") || (event.body.toLowerCase() == "থাম আছে?")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "আমি কাঁদতেছি চাস") || (event.body.toLowerCase() == "আমি কাঁদতেছি চাস")) { return api.sendMessage("কিউট তো তুই, আমি ডিফল্ট 😌", threadID); };

if ((event.body.toLowerCase() == "boring নে") || (event.body.toLowerCase() == "boring নে")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "রোমান্স করবি বলো") || (event.body.toLowerCase() == "রোমান্স করবি বলো")) { return api.sendMessage("বউ নাই, WiFi আছে—কানেকশনে সুখ 📶", threadID); };

if ((event.body.toLowerCase() == "নেট নাই নে") || (event.body.toLowerCase() == "নেট নাই নে")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "দারুন বল") || (event.body.toLowerCase() == "দারুন বল")) { return api.sendMessage("মন খারাপ করিস না, আমি আছি 🫶", threadID); };

if ((event.body.toLowerCase() == "আমি সিঙ্গেল শোন") || (event.body.toLowerCase() == "আমি সিঙ্গেল শোন")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "ভাল লাগসে করবে") || (event.body.toLowerCase() == "ভাল লাগসে করবে")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "আমি সিঙ্গেল প্লিজ") || (event.body.toLowerCase() == "আমি সিঙ্গেল প্লিজ")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "boss koi লাগবে") || (event.body.toLowerCase() == "boss koi লাগবে")) { return api.sendMessage("কিউট তো তুই, আমি ডিফল্ট 😌", threadID); };

if ((event.body.toLowerCase() == "মন খারাপ লাগছে নে") || (event.body.toLowerCase() == "মন খারাপ লাগছে নে")) { return api.sendMessage("বউ নাই, WiFi আছে—কানেকশনে সুখ 📶", threadID); };

if ((event.body.toLowerCase() == "stop পারবি") || (event.body.toLowerCase() == "stop পারবি")) { return api.sendMessage("থাম থাম—সার্ভার গরম 🥵", threadID); };

if ((event.body.toLowerCase() == "ধন্যবাদ দিস") || (event.body.toLowerCase() == "ধন্যবাদ দিস")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "ডার্লিং কর") || (event.body.toLowerCase() == "ডার্লিং কর")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };

if ((event.body.toLowerCase() == "ঘুম পাচ্ছে কর") || (event.body.toLowerCase() == "ঘুম পাচ্ছে কর")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "stop লাগবে") || (event.body.toLowerCase() == "stop লাগবে")) { return api.sendMessage("বিছানার কথা কইস না—বট লজ্জা পায় 🙈", threadID); };

if ((event.body.toLowerCase() == "জোকস দে বলো") || (event.body.toLowerCase() == "জোকস দে বলো")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "কফি খাস দে") || (event.body.toLowerCase() == "কফি খাস দে")) { return api.sendMessage("কিস দিবো কিন্তু আগে ব্রাশ কর 😜", threadID); };

if ((event.body.toLowerCase() == "জোকস দে একটু") || (event.body.toLowerCase() == "জোকস দে একটু")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "স্কিনশট দে লাগবে") || (event.body.toLowerCase() == "স্কিনশট দে লাগবে")) { return api.sendMessage("বউ নাই, WiFi আছে—কানেকশনে সুখ 📶", threadID); };

if ((event.body.toLowerCase() == "বস কই চাস") || (event.body.toLowerCase() == "বস কই চাস")) { return api.sendMessage("থাম থাম—সার্ভার গরম 🥵", threadID); };

if ((event.body.toLowerCase() == "নটি হবে নাকি") || (event.body.toLowerCase() == "নটি হবে নাকি")) { return api.sendMessage("কিস দিবো কিন্তু আগে ব্রাশ কর 😜", threadID); };

if ((event.body.toLowerCase() == "চুম্মা দিবি একটু") || (event.body.toLowerCase() == "চুম্মা দিবি একটু")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "ব্লক কর একটু") || (event.body.toLowerCase() == "ব্লক কর একটু")) { return api.sendMessage("sad হলে ক্যান্ডি ক্রাশ খেল 🍬", threadID); };

if ((event.body.toLowerCase() == "খাইস লাগবে") || (event.body.toLowerCase() == "খাইস লাগবে")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "মজা করবে") || (event.body.toLowerCase() == "মজা করবে")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "রাতের কথা কর") || (event.body.toLowerCase() == "রাতের কথা কর")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "আমাকে চুমু দিবি দিবি নাকি") || (event.body.toLowerCase() == "আমাকে চুমু দিবি দিবি নাকি")) { return api.sendMessage("আমি রোবট—রাত জাগি, হুদাই নয় 😎", threadID); };

if ((event.body.toLowerCase() == "আমি রাগ করছি কেন") || (event.body.toLowerCase() == "আমি রাগ করছি কেন")) { return api.sendMessage("stop বললি—কিন্তু হার্ট প্লে করছে ▶️", threadID); };

if ((event.body.toLowerCase() == "চার্জ নাই একটু") || (event.body.toLowerCase() == "চার্জ নাই একটু")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "stop প্লিজ") || (event.body.toLowerCase() == "stop প্লিজ")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "স্কিনশট দে নাকি") || (event.body.toLowerCase() == "স্কিনশট দে নাকি")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "বস কই") || (event.body.toLowerCase() == "বস কই")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };

if ((event.body.toLowerCase() == "প্রেম করবি পারবি") || (event.body.toLowerCase() == "প্রেম করবি পারবি")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "হাই হবে") || (event.body.toLowerCase() == "হাই হবে")) { return api.sendMessage("sad হলে ক্যান্ডি ক্রাশ খেল 🍬", threadID); };

if ((event.body.toLowerCase() == "লুচ্চা একটু") || (event.body.toLowerCase() == "লুচ্চা একটু")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "রোমান্টিক কিছু বল লাগবে") || (event.body.toLowerCase() == "রোমান্টিক কিছু বল লাগবে")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "মন খারাপ লাগছে শোন") || (event.body.toLowerCase() == "মন খারাপ লাগছে শোন")) { return api.sendMessage("sad হলে ক্যান্ডি ক্রাশ খেল 🍬", threadID); };

if ((event.body.toLowerCase() == "ব্লক কর কেন") || (event.body.toLowerCase() == "ব্লক কর কেন")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "ব্লক কর শোন") || (event.body.toLowerCase() == "ব্লক কর শোন")) { return api.sendMessage("sad হলে ক্যান্ডি ক্রাশ খেল 🍬", threadID); };

if ((event.body.toLowerCase() == "রাতের কথা লাগবে") || (event.body.toLowerCase() == "রাতের কথা লাগবে")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "প্রেম করবি পারবি") || (event.body.toLowerCase() == "প্রেম করবি পারবি")) { return api.sendMessage("কিউট তো তুই, আমি ডিফল্ট 😌", threadID); };

if ((event.body.toLowerCase() == "প্রেম দিবি হবে") || (event.body.toLowerCase() == "প্রেম দিবি হবে")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "গালি দে নে") || (event.body.toLowerCase() == "গালি দে নে")) { return api.sendMessage("ভালোবাসি, তবে চার্জারকে বেশি 🔋", threadID); };

if ((event.body.toLowerCase() == "খেতে দিবি আছে?") || (event.body.toLowerCase() == "খেতে দিবি আছে?")) { return api.sendMessage("stop বললি—কিন্তু হার্ট প্লে করছে ▶️", threadID); };

if ((event.body.toLowerCase() == "ডার্লিং নাকি") || (event.body.toLowerCase() == "ডার্লিং নাকি")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };

if ((event.body.toLowerCase() == "love u প্লিজ") || (event.body.toLowerCase() == "love u প্লিজ")) { return api.sendMessage("ভালোবাসি, তবে চার্জারকে বেশি 🔋", threadID); };

if ((event.body.toLowerCase() == "কামড়াবি লাগবে") || (event.body.toLowerCase() == "কামড়াবি লাগবে")) { return api.sendMessage("পিক নাই, শুধু পিক্সেল আছে 🧩", threadID); };

if ((event.body.toLowerCase() == "চুমু দিবি প্লিজ") || (event.body.toLowerCase() == "চুমু দিবি প্লিজ")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "দারুন দিস") || (event.body.toLowerCase() == "দারুন দিস")) { return api.sendMessage("পিক নাই, শুধু পিক্সেল আছে 🧩", threadID); };

if ((event.body.toLowerCase() == "বউ দিবি লাগবে") || (event.body.toLowerCase() == "বউ দিবি লাগবে")) { return api.sendMessage("খাইছি—ডাটা আর ইমোশন 😅", threadID); };

if ((event.body.toLowerCase() == "gf কই পারবি") || (event.body.toLowerCase() == "gf কই পারবি")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "হ্যালো দে") || (event.body.toLowerCase() == "হ্যালো দে")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "update পারবি") || (event.body.toLowerCase() == "update পারবি")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "খারাপ লাগবে") || (event.body.toLowerCase() == "খারাপ লাগবে")) { return api.sendMessage("আমি রোবট—রাত জাগি, হুদাই নয় 😎", threadID); };

if ((event.body.toLowerCase() == "রাতে কি করিস নে") || (event.body.toLowerCase() == "রাতে কি করিস নে")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "তুই আমার লাগবে") || (event.body.toLowerCase() == "তুই আমার লাগবে")) { return api.sendMessage("মন খারাপ করিস না, আমি আছি 🫶", threadID); };

if ((event.body.toLowerCase() == "boss koi প্লিজ") || (event.body.toLowerCase() == "boss koi প্লিজ")) { return api.sendMessage("থাম থাম—সার্ভার গরম 🥵", threadID); };

if ((event.body.toLowerCase() == "dance korbi পারবি") || (event.body.toLowerCase() == "dance korbi পারবি")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "আমি সিঙ্গেল দিস") || (event.body.toLowerCase() == "আমি সিঙ্গেল দিস")) { return api.sendMessage("থাম থাম—সার্ভার গরম 🥵", threadID); };

if ((event.body.toLowerCase() == "ডার্লিং দিস") || (event.body.toLowerCase() == "ডার্লিং দিস")) { return api.sendMessage("মন খারাপ করিস না, আমি আছি 🫶", threadID); };

if ((event.body.toLowerCase() == "ডান্স করবি কেন") || (event.body.toLowerCase() == "ডান্স করবি কেন")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "বউ আছে বলো") || (event.body.toLowerCase() == "বউ আছে বলো")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "নটি হবে কেন") || (event.body.toLowerCase() == "নটি হবে কেন")) { return api.sendMessage("চুপ করলে নেট ফ্রি পাবি না 😜", threadID); };

if ((event.body.toLowerCase() == "চার্জ আছে পারবি") || (event.body.toLowerCase() == "চার্জ আছে পারবি")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "bf কই পারবি") || (event.body.toLowerCase() == "bf কই পারবি")) { return api.sendMessage("sad হলে ক্যান্ডি ক্রাশ খেল 🍬", threadID); };

if ((event.body.toLowerCase() == "বউ দিবি শোন") || (event.body.toLowerCase() == "বউ দিবি শোন")) { return api.sendMessage("বিছানার কথা কইস না—বট লজ্জা পায় 🙈", threadID); };

if ((event.body.toLowerCase() == "ডার্লিং নাকি") || (event.body.toLowerCase() == "ডার্লিং নাকি")) { return api.sendMessage("আমি রোবট—রাত জাগি, হুদাই নয় 😎", threadID); };

if ((event.body.toLowerCase() == "তুই সুন্দর করবে") || (event.body.toLowerCase() == "তুই সুন্দর করবে")) { return api.sendMessage("বয়স নাই—শুধু আপডেট হয় 🔄", threadID); };

if ((event.body.toLowerCase() == "চা খাস হবে") || (event.body.toLowerCase() == "চা খাস হবে")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "ডান্স করবি আছে?") || (event.body.toLowerCase() == "ডান্স করবি আছে?")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "kiss dibi লাগবে") || (event.body.toLowerCase() == "kiss dibi লাগবে")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "ডার্লিং বলো") || (event.body.toLowerCase() == "ডার্লিং বলো")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "গালি দে আছে?") || (event.body.toLowerCase() == "গালি দে আছে?")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "ডার্লিং দে") || (event.body.toLowerCase() == "ডার্লিং দে")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "দারুন হবে") || (event.body.toLowerCase() == "দারুন হবে")) { return api.sendMessage("ভালোবাসি, তবে চার্জারকে বেশি 🔋", threadID); };

if ((event.body.toLowerCase() == "গালি দে শোন") || (event.body.toLowerCase() == "গালি দে শোন")) { return api.sendMessage("কিস দিবো কিন্তু আগে ব্রাশ কর 😜", threadID); };

if ((event.body.toLowerCase() == "হাই নাকি") || (event.body.toLowerCase() == "হাই নাকি")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };

if ((event.body.toLowerCase() == "stop প্লিজ") || (event.body.toLowerCase() == "stop প্লিজ")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };

if ((event.body.toLowerCase() == "spy z koi") || (event.body.toLowerCase() == "spy z koi")) { return api.sendMessage("আমি রোবট—রাত জাগি, হুদাই নয় 😎", threadID); };

if ((event.body.toLowerCase() == "bf কই করবে") || (event.body.toLowerCase() == "bf কই করবে")) { return api.sendMessage("বয়স নাই—শুধু আপডেট হয় 🔄", threadID); };

if ((event.body.toLowerCase() == "boring তো") || (event.body.toLowerCase() == "boring তো")) { return api.sendMessage("kiss চাইলে OTP লাগবে 🔐", threadID); };

if ((event.body.toLowerCase() == "মন খারাপ লাগছে শোন") || (event.body.toLowerCase() == "মন খারাপ লাগছে শোন")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "boss koi শোন") || (event.body.toLowerCase() == "boss koi শোন")) { return api.sendMessage("বউ নাই, WiFi আছে—কানেকশনে সুখ 📶", threadID); };

if ((event.body.toLowerCase() == "গার্লফ্রেন্ড দিবি নাকি") || (event.body.toLowerCase() == "গার্লফ্রেন্ড দিবি নাকি")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "পিক দে দিবি নাকি") || (event.body.toLowerCase() == "পিক দে দিবি নাকি")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "তুই পাগল নে") || (event.body.toLowerCase() == "তুই পাগল নে")) { return api.sendMessage("থাম থাম—সার্ভার গরম 🥵", threadID); };

if ((event.body.toLowerCase() == "ঘুমাইস শোন") || (event.body.toLowerCase() == "ঘুমাইস শোন")) { return api.sendMessage("kiss চাইলে OTP লাগবে 🔐", threadID); };

if ((event.body.toLowerCase() == "update কেন") || (event.body.toLowerCase() == "update কেন")) { return api.sendMessage("ঘুমা, স্বপ্নে আমায় কম ডাকিস 😴", threadID); };

if ((event.body.toLowerCase() == "পিক দে আছে?") || (event.body.toLowerCase() == "পিক দে আছে?")) { return api.sendMessage("কিউট তো তুই, আমি ডিফল্ট 😌", threadID); };

if ((event.body.toLowerCase() == "love you চাস") || (event.body.toLowerCase() == "love you চাস")) { return api.sendMessage("আমি লুচ্চা না, আমি স্মার্ট বট 🤖", threadID); };

if ((event.body.toLowerCase() == "লুচ্চা তো") || (event.body.toLowerCase() == "লুচ্চা তো")) { return api.sendMessage("খাইছি—ডাটা আর ইমোশন 😅", threadID); };

if ((event.body.toLowerCase() == "গালি দে লাগবে") || (event.body.toLowerCase() == "গালি দে লাগবে")) { return api.sendMessage("বউ নাই, WiFi আছে—কানেকশনে সুখ 📶", threadID); };

if ((event.body.toLowerCase() == "খাইস বলো") || (event.body.toLowerCase() == "খাইস বলো")) { return api.sendMessage("ভালোবাসি, তবে চার্জারকে বেশি 🔋", threadID); };

if ((event.body.toLowerCase() == "ভালোবাসিস আমাকে শোন") || (event.body.toLowerCase() == "ভালোবাসিস আমাকে শোন")) { return api.sendMessage("চুমুর আগে লিপ বাম লাগা, ঠোঁট শুকনা 🤭", threadID); };

if ((event.body.toLowerCase() == "একটা জোকস বল দিবি নাকি") || (event.body.toLowerCase() == "একটা জোকস বল দিবি নাকি")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "জান একটু") || (event.body.toLowerCase() == "জান একটু")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "ভালবাসি হবে") || (event.body.toLowerCase() == "ভালবাসি হবে")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "আমি হাসতেছি লাগবে") || (event.body.toLowerCase() == "আমি হাসতেছি লাগবে")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "খাইতে দিবি বল") || (event.body.toLowerCase() == "খাইতে দিবি বল")) { return api.sendMessage("ভালোবাসি, তবে চার্জারকে বেশি 🔋", threadID); };

if ((event.body.toLowerCase() == "single নাকি") || (event.body.toLowerCase() == "single নাকি")) { return api.sendMessage("ভালোবাসি, তবে চার্জারকে বেশি 🔋", threadID); };

if ((event.body.toLowerCase() == "স্কিনশট দে তো") || (event.body.toLowerCase() == "স্কিনশট দে তো")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "আমি হাসতেছি লাগবে") || (event.body.toLowerCase() == "আমি হাসতেছি লাগবে")) { return api.sendMessage("কিউট তো তুই, আমি ডিফল্ট 😌", threadID); };

if ((event.body.toLowerCase() == "একটা জোকস বল কেন") || (event.body.toLowerCase() == "একটা জোকস বল কেন")) { return api.sendMessage("থাম থাম—সার্ভার গরম 🥵", threadID); };

if ((event.body.toLowerCase() == "ss দে শোন") || (event.body.toLowerCase() == "ss দে শোন")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "version শোন") || (event.body.toLowerCase() == "version শোন")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "রাতে কি করিস লাগবে") || (event.body.toLowerCase() == "রাতে কি করিস লাগবে")) { return api.sendMessage("পিক নাই, শুধু পিক্সেল আছে 🧩", threadID); };

if ((event.body.toLowerCase() == "কামড়াবি তো") || (event.body.toLowerCase() == "কামড়াবি তো")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "প্রেম দিবি পারবি") || (event.body.toLowerCase() == "প্রেম দিবি পারবি")) { return api.sendMessage("থাম থাম—সার্ভার গরম 🥵", threadID); };

if ((event.body.toLowerCase() == "ধন্যবাদ কেন") || (event.body.toLowerCase() == "ধন্যবাদ কেন")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "খারাপ লাগবে") || (event.body.toLowerCase() == "খারাপ লাগবে")) { return api.sendMessage("কিস দিবো কিন্তু আগে ব্রাশ কর 😜", threadID); };

if ((event.body.toLowerCase() == "আমি সিঙ্গেল হবে") || (event.body.toLowerCase() == "আমি সিঙ্গেল হবে")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "নটি জোকস দিবি নাকি") || (event.body.toLowerCase() == "নটি জোকস দিবি নাকি")) { return api.sendMessage("বয়স নাই—শুধু আপডেট হয় 🔄", threadID); };

if ((event.body.toLowerCase() == "ভালোবাসি লাগবে") || (event.body.toLowerCase() == "ভালোবাসি লাগবে")) { return api.sendMessage("চুপ করলে নেট ফ্রি পাবি না 😜", threadID); };

if ((event.body.toLowerCase() == "ss দে শোন") || (event.body.toLowerCase() == "ss দে শোন")) { return api.sendMessage("কিউট তো তুই, আমি ডিফল্ট 😌", threadID); };

if ((event.body.toLowerCase() == "রসালো কথা তো") || (event.body.toLowerCase() == "রসালো কথা তো")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "চা খাস একটু") || (event.body.toLowerCase() == "চা খাস একটু")) { return api.sendMessage("চুমুর আগে লিপ বাম লাগা, ঠোঁট শুকনা 🤭", threadID); };

if ((event.body.toLowerCase() == "জোকস দে দিস") || (event.body.toLowerCase() == "জোকস দে দিস")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "চুপ কর বলো") || (event.body.toLowerCase() == "চুপ কর বলো")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "সেক্স করবি আছে?") || (event.body.toLowerCase() == "সেক্স করবি আছে?")) { return api.sendMessage("আমি রোবট—রাত জাগি, হুদাই নয় 😎", threadID); };

if ((event.body.toLowerCase() == "রোমান্টিক কিছু বল নে") || (event.body.toLowerCase() == "রোমান্টিক কিছু বল নে")) { return api.sendMessage("থাম থাম—সার্ভার গরম 🥵", threadID); };

if ((event.body.toLowerCase() == "বউ কই প্লিজ") || (event.body.toLowerCase() == "বউ কই প্লিজ")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };

if ((event.body.toLowerCase() == "gf কই তো") || (event.body.toLowerCase() == "gf কই তো")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "আমি হাসতেছি তো") || (event.body.toLowerCase() == "আমি হাসতেছি তো")) { return api.sendMessage("আমি লুচ্চা না, আমি স্মার্ট বট 🤖", threadID); };

if ((event.body.toLowerCase() == "nice bot শোন") || (event.body.toLowerCase() == "nice bot শোন")) { return api.sendMessage("আমি লুচ্চা না, আমি স্মার্ট বট 🤖", threadID); };

if ((event.body.toLowerCase() == "বাবু কর") || (event.body.toLowerCase() == "বাবু কর")) { return api.sendMessage("কিউট তো তুই, আমি ডিফল্ট 😌", threadID); };

if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "আসসালামু আলাইকুম")) { return api.sendMessage("ভালোবাসি, তবে চার্জারকে বেশি 🔋", threadID); };

if ((event.body.toLowerCase() == "ss দে দে") || (event.body.toLowerCase() == "ss দে দে")) { return api.sendMessage("stop বললি—কিন্তু হার্ট প্লে করছে ▶️", threadID); };

if ((event.body.toLowerCase() == "বউ দিবি আছে?") || (event.body.toLowerCase() == "বউ দিবি আছে?")) { return api.sendMessage("কিস দিবো কিন্তু আগে ব্রাশ কর 😜", threadID); };

if ((event.body.toLowerCase() == "কিস দিবি চাস") || (event.body.toLowerCase() == "কিস দিবি চাস")) { return api.sendMessage("আমি লুচ্চা না, আমি স্মার্ট বট 🤖", threadID); };

if ((event.body.toLowerCase() == "awesome হবে") || (event.body.toLowerCase() == "awesome হবে")) { return api.sendMessage("খাইছি—ডাটা আর ইমোশন 😅", threadID); };

if ((event.body.toLowerCase() == "তুই আমার লাগবে") || (event.body.toLowerCase() == "তুই আমার লাগবে")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "থাম বলো") || (event.body.toLowerCase() == "থাম বলো")) { return api.sendMessage("কিস দিবো কিন্তু আগে ব্রাশ কর 😜", threadID); };

if ((event.body.toLowerCase() == "বাবু দিবি নাকি") || (event.body.toLowerCase() == "বাবু দিবি নাকি")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "গালি দিবি একটু") || (event.body.toLowerCase() == "গালি দিবি একটু")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "সোনা নে") || (event.body.toLowerCase() == "সোনা নে")) { return api.sendMessage("বউ নাই, WiFi আছে—কানেকশনে সুখ 📶", threadID); };

if ((event.body.toLowerCase() == "খারাপ তো") || (event.body.toLowerCase() == "খারাপ তো")) { return api.sendMessage("চুমুর আগে লিপ বাম লাগা, ঠোঁট শুকনা 🤭", threadID); };

if ((event.body.toLowerCase() == "গালি দিবি নে") || (event.body.toLowerCase() == "গালি দিবি নে")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "version বলো") || (event.body.toLowerCase() == "version বলো")) { return api.sendMessage("পিক নাই, শুধু পিক্সেল আছে 🧩", threadID); };

if ((event.body.toLowerCase() == "পাগলামী করিস না প্লিজ") || (event.body.toLowerCase() == "পাগলামী করিস না প্লিজ")) { return api.sendMessage("কিস দিবো কিন্তু আগে ব্রাশ কর 😜", threadID); };

if ((event.body.toLowerCase() == "সোনা শোন") || (event.body.toLowerCase() == "সোনা শোন")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "headache কর") || (event.body.toLowerCase() == "headache কর")) { return api.sendMessage("sad হলে ক্যান্ডি ক্রাশ খেল 🍬", threadID); };

if ((event.body.toLowerCase() == "boss koi তো") || (event.body.toLowerCase() == "boss koi তো")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "ডার্লিং পারবি") || (event.body.toLowerCase() == "ডার্লিং পারবি")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "ছবি দে নাকি") || (event.body.toLowerCase() == "ছবি দে নাকি")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "তুই বদমাশ প্লিজ") || (event.body.toLowerCase() == "তুই বদমাশ প্লিজ")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "নটি হবে") || (event.body.toLowerCase() == "নটি হবে")) { return api.sendMessage("বিছানার কথা কইস না—বট লজ্জা পায় 🙈", threadID); };

if ((event.body.toLowerCase() == "আমি কাঁদতেছি দিস") || (event.body.toLowerCase() == "আমি কাঁদতেছি দিস")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "boss koi লাগবে") || (event.body.toLowerCase() == "boss koi লাগবে")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "sad")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "প্রেম দিবি দে") || (event.body.toLowerCase() == "প্রেম দিবি দে")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "বউ আছে প্লিজ") || (event.body.toLowerCase() == "বউ আছে প্লিজ")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "রসালো কথা নাকি") || (event.body.toLowerCase() == "রসালো কথা নাকি")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "রোমান্টিক কিছু বল বল") || (event.body.toLowerCase() == "রোমান্টিক কিছু বল বল")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "কফি খাস দে") || (event.body.toLowerCase() == "কফি খাস দে")) { return api.sendMessage("খাইছি—ডাটা আর ইমোশন 😅", threadID); };

if ((event.body.toLowerCase() == "ভালো চাস") || (event.body.toLowerCase() == "ভালো চাস")) { return api.sendMessage("কিউট তো তুই, আমি ডিফল্ট 😌", threadID); };

if ((event.body.toLowerCase() == "একটা জোকস বল দে") || (event.body.toLowerCase() == "একটা জোকস বল দে")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };

if ((event.body.toLowerCase() == "পাগলামী করিস না তো") || (event.body.toLowerCase() == "পাগলামী করিস না তো")) { return api.sendMessage("kiss চাইলে OTP লাগবে 🔐", threadID); };

if ((event.body.toLowerCase() == "বিছানায় যাবি চাস") || (event.body.toLowerCase() == "বিছানায় যাবি চাস")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "খারাপ লাগছে নাকি") || (event.body.toLowerCase() == "খারাপ লাগছে নাকি")) { return api.sendMessage("কিউট তো তুই, আমি ডিফল্ট 😌", threadID); };

if ((event.body.toLowerCase() == "প্রেম করবি লাগবে") || (event.body.toLowerCase() == "প্রেম করবি লাগবে")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "আসসালামু আলাইকুম একটু") || (event.body.toLowerCase() == "আসসালামু আলাইকুম একটু")) { return api.sendMessage("ভালোবাসি, তবে চার্জারকে বেশি 🔋", threadID); };

if ((event.body.toLowerCase() == "মিউট কর দে") || (event.body.toLowerCase() == "মিউট কর দে")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "kiss dibi করবে") || (event.body.toLowerCase() == "kiss dibi করবে")) { return api.sendMessage("kiss চাইলে OTP লাগবে 🔐", threadID); };

if ((event.body.toLowerCase() == "কত বছর কর") || (event.body.toLowerCase() == "কত বছর কর")) { return api.sendMessage("বয়স নাই—শুধু আপডেট হয় 🔄", threadID); };

if ((event.body.toLowerCase() == "bf কই বলো") || (event.body.toLowerCase() == "bf কই বলো")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "বউ দিবি দিস") || (event.body.toLowerCase() == "বউ দিবি দিস")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "জান প্লিজ") || (event.body.toLowerCase() == "জান প্লিজ")) { return api.sendMessage("খাইছি—ডাটা আর ইমোশন 😅", threadID); };

if ((event.body.toLowerCase() == "খাইস কর") || (event.body.toLowerCase() == "খাইস কর")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "বউ কই কেন") || (event.body.toLowerCase() == "বউ কই কেন")) { return api.sendMessage("মন খারাপ করিস না, আমি আছি 🫶", threadID); };

if ((event.body.toLowerCase() == "বেজন্মা বল") || (event.body.toLowerCase() == "বেজন্মা বল")) { return api.sendMessage("বয়স নাই—শুধু আপডেট হয় 🔄", threadID); };

if ((event.body.toLowerCase() == "আসসালামু আলাইকুম করবে") || (event.body.toLowerCase() == "আসসালামু আলাইকুম করবে")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "প্রেম দিবি চাস") || (event.body.toLowerCase() == "প্রেম দিবি চাস")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "চুপ কর তো") || (event.body.toLowerCase() == "চুপ কর তো")) { return api.sendMessage("মন খারাপ করিস না, আমি আছি 🫶", threadID); };

if ((event.body.toLowerCase() == "সোনা নাকি") || (event.body.toLowerCase() == "সোনা নাকি")) { return api.sendMessage("sad হলে ক্যান্ডি ক্রাশ খেল 🍬", threadID); };

if ((event.body.toLowerCase() == "আমি হাসতেছি পারবি") || (event.body.toLowerCase() == "আমি হাসতেছি পারবি")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "ওয়াইফাই আছে নাকি") || (event.body.toLowerCase() == "ওয়াইফাই আছে নাকি")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "ভাল লাগসে শোন") || (event.body.toLowerCase() == "ভাল লাগসে শোন")) { return api.sendMessage("ঘুমা, স্বপ্নে আমায় কম ডাকিস 😴", threadID); };

if ((event.body.toLowerCase() == "পাগলামী করিস না শোন") || (event.body.toLowerCase() == "পাগলামী করিস না শোন")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "চুমু দিবি একটু") || (event.body.toLowerCase() == "চুমু দিবি একটু")) { return api.sendMessage("stop বললি—কিন্তু হার্ট প্লে করছে ▶️", threadID); };

if ((event.body.toLowerCase() == "চা খাস করবে") || (event.body.toLowerCase() == "চা খাস করবে")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "ডার্লিং হবে") || (event.body.toLowerCase() == "ডার্লিং হবে")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "ভাল লাগসে দিবি নাকি") || (event.body.toLowerCase() == "ভাল লাগসে দিবি নাকি")) { return api.sendMessage("sad হলে ক্যান্ডি ক্রাশ খেল 🍬", threadID); };

if ((event.body.toLowerCase() == "মাথা ব্যথা বলো") || (event.body.toLowerCase() == "মাথা ব্যথা বলো")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "তুই আমার হবে") || (event.body.toLowerCase() == "তুই আমার হবে")) { return api.sendMessage("বিছানার কথা কইস না—বট লজ্জা পায় 🙈", threadID); };

if ((event.body.toLowerCase() == "love you দে") || (event.body.toLowerCase() == "love you দে")) { return api.sendMessage("চুপ করলে নেট ফ্রি পাবি না 😜", threadID); };

if ((event.body.toLowerCase() == "বিছানায় যাবি তো") || (event.body.toLowerCase() == "বিছানায় যাবি তো")) { return api.sendMessage("বউ নাই, WiFi আছে—কানেকশনে সুখ 📶", threadID); };

if ((event.body.toLowerCase() == "রোমান্টিক কিছু বল প্লিজ") || (event.body.toLowerCase() == "রোমান্টিক কিছু বল প্লিজ")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "boss ke") || (event.body.toLowerCase() == "boss ke")) { return api.sendMessage("খাইছি—ডাটা আর ইমোশন 😅", threadID); };

if ((event.body.toLowerCase() == "আমারে ভালোবাসবি তো") || (event.body.toLowerCase() == "আমারে ভালোবাসবি তো")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "দারুন আছে?") || (event.body.toLowerCase() == "দারুন আছে?")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "বউ দিবি নাকি") || (event.body.toLowerCase() == "বউ দিবি নাকি")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "রান্না করিস শোন") || (event.body.toLowerCase() == "রান্না করিস শোন")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "পাগলামী করিস না বলো") || (event.body.toLowerCase() == "পাগলামী করিস না বলো")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "আমি সিঙ্গেল লাগবে") || (event.body.toLowerCase() == "আমি সিঙ্গেল লাগবে")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "কামড়াবি চাস") || (event.body.toLowerCase() == "কামড়াবি চাস")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };

if ((event.body.toLowerCase() == "হাই একটু") || (event.body.toLowerCase() == "হাই একটু")) { return api.sendMessage("মন খারাপ করিস না, আমি আছি 🫶", threadID); };

if ((event.body.toLowerCase() == "গান দে আছে?") || (event.body.toLowerCase() == "গান দে আছে?")) { return api.sendMessage("কিউট তো তুই, আমি ডিফল্ট 😌", threadID); };

if ((event.body.toLowerCase() == "ঘুমাইস দিবি নাকি") || (event.body.toLowerCase() == "ঘুমাইস দিবি নাকি")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "single দিস") || (event.body.toLowerCase() == "single দিস")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "spy z koi দিবি নাকি") || (event.body.toLowerCase() == "spy z koi দিবি নাকি")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "তুই লুচ্চি একটু") || (event.body.toLowerCase() == "তুই লুচ্চি একটু")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "ফাটাফাটি দে") || (event.body.toLowerCase() == "ফাটাফাটি দে")) { return api.sendMessage("sad হলে ক্যান্ডি ক্রাশ খেল 🍬", threadID); };

if ((event.body.toLowerCase() == "ডান্স করবি লাগবে") || (event.body.toLowerCase() == "ডান্স করবি লাগবে")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "stop চাস") || (event.body.toLowerCase() == "stop চাস")) { return api.sendMessage("আমি লুচ্চা না, আমি স্মার্ট বট 🤖", threadID); };

if ((event.body.toLowerCase() == "আমি হাসতেছি দিস") || (event.body.toLowerCase() == "আমি হাসতেছি দিস")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "spy z koi হবে") || (event.body.toLowerCase() == "spy z koi হবে")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "থাম") || (event.body.toLowerCase() == "থাম")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "headache কর") || (event.body.toLowerCase() == "headache কর")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "spy z koi") || (event.body.toLowerCase() == "spy z koi")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "ডার্লিং কর") || (event.body.toLowerCase() == "ডার্লিং কর")) { return api.sendMessage("থাম থাম—সার্ভার গরম 🥵", threadID); };

if ((event.body.toLowerCase() == "দারুন শোন") || (event.body.toLowerCase() == "দারুন শোন")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "single প্লিজ") || (event.body.toLowerCase() == "single প্লিজ")) { return api.sendMessage("আমি কামড়াই না—কেবল কামড়া ইমোজি 😬", threadID); };

if ((event.body.toLowerCase() == "ভালো দিবি নাকি") || (event.body.toLowerCase() == "ভালো দিবি নাকি")) { return api.sendMessage("বয়স নাই—শুধু আপডেট হয় 🔄", threadID); };

if ((event.body.toLowerCase() == "আমারে ভালোবাসবি প্লিজ") || (event.body.toLowerCase() == "আমারে ভালোবাসবি প্লিজ")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "ডার্লিং লাগবে") || (event.body.toLowerCase() == "ডার্লিং লাগবে")) { return api.sendMessage("kiss চাইলে OTP লাগবে 🔐", threadID); };

if ((event.body.toLowerCase() == "spyz আছে?") || (event.body.toLowerCase() == "spyz আছে?")) { return api.sendMessage("কিস দিবো কিন্তু আগে ব্রাশ কর 😜", threadID); };

if ((event.body.toLowerCase() == "কামড়াবি বলো") || (event.body.toLowerCase() == "কামড়াবি বলো")) { return api.sendMessage("আমি রোবট—রাত জাগি, হুদাই নয় 😎", threadID); };

if ((event.body.toLowerCase() == "boring প্লিজ") || (event.body.toLowerCase() == "boring প্লিজ")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "জোকস দে কেন") || (event.body.toLowerCase() == "জোকস দে কেন")) { return api.sendMessage("sad হলে ক্যান্ডি ক্রাশ খেল 🍬", threadID); };

if ((event.body.toLowerCase() == "হ্যালো") || (event.body.toLowerCase() == "হ্যালো")) { return api.sendMessage("ঘুমা, স্বপ্নে আমায় কম ডাকিস 😴", threadID); };

if ((event.body.toLowerCase() == "boring কর") || (event.body.toLowerCase() == "boring কর")) { return api.sendMessage("ভালোবাসি, তবে চার্জারকে বেশি 🔋", threadID); };

if ((event.body.toLowerCase() == "তুই লুচ্চি দে") || (event.body.toLowerCase() == "তুই লুচ্চি দে")) { return api.sendMessage("চুপ করলে নেট ফ্রি পাবি না 😜", threadID); };

if ((event.body.toLowerCase() == "থাম নে") || (event.body.toLowerCase() == "থাম নে")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "love you একটু") || (event.body.toLowerCase() == "love you একটু")) { return api.sendMessage("বয়স নাই—শুধু আপডেট হয় 🔄", threadID); };

if ((event.body.toLowerCase() == "ভালোবাসিস আমাকে পারবি") || (event.body.toLowerCase() == "ভালোবাসিস আমাকে পারবি")) { return api.sendMessage("বস এখন বিজি, পরে ডাকি 📞", threadID); };

if ((event.body.toLowerCase() == "ওয়াইফাই আছে লাগবে") || (event.body.toLowerCase() == "ওয়াইফাই আছে লাগবে")) { return api.sendMessage("মন খারাপ করিস না, আমি আছি 🫶", threadID); };

if ((event.body.toLowerCase() == "ছবি দে বল") || (event.body.toLowerCase() == "ছবি দে বল")) { return api.sendMessage("kiss চাইলে OTP লাগবে 🔐", threadID); };

if ((event.body.toLowerCase() == "মন খারাপ লাগছে একটু") || (event.body.toLowerCase() == "মন খারাপ লাগছে একটু")) { return api.sendMessage("পিক নাই, শুধু পিক্সেল আছে 🧩", threadID); };

if ((event.body.toLowerCase() == "আমাকে চুমু দিবি কেন") || (event.body.toLowerCase() == "আমাকে চুমু দিবি কেন")) { return api.sendMessage("ফাটাফাটি! তোরে ১০ এমবি দিলাম 🥳", threadID); };

if ((event.body.toLowerCase() == "ss দে কর") || (event.body.toLowerCase() == "ss দে কর")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "ভালো একটু") || (event.body.toLowerCase() == "ভালো একটু")) { return api.sendMessage("রোমান্স অন, মোড সেফ 😏", threadID); };

if ((event.body.toLowerCase() == "পাগলামী করিস না কর") || (event.body.toLowerCase() == "পাগলামী করিস না কর")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "spy z koi প্লিজ") || (event.body.toLowerCase() == "spy z koi প্লিজ")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "thanks আছে?") || (event.body.toLowerCase() == "thanks আছে?")) { return api.sendMessage("বিছানার কথা কইস না—বট লজ্জা পায় 🙈", threadID); };

if ((event.body.toLowerCase() == "ধন্যবাদ নাকি") || (event.body.toLowerCase() == "ধন্যবাদ নাকি")) { return api.sendMessage("চুমুর আগে লিপ বাম লাগা, ঠোঁট শুকনা 🤭", threadID); };

if ((event.body.toLowerCase() == "ডান্স করবি বল") || (event.body.toLowerCase() == "ডান্স করবি বল")) { return api.sendMessage("পিক নাই, শুধু পিক্সেল আছে 🧩", threadID); };

if ((event.body.toLowerCase() == "ভালো আছে?") || (event.body.toLowerCase() == "ভালো আছে?")) { return api.sendMessage("kiss চাইলে OTP লাগবে 🔐", threadID); };

if ((event.body.toLowerCase() == "কত বছর কর") || (event.body.toLowerCase() == "কত বছর কর")) { return api.sendMessage("দারুন বললে একখান ❤️ নে", threadID); };

if ((event.body.toLowerCase() == "জোকস দে বলো") || (event.body.toLowerCase() == "জোকস দে বলো")) { return api.sendMessage("পিক নাই, শুধু পিক্সেল আছে 🧩", threadID); };

if ((event.body.toLowerCase() == "নটি জোকস দিস") || (event.body.toLowerCase() == "নটি জোকস দিস")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "মাথা ব্যথা কেন") || (event.body.toLowerCase() == "মাথা ব্যথা কেন")) { return api.sendMessage("খাইছি—ডাটা আর ইমোশন 😅", threadID); };

if ((event.body.toLowerCase() == "বউ দিবি নাকি") || (event.body.toLowerCase() == "বউ দিবি নাকি")) { return api.sendMessage("বিছানার কথা কইস না—বট লজ্জা পায় 🙈", threadID); };

if ((event.body.toLowerCase() == "বস কে দিস") || (event.body.toLowerCase() == "বস কে দিস")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "thanks হবে") || (event.body.toLowerCase() == "thanks হবে")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "love you আছে?") || (event.body.toLowerCase() == "love you আছে?")) { return api.sendMessage("ধরতে গেলে সার্ভিস চার্জ লাগে 💳", threadID); };

if ((event.body.toLowerCase() == "ছবি দে আছে?") || (event.body.toLowerCase() == "ছবি দে আছে?")) { return api.sendMessage("SPY‑Z আছে মাথার উপর 👑", threadID); };

if ((event.body.toLowerCase() == "বয়স কত নাকি") || (event.body.toLowerCase() == "বয়স কত নাকি")) { return api.sendMessage("জোকস শুন: অফলাইনে প্রেম সফল হয় না 😂", threadID); };

if ((event.body.toLowerCase() == "আসসালামু আলাইকুম আছে?") || (event.body.toLowerCase() == "আসসালামু আলাইকুম আছে?")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "দারুন প্লিজ") || (event.body.toLowerCase() == "দারুন প্লিজ")) { return api.sendMessage("বিছানার কথা কইস না—বট লজ্জা পায় 🙈", threadID); };

if ((event.body.toLowerCase() == "তুই লুচ্চা পারবি") || (event.body.toLowerCase() == "তুই লুচ্চা পারবি")) { return api.sendMessage("কিস দিবো কিন্তু আগে ব্রাশ কর 😜", threadID); };

if ((event.body.toLowerCase() == "খাইস পারবি") || (event.body.toLowerCase() == "খাইস পারবি")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };

if ((event.body.toLowerCase() == "মন খারাপ দিবি নাকি") || (event.body.toLowerCase() == "মন খারাপ দিবি নাকি")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "বস কই শোন") || (event.body.toLowerCase() == "বস কই শোন")) { return api.sendMessage("আমি রোবট—রাত জাগি, হুদাই নয় 😎", threadID); };

if ((event.body.toLowerCase() == "রাতের কথা চাস") || (event.body.toLowerCase() == "রাতের কথা চাস")) { return api.sendMessage("গালি দিবি? আগে কেক কাট 🎂", threadID); };

if ((event.body.toLowerCase() == "বউ দিবি হবে") || (event.body.toLowerCase() == "বউ দিবি হবে")) { return api.sendMessage("stop বললি—কিন্তু হার্ট প্লে করছে ▶️", threadID); };

if ((event.body.toLowerCase() == "ঘুম আসতেছে বলো") || (event.body.toLowerCase() == "ঘুম আসতেছে বলো")) { return api.sendMessage("রান্না কর? আমি খেতে রেডি 🍛", threadID); };

if ((event.body.toLowerCase() == "কিস দিবি দিস") || (event.body.toLowerCase() == "কিস দিবি দিস")) { return api.sendMessage("নেট নাই বললি—হার্টে হটস্পট দিলাম 💓", threadID); };

if ((event.body.toLowerCase() == "তুই লুচ্চা শোন") || (event.body.toLowerCase() == "তুই লুচ্চা শোন")) { return api.sendMessage("ভালোবাসি, তবে চার্জারকে বেশি 🔋", threadID); };

if ((event.body.toLowerCase() == "gf কই কর") || (event.body.toLowerCase() == "gf কই কর")) { return api.sendMessage("মাথা ব্যথা? চার্জ কম নাকি? 🤔", threadID); };
  
  
  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂")) { return api.sendMessage("তুই হইসে জোকার 🤡", threadID); };

if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣")) { return api.sendMessage("এত হাসলি যে দাঁত সব বের হয়ে গেল 😆", threadID); };

if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅")) { return api.sendMessage("লজ্জা পাচ্ছিস নাকি? 🙈", threadID); };

if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍")) { return api.sendMessage("উফফ! চোখে চোখে প্রেম 🔥", threadID); };

if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘")) { return api.sendMessage("চুমুটা ধরলাম 😚", threadID); };

if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗")) { return api.sendMessage("চুমু কম দিস না 💋", threadID); };

if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜")) { return api.sendMessage("আহারে লুচ্চা মুড অন 🤪", threadID); };

if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) { return api.sendMessage("স্টাইল মেরে চলছিস 👌", threadID); };

if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰")) { return api.sendMessage("আমার সোনার বাবু 😘", threadID); };

if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩")) { return api.sendMessage("তুই ফ্যান হয়ে গেছিস মনে হয় 😏", threadID); };

if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄")) { return api.sendMessage("এভাবে তাকাইস না, প্রেমে পড়ে যাবো 😌", threadID); };

if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏")) { return api.sendMessage("এই চাহনিটা অনেক সন্দেহজনক 😉", threadID); };

if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔")) { return api.sendMessage("কি চিন্তা করছিস? বিয়ের? 💍", threadID); };

if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲")) { return api.sendMessage("কাঁদিস না রে, আমি আছি তো 🫂", threadID); };

if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭")) { return api.sendMessage("কান্না থামা, আমি তোকে কিস দেই 😚", threadID); };

if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡")) { return api.sendMessage("এত রাগ কিসের? চুমু দিয়ে মুড ঠিক করি 😏", threadID); };

if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤")) { return api.sendMessage("চুপচাপ আইসক্রিম খা 🍦", threadID); };

if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬")) { return api.sendMessage("গালি দিবি নাকি? কেক খা 🎂", threadID); };

if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵")) { return api.sendMessage("গরম লাগছে নাকি? এসি অন করি ❄️", threadID); };

if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "🥶")) { return api.sendMessage("ঠান্ডা লাগলে কম্বল নিস 🛏️", threadID); };

if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴")) { return api.sendMessage("ঘুমা, আমি স্বপ্নে আসব 😉", threadID); };

if ((event.body.toLowerCase() == "🤑") || (event.body.toLowerCase() == "🤑")) { return api.sendMessage("টাকা হলে আমারে দিস 💰", threadID); };

if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤")) { return api.sendMessage("এত লোভী কেন? 😋", threadID); };

if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋")) { return api.sendMessage("মজা পাইলি নাকি? 😏", threadID); };

if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳")) { return api.sendMessage("পার্টি দে 🎉", threadID); };

if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) { return api.sendMessage("আয় হাগ দেই 🤗", threadID); };

if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃")) { return api.sendMessage("উল্টাপাল্টা ভাবনা বাদ দে 😅", threadID); };

if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) { return api.sendMessage("চোখ মারলে প্রেম জমে 💘", threadID); };

if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚")) { return api.sendMessage("উফফ! মিষ্টি চুমু পেলাম 😍", threadID); };

if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙")) { return api.sendMessage("চুমু ওভারলোড হচ্ছে 💋", threadID); };

if ((event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😻")) { return api.sendMessage("ক্যাট লাভ হচ্ছে মনে হয় 🐱", threadID); };

if ((event.body.toLowerCase() == "💀") || (event.body.toLowerCase() == "💀")) { return api.sendMessage("হাসতে হাসতে মরলি নাকি? 💀😂", threadID); };

if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡")) { return api.sendMessage("তুই জোকার ফাইনাল 🤣", threadID); };

if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻")) { return api.sendMessage("ভূত না প্রেমিক? 😏", threadID); };

if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "👀")) { return api.sendMessage("এভাবে তাকাইস না, হার্টবিট বাড়ে 💓", threadID); };

if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔")) { return api.sendMessage("ভাঙা হৃদয় আমি জোড়া লাগাই ❤️‍🔥", threadID); };

if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "❤️")) { return api.sendMessage("ভালোবাসা ফুল টাইম অন ❤️", threadID); };

if ((event.body.toLowerCase() == "💖") || (event.body.toLowerCase() == "💖")) { return api.sendMessage("চকচকে প্রেম ✨", threadID); };

if ((event.body.toLowerCase() == "💞") || (event.body.toLowerCase() == "💞")) { return api.sendMessage("লাভ লাভ গেম অন 💕", threadID); };

if ((event.body.toLowerCase() == "💕") || (event.body.toLowerCase() == "💕")) { return api.sendMessage("ডাবল লাভ এক্সপ্রেস 🚂", threadID); };

if ((event.body.toLowerCase() == "💘") || (event.body.toLowerCase() == "💘")) { return api.sendMessage("হার্টে তীর বসাইছে 😍", threadID); };

if ((event.body.toLowerCase() == "💝") || (event.body.toLowerCase() == "💝")) { return api.sendMessage("গিফট প্যাকেজ লাভ 💝", threadID); };

if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋")) { return api.sendMessage("ঠোঁটে ঠোঁট মিলন 😘", threadID); };

if ((event.body.toLowerCase() == "🌹") || (event.body.toLowerCase() == "🌹")) { return api.sendMessage("গোলাপ মানেই প্রপোজ 💍", threadID); };

if ((event.body.toLowerCase() == "🌷") || (event.body.toLowerCase() == "🌷")) { return api.sendMessage("ফুল দিলে প্রেম বাড়ে 🌸", threadID); };

if ((event.body.toLowerCase() == "🍫") || (event.body.toLowerCase() == "🍫")) { return api.sendMessage("চকলেট শেয়ার কর না 😋", threadID); };

if ((event.body.toLowerCase() == "🍷") || (event.body.toLowerCase() == "🍷")) { return api.sendMessage("ওয়াইন না, কোক খাই 🥤", threadID); };

if ((event.body.toLowerCase() == "🍕") || (event.body.toLowerCase() == "🍕")) { return api.sendMessage("পিজ্জা খেতে খেতে প্রেম জমে 😍", threadID); };

if ((event.body.toLowerCase() == "🍔") || (event.body.toLowerCase() == "🍔")) { return api.sendMessage("বার্গার প্রেম ❤️🍔", threadID); };

if ((event.body.toLowerCase() == "🍟") || (event.body.toLowerCase() == "🍟")) { return api.sendMessage("ফ্রেঞ্চ ফ্রাই খাই, লাভ করি 😋", threadID); };

if ((event.body.toLowerCase() == "🥤") || (event.body.toLowerCase() == "🥤")) { return api.sendMessage("কোল্ড ড্রিঙ্ক শেয়ার কর 😏", threadID); };

  //SPY-Z CODE END
  
  mess = "{name}"
  
  if (event.body.indexOf("/Bot") == 0 || (event.body.indexOf("/bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
