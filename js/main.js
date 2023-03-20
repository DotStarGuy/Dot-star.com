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
    var text = document.createTextNode(userInput);
    span.appendChild(text);
    // commands
    switch (userInput) {
      case "help":
        var text = document.createTextNode(`
Available commands:

help        Displays this message
clear       Clears the terminal screen`);
        break;
      case "clear":
        var spans = document.getElementsByTagName("span");
        inputField.value = "";
        while (spans.length > -1) {
          spans[0].parentNode.removeChild(spans[0]);
        }
        break;
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        // Expected output: "Mangoes and papayas are $2.79 a pound."
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
