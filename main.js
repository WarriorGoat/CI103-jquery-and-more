let clickHere = $("<div id='click' >Click Here!!</div>");
let textInput = $("#textInput");
let body = $("body");
let newUl = $("<ul></ul>");
body.append(clickHere);
body.append(newUl);

clickHere.on ("click", () => {
    newUl.append(`<li> ${textInput.val()}</li>`);
    textInput.val("");
})

