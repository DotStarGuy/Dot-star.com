var inputField = document.getElementById("input");
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

help        Displays this message.
clear       Clears the terminal screen.
whois       Displays some information about me.
blog       Redirects you to .★'s blog`);
        break;
      case "clear":
        var spans = document.getElementsByTagName("span");
        inputField.value = "";
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
      default:
        var text = document.createTextNode(
          "Unknown command, type 'help' for the list of commands"
        );
    }
    // clear the input field
    inputField.value = "";

    // appending the text
    span.appendChild(text);
    var response = document.getElementById("response");
    response.appendChild(span);
    // keep the input field in view
    inputField.scrollIntoView();
  }
};
