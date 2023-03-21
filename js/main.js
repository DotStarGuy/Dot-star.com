var inputField = document.getElementById("input");
var response = document.getElementById("response");
var a = document.createElement("a");
inputField.focus();
inputField.select();

setInterval(function () {
  if (document.activeElement !== inputField) {
    inputField.focus();
    inputField.select();
  }
}, 100);
inputField.onkeydown = function (event) {
  if (event.keyCode == 13) {
    var userInput = document.getElementById("input").value.toLowerCase();
    // create span && send the command that was used
    var span = document.createElement("span");
    var br = document.createElement("br");
    var text = document.createTextNode("webuser@.★:~$ " + userInput);
    span.appendChild(text);
    span.appendChild(br);
    // commands
    switch (userInput) {
      case "help":
        var text = document.createTextNode(`
Available commands:

help          Displays this message.                                  discord         Links my Discord server.
clear         Clears the terminal screen.                           reload          Reloads the page.
whois        Displays some information about me.           pricing         General information about how much, and how i charge.
blog          Redirects you to my blog.                              exit              Closes the current tab.`);
        break;
      case "clear":
        var spans = document.getElementsByTagName("span");
        var links = document.getElementsByTagName("a");
        inputField.value = "";
        while (links.length > 0) {
          links[0].parentNode.removeChild(links[0]);
        }
        while (spans.length > -1) {
          spans[0].parentNode.removeChild(spans[0]);
        }
        break;
      case "whois":
        var text = document.createTextNode(`
Hi, thank you for visiting my site. My name is .★ (Dot Star) and I'm a 19 year old software development student based in the Netherlands.
I specialise in web development but I can also work with Java, Python and Javascript.
I also have some experience with Discord.js and Unity.
                
As for my hobbies, I really enjoy coding and working out, I also play League of legends… like a lot(I seriously need to stop).
I used to play keyboard but quit because it started to become very frustrating.
        
I enjoy the following music genres: Indie, LoFi, Breakcore, classical and also hardstyle from time to time.
Sadly I don’t create any music of my own at this moment but I would love to try sometime in the future.
        
And well, that's about all I can share because I like my privacy and staying anonymous as much as possible.
Thank you for taking the time to read the little about me and if you’re interested in hiring me you can message me on Discord .★#0916.
`);
        break;
      case "blog":
        var text = document.createTextNode(`
Heh, so about the blog thing...
It isn't done yet.
It's something I will create in the future... maybe... hopefully (probably not).`);
        break;
      case "exit":
        window.close();
        break;
      case "discord":
        var div = document.createElement("div");
        div.setAttribute("class", "discord");
        // discord
        a.setAttribute("href", "https://discord.gg/PW7t6NBs46");
        a.textContent = `
Here's a link to my Discord servers.

⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢹⣿⣿⣿
⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿
⣿⣿⣿⡇⠄⠄⠄⢠⣴⣾⣵⣶⣶⣾⣿⣦⡄⠄⠄⠄⢸⣿⣿⣿
⣿⣿⣿⡇⠄⠄⢀⣾⣿⣿⢿⣿⣿⣿⣿⣿⣿⡄⠄⠄⢸⣿⣿⣿
⣿⣿⣿⡇⠄⠄⢸⣿⣿⣧⣀⣼⣿⣄⣠⣿⣿⣿⠄⠄⢸⣿⣿⣿
⣿⣿⣿⡇⠄⠄⠘⠻⢷⡯⠛⠛⠛⠛⢫⣿⠟⠛⠄⠄⢸⣿⣿⣿
⣿⣿⣿⡇⠄  Add me on diccord! ⢸⣿⣿⣿
⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣆⣸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`;

        div.appendChild(a);
        response.appendChild(div);
        break;
      case "reload":
        location.reload();
        break;
      case "pricing":
        var text = document.createTextNode(`
Okay, let's talk money.
The price of a script/program really depends on the size of the project.
Small size script €20
Medium size script €50
Big scripts €70
Those prices are an estimate.
I would need to know what you want exactly in order to give you an accurate price.
For full either GUI or CLI programs contact me on Discord and we can talk about it.

I do all transactions through paypal for alternative payment methods contact me on Discord.`);
        break;
      case "exit":
        window.close();
        break;
      default:
        var text = document.createTextNode(
          "Unknown command, type 'help' for the list of commands"
        );
    }
    // clear the input field
    inputField.value = "";

    // appending the text
    span.appendChild(text);
    response.appendChild(span);
    // keep the input field in view
    inputField.scrollIntoView();
  }
};
