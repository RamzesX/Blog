
numerki = document.getElementById('numerki');


numerki.addEventListener('click', event => {

    numerek = event.target;
    tag = event.target.tagName;

 

    if (tag == "SPAN") {
        poprzedni = numerki.querySelector("span.klikniety");
        poprzedni.className = "";
        numerek.className = "klikniety";
        
    }



})