const moment = require("moment");
moment.locale("tr");
require("moment-duration-format");
const db = require("quick.db");
const Discord = require("discord.js");
const database = require("./database.json");
const client = new Discord.Client({ disableEveryone: true });
client.login(process.env.token);
const fetch = require("node-fetch");
const fs = require("fs");
require("express")().listen(1343);

const express = require("express");
const app = express(); 
const http = require("http");
app.get("/", (request, response) => {
  console.log("Pinglenmedi.");
  response.sendStatus(200);
}); 
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("ready", () => {
  console.log("Bot Aktif");
  let playing = client.voice.connections.size;

  client.user.setPresence({
    activity: {
      name: ".uptime & .link-ekle",
      type: "idle",
      url: "URL"
          
    }
  });
});

setInterval(() => {
  var links = db.get("linkleri");
  if (!links) return;
  var linkA = links.map(c => c.url);
  linkA.forEach(link => {
    try {
      fetch(link);
    } catch (e) {
      console.log("" + e);
    }
  });
  console.log("Pinglendi.");
}, 60000);

client.on("ready", () => {
  if (!Array.isArray(db.get("linkleri"))) {
    db.set("linkleri", []);
  }
});



client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == ".link-ekle") {
    var link = spl[1];
    fetch(link)
      .then(() => {
        if (
          db
            .get("linkleri")
            .map(Revenge => Revenge.url)
            .includes(link)
        )
          return message.channel.send(
            new Discord.MessageEmbed()
            .setFooter(
              `© ${client.user.username} 2021-2022`,
              client.user.displayAvatarURL({ dynamic: true })
            )
              .setColor("#ff0000")
              .setDescription(
                "** <a:753667761284317234:844844099186065429>  Bu Link Zaten 7/24 Aktif Tutuluyor !!**"
              )
          );
        message.channel.send(
          new Discord.MessageEmbed()
            .setFooter(
              `© ${client.user.username} 2021-2022`,
              client.user.displayAvatarURL({ dynamic: true })
            )
            .setColor("#1fff00")
            .setDescription(
              "** <a:mavionay:845417239314300968> Artık Projeniz 7/24 Aktif Tutuluyor.**"
            )
        );
        db.push("linkleri", { url: link, owner: message.author.id });
      db.push(`Projesi_${message.author.id}`, link);
      })
      .catch(e => {
        return message.channel.send(
          new Discord.MessageEmbed()
            .setFooter(
              `© ${client.user.username} 2021-2022`,
              client.user.displayAvatarURL({ dynamic: true })
            )
            .setColor("#ff0000")
            .setDescription(
              "** <a:753667761284317234:844844099186065429> Lütfen Resimde Gösterilen Gibi Bir Url Giriniz.**"
            )
            .setImage("https://cdn.discordapp.com/attachments/808696295094878208/810543929262342154/unknown.png")
        );
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == ".show") {
    var link = spl[1];
    message.channel.send(
      new Discord.MessageEmbed()
        .setFooter(
          `© ${client.user.username} 2021-2022`,
          client.user.displayAvatarURL({ dynamic: true })
        )
        .setColor("#00c7ff")
        .setDescription(
          `  <a:ucgen:845416399157198908> **${
            db.get("linkleri").length
          }** <-- Tane Proje 7/24 Aktif Tutuyorum! `
        )
    );
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == ".uptime") {
    var link = spl[1];
    const help = new Discord.MessageEmbed()
      .setFooter(
        `© ${client.user.username} 2021-2022`,
        client.user.displayAvatarURL({ dynamic: true })
      )
      .setColor("#00c7ff")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/841269205378662401/846006545887920148/sdbh.gif"
      )
      .setDescription(
`**  <a:ay:845417004658982942> *✧ L E X B E R Uptime | Yardım Komuduna Hoşgeldiniz*

  <a:ay:845417004658982942>   **__.link-ekle (URL)__**   *Yazarak Botunuzu Uptime Edebilirsiniz*

 <a:ay:845417004658982942>   **__.destek__**   *Bota Destek Vermek İçin Bazı Linkler Eklendi*

 <a:ay:845417004658982942>   **__.show__**   *Yazarak Sistemimizde Ne Kadar Uptime Oldunu Görürsünüz.* 

 <a:ay:845417004658982942>   **__.i__**   *Botun İstatistiklerini Görürsünüz.*

 <a:ay:845417004658982942>   **__.erişim-kontrol__**   *Bota Erişiminizi Kontrol Edersiniz.*

 <a:ay:845417004658982942>   **__.linkler__**   *Uptime Yaptığın linkleri Gösterir .*
        
 <a:ay:845417004658982942>** *Linkleriniz Güvenle Saklanıyor Merak Etmeyin.*`

      )
      
      .setImage(
      ""
      );
    message.channel.send(help);
  }
});
////sikicem ya
client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" "); // amm bj sikim dogru gitsin
  if (spl[0] == "éananısikerken") {
    var link = spl[1];
    message.channel.send(
      new Discord.MessageEmbed()
        .setFooter(
          `© ${client.user.username} 2021`,
          client.user.displayAvatarURL({ dynamic: true })
        )
        .setColor("#11657d")
        .setDescription(
          `» **✧ <a:leri:815954736913186826> Botu eklemek için ** **[Sunucuya Özel Bot]()**`
        )
    );
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == ".i") {
    let asdiscord = new Discord.MessageEmbed()
      .setAuthor(`  ${client.user.username} | İstatistik Komutu`)
      .setTitle(`Discord Sunucumuz`)
      .setURL(`https://discord.gg/9Y2UfAR98p`)
      .addField(
        `<a:developer:845417119259951156>  Çalışma Süresi:`,
        `${moment
          .duration(client.uptime)
          .format("D [gün], H [saat], m [dakika], s [saniye]")}`
      )
      .addField(`<a:developer:845417119259951156>  Ping:`, `${client.ws.ping} ms`, true)
      .addField(`<a:developer:845417119259951156>  Sunucular:`, `${client.guilds.cache.array().length}`, true)
      .addField(
        `<a:developer:845417119259951156>  Kullanıcılar:`,
        `${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}`,
        true
      )
      .addField(`<a:developer:845417119259951156>  Kanallar:`, `${client.channels.cache.array().length}`, true)
      .setFooter(
        `© ${client.user.username} 2021`,
        client.user.displayAvatarURL({ dynamic: true })
      )
      .setColor("#11657d");
    message.channel.send(asdiscord);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == ".erişim-kontrol") {
    var link = spl[1];
    message.channel.send(
      new Discord.MessageEmbed()
        .setFooter(
          `© ${client.user.username} 2021-2022`,
          client.user.displayAvatarURL({ dynamic: true })
        )
        .setColor("#11657d")
        .setDescription(
          `** <a:mavionay:845417239314300968> Bota erişiminiz aktif! Botumuzda Database Bulunmamaktadır Herhangi Bir Çalınma Durumu Olmaz Botlarınızı Güvenle Uptime Edebilirsiniz !**`
        )
    );
  }
});
client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == ".destek") {
    var link = spl[1];
    message.channel.send(
      new Discord.MessageEmbed()
        .setFooter(
          `© ${client.user.username} 2021`,
          client.user.displayAvatarURL({ dynamic: true })
        )
        .setColor("#11657d")
        .setDescription(
`** <a:alev:845416636147433502> Bana Destek Vermek İstersen Bu Şekilde Verebilirsin.** 

** <a:alev:845416636147433502> #✧・oy-vote Kanalına [!oy & /lik Yazabilirsin]()**

** <a:alev:845416636147433502> Resmi Discord Sunucumuza Gelmeyi Unutmayın [Discord Sunucumuz!](https://discord.gg/9Y2UfAR98p)**`)
    );
  }
});
client.on("message", async message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == ".linkler") {
    const Linkleri = db.fetch(`Projesi_${message.author.id}`);
    if (
      !db
        .get("linkleri")
        .map(Revenge => Revenge.owner)
        .includes(message.author.id)
    )
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#20aaba")
          .setDescription(
            `** <a:tac:845417186176925737> Hiç Link Eklemedinden Dolayı Sistemde Gözükmüyor \`.link-add (URL)\`Yazarak Link Ekleyebilirsin .**`
          )
                .setFooter(
          `© ${client.user.username} 2021`,
          client.user.displayAvatarURL({ dynamic: true })
        )
      );
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#20aaba")
        .setDescription(
          `** <a:tac:845417186176925737> Uptime Etmekte Olduğun Linkler Direkt Mesaj Kutun Gönderildi, Mesajlarını Kontorol Et.**`
        )
                    .setFooter(
          `© ${client.user.username} 2021-2022`,
          client.user.displayAvatarURL({ dynamic: true })
        )
    );
    message.author.send(
      new Discord.MessageEmbed()
        .setColor("#20aaba")
        .setDescription(`** <a:tac:845417186176925737> Normal Linklerin:** \n` + Linkleri.join("\n") + ``)// linkelri olmıcak linkler olcak
              .setFooter(
          `© ${client.user.username} 2021`,
          client.user.displayAvatarURL({ dynamic: true })
        )
    );
  }
});  

client.on("ready", () => {
  client.channels.get("844868763060928522").join();
})

client.on("ready", () => {
  client.channels.cache.get("844868763060928522").join();
})