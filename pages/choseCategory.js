lista = document.getElementById("dynamic_tag_list");
listaTagow = document.getElementById("chosen_tags");

function tagAlredyOnlist(string) {
  Tagi = document.querySelectorAll(".picked_category span");
  tagText = "";
  zawiera = false;
  string = string.valueOf().toUpperCase().trim();

  for (tag of Tagi) {
    tagText = tag.innerText.valueOf().toUpperCase().trim();
    console.log(tagText);
    console.log(string);
    if (tagText == string) {
      console.log("zawiera");
      return true;
    }
  }

  console.log("nie zawiera");
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
