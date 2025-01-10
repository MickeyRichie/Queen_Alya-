//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349066862063";
global.sudo = process.env.SUDO || "2349066862063";
global.owner = process.env.OWNER_NUMBER || "2349066862063";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dWVnBuc0xrSUc2cDhkQmJGS29VNUpTZjFFRnRvbE9ldkpqckVNVzJHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0F1Rk1KZU9kS2ZhRjkrSHdaaG53NUJqUXFoS2FyWkZhN21idjJ4SHhTUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTUVvc29xTkp4THdNeTFiZGQ1ZkVnR00xYjV5WlhLNkRtU0dZQk5zd0ZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFajBsV3EzRmF3Z2s4TlVOelhpZlN1RzJiZkRqeDIvMk9yWC9KKzE2OWhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1NdjJhTWZsSW5walFsUGRRZmhVdlQ1cVVSc2dRSHFvMXZaRVVpWjZ1Vjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkExRmVDNHdzTExOR3NpdVFjMUR1ZzlGVEpwSDNnMkpORVhyVEI2RGQ2R1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZlT0ZqN2JHblJteUh0ZnpYYnYvckR6clRZdStXTlhiL2lCYS82QmUwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXljRXUzQStEWk1zOVIzSkZXYWloenczUTdndHNsQ2w2WWZwSmF3bWdEZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtyK1NjNTNtQ1RMbHRaMkEwQlNoRFZiRE9LRVNvWU9nTHVKRldXcXJUQ0hKdnl1aHBDd3QrOURMUmt2ZmFRb0x4Z1hRQWl1N21aMVVnN3cyOWcyUURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6InhrWUQrdThtdGNPbEMyL0lsWFNGdmhFbEpBT3BkYXpuNVdZWTZUMnpXSTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InN3VlhPM2I0UzlheGtvMHRvdDJEbFEiLCJwaG9uZUlkIjoiODc0ZDNmZGQtODQ0NC00ZDY5LTg1NmEtMmIyMzkzNzZlZmY1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFXMnMwd2VuQ2w3R0d6V041MU95ckk2RmtMdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzMTJZSWZpL29COWt4V2VuWjRURGNKS0JCekE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTTdOQkhSSDgiLCJtZSI6eyJpZCI6IjIzNDkwNjY4NjIwNjM6NjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ042KzlLd0hFT2ZzZzd3R0dCY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IklzcHFtMVNlbWhWNmQ3SnVKSjAwbnRPOGd3L25lTzZGMUxpSlhWcEcySFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpWdEpkOFdWZ1U3L25WM3FWWnZneWZuek1zRzhmWW8yNGErelBQeEVQbTIxUGlvS2wzbzRZZDBtUHZITzZIdFB1L2t5bVgyWXNjRHJqcWNpYi9jbEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJraDluaWQxQzlITEpIM2tzbkcwMjF2c0t6Z09sVjJhcnFsV3R5Vm5oUzZEUGVMMHgrMzBnS2Z6RXIyUmxLeUVjdXF0RmZrOC9KdEtVSDcyUENtQmVDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNjY4NjIwNjM6NjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0xLYXB0VW5wb1ZlbmV5YmlTZE5KN1R2SU1QNTNqdWhkUzRpVjFhUnRoMCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjUwNDk0OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPK04ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "MICKEY-RICHIE😎",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
