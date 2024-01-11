// Total 5 links pink,blue,yellow,orange,green
const links = document.querySelectorAll(".alternate-style"),
  totalLinks = links.length;

//function to remove/set disabled color by the user select
function setActiveStyle(color) {
  for (let i = 0; i < totalLinks; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}

//function to change the language radio button
const bodyLanguage = document.querySelectorAll(".body-language"),
  totalLanguage = bodyLanguage.length;

for (let i = 0; i < totalLanguage; i++) {
  bodyLanguage[i].addEventListener("change", function() {
    if (this.value === "heb") {
      window.open("indexHEB.html","_self");
        //bodyLanguage[i].removeAttribute("checked");
    }else{
      window.open("index.html","_self");
    }
  })
}

// Body Skin Total 2 - light and dark
const bodySkin = document.querySelectorAll(".body-skin"),
  totalBodySkin = bodySkin.length;

//if the user changed the color style (dark/light) change the body
for (let i = 0; i < totalBodySkin; i++) {
  bodySkin[i].addEventListener("change", function() {
    if (this.value === "dark") {
      document.body.className = "dark";
    } else {
      document.body.className = "";
    }
  })
}

// open and close the style switcher
document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
})