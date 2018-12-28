var express=require("express"),fs=require("fs"),body_parser=require("body-parser"),seo=require("./routes/seo.js"),cel=require("./routes/cel.js"),kontakt=require("./routes/kontakt.js"),sitemap=require("./routes/sitemap.js"),usability=require("./routes/usability.js"),app=express();app.set("view engine","ejs"),app.set("views",__dirname+"/pages"),app.use(function(a,b,c){a.io=io,c()});function customHeaders(a,b,c){b.header("Connection","keep-alive"),b.header("Copyrights","B&B 2016-2018"),b.header("X-Powered-By","HADALY - alpha v0.0.1"),b.header("INFO","By request/response server connection you agree to all regulations - http://regulations.com/regulations - if not DISCONNECT IMMEDIATELY!"),b.header("P3P","Read - http://regulations.com/regulations"),c()}app.use(customHeaders),app.use(express.static(__dirname+"/public")),app.use(body_parser.urlencoded({extended:!0})),app.use("/",seo),app.use("/cel",cel),app.use("/kontakt",kontakt),app.use("/sitemap",sitemap),app.use("/usability",usability);var port=process.env.PORT||6500,ip="127.0.0.1",date=new Date,dzien=date.getDate();10>dzien&&(dzien="0"+dzien);var miesiac=date.getMonth()+1;10>miesiac&&(miesiac="0"+miesiac);var rok=date.getFullYear(),godzina=date.getHours();10>godzina&&(godzina="0"+godzina);var minuta=date.getMinutes();10>minuta&&(minuta="0"+minuta);var sekunda=date.getSeconds();10>sekunda&&(sekunda="0"+sekunda);var czas=godzina+":"+minuta+":"+sekunda+" - "+dzien+"/"+miesiac+"/"+rok;app.get("robots.txt",function(a,b,c){b.send("robots.txt"),c()}),app.get("humans.txt",function(a,b,c){b.send("humans.txt"),c()}),app.get("*",function(a,b,c){b.render("error404.ejs"),c()});var http=require("http"),options={passphrase:"lolas"},server=http.createServer(app).listen(port,function(){console.log(),console.log("====================="),console.log(czas+" --- Server is listening on port: "+port+" --- go to >>> http(S)://localhost:"+port+" <<< or to >>> http(S)://"+ip+":"+port+" <<< to access SEO application."),console.log("=====================\n")});usernames=[];var io=require("socket.io")(server);io.on("connection",function(a){function b(){io.emit("usernames",usernames)}var c=0;++c,console.log("---> Server received and maintain connection |socket.io - APP.js| - socket ID: "+a.id+" - total number of socket.io connections: "+c+"\n (|||) ---> Serwer nawi\u0105za\u0142 i utrzymuje po\u0142\u0105czenie |socket.io - APP.js| - ID z\u0142\u0105cza: "+a.id+" - ca\u0142kowita liczba po\u0142\u0105cze\u0144 socket.io : "+c+"\n"),a.on("connect_error",function(a){console.log(">>> ERROR (!): |socket.io - APP.JS| Server connection error --- "+a+"\n (|||) >>> ERROR (!): |socket.io - APP.JS| B\u0142\u0105d po\u0142\u0105czenia z serwerem --- "+a+"\n")}),a.on("connect_failed",function(){console.log("---> |socket.io - APP.JS| Connection with server could not be established (failed)! \n (|||) ---> |socket.io - APP.JS| Po\u0142\u0105czenie z serwerem nie mog\u0142o zosta\u0107 nawi\u0105zane! \n")}),a.on("error",function(a){"handshake error"===a&&console.log(">>> ERROR (!): |socket.io - APP.JS| Handshake error --- "+a+"\n (|||) >>> ERROR (!): |socket.io - APP.JS| B\u0142\u0105d zatwierdzenia/uzgodnienia (kwitowania) po\u0142\u0105czenia --- "+a+"\n"),"socket hang up"===a?console.log(">>> ERROR (!): |socket.io - APP.JS| Server socket hang up error --- "+a+"\n (|||) >>> ERROR (!): |socket.io - APP.JS| B\u0142\u0105d roz\u0142\u0105czenia z serwerem --- "+a+"\n"):console.log(">>> ERROR (!): |socket.io - APP.JS| Socket.io error --- "+a+"\n (|||) >>> ERROR (!): |socket.io - APP.JS| B\u0142\u0105d po\u0142\u0105czenia --- "+a+"\n")}),a.on("disconnect",function(d){(--c,console.log("---> |socket.io - APP.JS| Connection with server - DISCONNECTED - socket ID: "+a.id+" - total number of socket.io connections: "+c+"\n (|||) ---> |socket.io - APP.JS| Po\u0142\u0105czenie z serwerem zosta\u0142o PRZERWANE - ID z\u0142\u0105cza: "+a.id+" - ca\u0142kowita liczba po\u0142\u0105cze\u0144 socket.io: "+c+"\n"),!!a.username)&&(usernames.splice(usernames.indexOf(a.username),1),b(),"io server disconnect"==d&&console.log("---> |socket.io - APP.JS| Connection with server - DISCONNECTED [io server disconnect] - socket ID: "+a.id+" - total number of socket.io connections: "+c+"\n (|||) ---> |socket.io - APP.JS| Po\u0142\u0105czenie z serwerem zosta\u0142o PRZERWANE [io server disconnect] - ID z\u0142\u0105cza: "+a.id+" - ca\u0142kowita liczba po\u0142\u0105cze\u0144 socket.io: "+c+"\n"))}),a.on("reconnect",function(a){console.log("---> |socket.io - APP.js| Server reconnect after: "+a+" times \n (|||) ---> |socket.io - APP.js| Serwer ponownie nawi\u0105za\u0142 po\u0142\u0105czenie po: "+a+"pr\xF3bach \n")}),a.on("reconnect_attempt",function(){console.log("---> |socket.io - APP.js| Server try to reconnect: "+reconnectAttemptNumber+" times \n (|||) ---> |socket.io - APP.js| Serwer chce si\u0119 ponownie po\u0142\u0105czy\u0107 po raz: "+reconnectAttemptNumber+" \n")}),a.on("reconnect_error",function(a){console.log(">>> ERROR (!): |socket.io - APP.js| Server reconnect error --- "+a+"\n (|||) >>> ERROR (!): |socket.io - APP.js| B\u0142\u0105d ponownego po\u0142\u0105czenia z serwerem --- "+a+"\n")}),a.on("reconnect_failed",function(){console.log("---> Reconnection with server |socket.io - APP.JS| could not be established. \n (|||) ---> Ponowne po\u0142\u0105czenie z serwerem |socket.io - APP.JS| nie mog\u0142o zosta\u0107 nawi\u0105zane! \n")}),a.on("chat user name",function(c,d){-1==usernames.indexOf(c)?(d(!0),a.username=c.chat_user,usernames.push(a.username),b()):d(!1)}),a.on("new chat message",function(b){console.log("---> |CHAT| Received message from: "+a.username+" (time: "+b.chat_time+"), content: "+b.chat_text+" --- automatically broadcasted farther. \n (|||) ---> |CZAT| Otrzymano wiadomo\u015B\u0107 od: "+a.username+" (czas: "+b.chat_time+"), o tre\u015Bci: "+b.chat_text+" --- automatycznie przes\u0142ano j\u0105 dalej. \n"),io.emit("chat message broadcast",{chat_message:b,chat_username:a.username})})});