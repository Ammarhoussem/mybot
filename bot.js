const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 client.user.setGame(`on 1 servers | .help   .`,'https://www.twitch.tv/v5bz');	
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', message => {
     if (message.content === ".bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**اسم السيرفر**", message.guild.name)
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
    }
});


client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا ولله !');
  }
});


client.on('message', msg => {
  if (msg.content === 'اريد رتبة') {
    msg.reply('تفاعل حبي!');
  }
});


client.on('message', msg => {
  if (msg.content === 'حسام') {
    msg.reply('حسام حسام ردد للمنور');
  }
});


client.on('message', msg => {
  if (msg.content === '.bothelp') {
    msg.reply('ادخل سيرفر البوت للمساعدة');
  }
});


client.on('message', message =>{
    if(message.content == ".roles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});



client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** :angry: !لا لا لا لا :angry: ! **`)
    }
}
});



client.on('message', message => {
    if (message.content.startsWith(".invites")) {
    message.guild.fetchInvites()
    .then(invites => message.channel.send(`***انت جبت***   ***${invites.find(invite => invite.inviter.id === message.author.id).uses}***   ***اعضاء  ل السيرفر***`))



     
    }
});


    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('welcome')
    if (!channel) return;
    channel.send({embed : embed});
    }) 


client.on("message", (message) => {
    if (message.content.startsWith(".ban ")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " لقد تم طرده بنجاح :wave: ");
        }).catch(() => {
            message.channel.send(":x: هناك خطاء حاول مره أخرى:x: ");
        });
    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === ".help") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`


:beginner:***اوامر عامة***:white_check_mark: 
========================================
***:white_check_mark: الاوامر الشغالة***
***:x: الاوامر المو شغالة***
========================================

-***clear : مسح جميع الرسائل  :white_check_mark:***  ***.clear***
-































           :video_game: :video_game: 
:soccer:***اوامر العاب***:volleyball: 
           :video_game: :video_game: 























===========================
- مبرمج البوت : HoussemPRO -
- سيرفر البوت xLite Host   -
===========================
`)
.setColor('RANDOM')
message.author.sendEmbed(embed)
}
});

client.on('message', msg => {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith ('.help')) {
    msg.reply('**:runner: تم ارسال الاوامر في الخاص**');
  }
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('.bcall')){
 if(!message.author.id === '431563047815872518') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



 client.on('message' , message => {
     if (message.content === ".servers") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});



client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "رابط البوت") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`
***


----
رابط البوت هو
----
**

`)
.setColor('RANDOM')
message.author.sendEmbed(embed)
}
});



client.on("message", message => {
    var prefix = ".";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(".clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم  الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "! Rasta#9764"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**SERVER NAME**")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });



client.on('message', message => {
var prefix = ".";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] =='.bc') {
    if (!args[1]) {
message.channel.send("**.bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});


client.on('guildMemberAdd', member => {
    var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';

var back = new Image;
back.src='https://a.top4top.net/p_853qkvtn1.png][img]https://a.top4top.net/s_853qkvtn1.png[/img][/url]';

    console.log(back);
     ctx.drawImage(back, 0,0, canvas.width,canvas.height);

ctx.fillText(member.user.username,90, 50);
ctx.fillText('Welcome To Our Server', 50, 110);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

member.guild.channels.get("438324378032406532").sendFile(canvas.toBuffer());
}).on('ready', () => {
    console.log(`Im ready ${client.user.username}`)
});



client.login('token');
