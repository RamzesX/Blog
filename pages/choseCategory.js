lista = document.getElementById("dynamic_tag_list");
listaTagow = document.getElementById("chosen_tags");

function tagAlredyOnlist(string) {
  Tagi = document.querySelectorAll(".picked_category span");
  tagText = "";
  zawiera = false;
  string = string.valueOf().toUpperCase().trim();

  for (tag of Tagi) {
    tagText = tag.innerText.valueOf().toUpperCase().trim();
  
    if (tagText == string) {
      return true;
    }
  }


  return false;
}

function addNewTag(string) {
  nowyTag = listaTagow.lastElementChild.cloneNode(true);
  listaTagow.append("\u00A0");
  listaTagow.appendChild(nowyTag);
  nowyTag = nowyTag.querySelector("span");
  nowyTag.innerText = string;
}

lista.addEventListener("click", (event) => {
  nowyTag = event.target.parentNode.innerText.valueOf().trim();

  if (event.target.tagName == "IMG" && !tagAlredyOnlist(nowyTag)) {
    addNewTag(nowyTag);
  }
});


listaTagow.addEventListener("click", (event) => {
root = event.target.parentNode;
console.log("cos nie dobrze")
Tagi = document.querySelectorAll(".picked_category span");
if (Tagi.length > 1 && event.target.tagName == "IMG") {
  root.remove();
}
});