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
global.devs = "2349117180842";
global.sudo = process.env.SUDO || "2349117180842";
global.owner = process.env.OWNER_NUMBER || "2349117180842";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dwUnJ4UnZTNEpIdnJDczE4R1FsY1lXeXdZVjNxbzhhaDMwSW4vT3FIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWtMYW5Nd1gxV1JuYUI3dmx2eEVzRXM1YWRwOVlhK1p6ZlFNcERTYW5oST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TVpoQncyTWNNUWZuZExqcjZRMk84eVErZUQxaHNLdnh2SnVwcjUwUlVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaaGRvZjVESjJ5bEFBdFBBWG9aVU42R0tYN0t4Z1QrS243dEd0ZkRiNGdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1HQ2E2R0JUTElhcjVrdWh2Yzl5dWlISW9zR2t3MFVoNGh3N1p0OXVjMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFqTlA0TU5hU0pRQzhzWHZPQm1yU1J2aUtRS2xzcnlNS3MvREdZVWlvVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVOeWo4Z3ltc05YM2FKZGpISm9WOFhJcEg4SFBCOWpEQlRIQThPSjYwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHpEQk1sdlZaRCtsWG1reGRLUVhYdUdVZE1NcTJJdm05ZDYyb0E4NXFIUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN5Rzh1b0d2cVFBeGc5M3VwbG1IdXorNENNcjdXQUZVWmJwRVI3NlplamRNa3NLWUF4L0JDTUVRT28zYXpkMzZNQUJ5Qi9zQTlHc3VsKzI4RGF1RkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJnbXlOMGRUcWxHZ09WQ3hIUktGelZIL2JtR3JHM2h2T05tbGxqSVd6TE9JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJidnNYbDB2eFJGVzA3Zy1FdlZ0ZEZ3IiwicGhvbmVJZCI6IjQ0YzA4MWE5LTk5MjctNGVlOC1iNzdhLTc3MTcxYTY3OTlkYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6ZURwZ3BjNFlIZGpyY3Y3azhNTkt0YVdjdHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUxhWm1lZ1BEK3dsdFVvZDB0WVVBVTIzYnVJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhDNkZGREJaIiwibWUiOnsiaWQiOiIyMzQ5MTE3MTgwODQyOjI3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMajZxQUlRdkpHUHdRWVlEQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0K25jc1pNZ0o5TXZHR2ZITVlCR0g3RC9vbzdTb1lEL2d4bWh5OWRXbkdBPSIsImFjY291bnRTaWduYXR1cmUiOiJ5aE1ROXc5dVRqUklGT2pMRXhvOUhYWmMzWkVHRFd6ZUo2SGFIeGhpS2doYnZ6R0JqemJINUZQWkRZZTNQd0dhaGZtUFJLcXllUVBiTUxpaVZYUmREUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidmFQbkx6U2g4dEJkT0labFpodXhHaXFxNnNZZFYxR0dVUU5GaEljSnlSMzdlOU9vZy9DQ3NTNi9xSkk1MWhqTEpDcllodWNhVDBqcXNBQkdQWDdyQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTE3MTgwODQyOjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJmcDNMR1RJQ2ZUTHhobnh6R0FSaCt3LzZLTzBxR0EvNE1ab2N2WFZweGcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDcxNzU2MjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGNQIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ":",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "𝐈𝐍𝐍𝐎𝐂𝐄𝐍𝐓 𝐁𝐎𝐘( ･_･)♡",
  packname: process.env.PACK_NAME || "Ⲃ𝓛ⴑⲈ ⲆⲈⲘⲞⲚ 😈🥹*",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "𝐈𝐍𝐍𝐎𝐂𝐄𝐍𝐓 𝐁𝐎𝐘( ･_･)♡",
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
