const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923000053484";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_48_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgOSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU3LFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMixcbiAgICAgICAgMjEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODksXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYWZ2WmtDbVU4WmlxTzUvRVR5UWkyaXl5MktaTjVBQ0RNOUlWRDhJbWtWVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVlFPN3phby1RdzZEYTFUaEdYbDB2d1wiLFxuICBcInBob25lSWRcIjogXCJmNGM3NGViMi0yMDU3LTQzZTMtODNiMy1hNzc4YTY4YjkxMGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAyMjAsXG4gICAgICAyMyxcbiAgICAgIDEyOCxcbiAgICAgIDExMCxcbiAgICAgIDE3NixcbiAgICAgIDQ4LFxuICAgICAgMTg0LFxuICAgICAgMTMyLFxuICAgICAgMTgsXG4gICAgICA4MSxcbiAgICAgIDc1LFxuICAgICAgMjQ3LFxuICAgICAgMTAyLFxuICAgICAgNTAsXG4gICAgICA3NixcbiAgICAgIDg5LFxuICAgICAgMTYxLFxuICAgICAgODcsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMjQsXG4gICAgICAyMjMsXG4gICAgICAyMyxcbiAgICAgIDEyMixcbiAgICAgIDI4LFxuICAgICAgNTYsXG4gICAgICAxMDEsXG4gICAgICAxMTMsXG4gICAgICA0MyxcbiAgICAgIDIzNCxcbiAgICAgIDIyLFxuICAgICAgMTEwLFxuICAgICAgNSxcbiAgICAgIDM3LFxuICAgICAgMTU3LFxuICAgICAgOTMsXG4gICAgICAxOTYsXG4gICAgICAxMjksXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjM3VDYxVDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAwMDA1MzQ4NDo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYzMjA0NzY0MzI0MDcyOjcyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkI9B8J2QkVbwnZCASfCdkJkg8J2QgEzwnZCIIPCfkqtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdUR1cFlDRU0zVTBiVUdHQjBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllEZEJmRUgvUnloL1NSS1RSMWVFOENDZlQwdzIydG8zZDA5djNDVDFCbnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQkttdFVNTjhKT28rWmhhbWlIek1iWFNTSnVPMnlkUDNHalJPd29vRlJPajRxOUd2R0lwWGJlcnZKQjRJcFNnc1F2N29xTFF1T0Q1MWxNTTRzbEh2QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWURLOG40VUF6dXk1WUt2NFd1YkdVQzVyNWJPdTRLQkdwOUdiNWZJL0JyTGVlRzA4UUpPMzNTWURKTkxUTW41QkhwNkR5eWF2RWFxRnlTendGQ1VmQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDAwMDUzNDg0OjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwOTk3MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLN0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUs3Ry5qc29uIjogIntcImtleURhdGFcIjpcInpja0pvUFFCWGZDT3lCNm0wV0tHVllKWCt1NXo0RjhpYmpmcHBRS1JtREE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTgzOTU4OTcxLFwiY3VycmVudEluZGV4XCI6MTgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiwxMF19LFwidGltZXN0YW1wXCI6XCIxNzIyNzA0MDI3MDY1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝐏A𝐑V𝐀I𝐙 𝐀L𝐈 💫",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
