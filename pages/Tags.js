



input = document.getElementById("tag_input");
categories = document.querySelectorAll("#dynamic_tag_list li");


input.oninput = (e) =>  {


categories = document.querySelectorAll("#dynamic_tag_list li");

inputText = e.currentTarget.value.toUpperCase();





for ( category of categories ) {

    if ( category.innerText.toUpperCase().indexOf(inputText) > -1 ) {
        category.style.display = "";
    } else {
        category.style.display = "none";
    }


    }

}


cross = document.getElementById("cross_category");

function stringCompare(string1, string2) {
    if (string1.valueOf().toUpperCase().trim() == string2.valueOf().toUpperCase().trim() ) {
        return true;
    }
    return false;
}




cross.onclick = (e) => {
    categories2 = document.querySelectorAll("#dynamic_tag_list li");

    zawiera = false;
    input = document.getElementById("tag_input");
    inputText = input.value;


    for ( category of categories2) {

        if (stringCompare(inputText,category.innerText)) {
            console.log("match");
            zawiera = true;
            break;
        }
    }

    if (zawiera) {
        
    } else {

       lista =  document.getElementById("category_list");
       last = categories[categories.length - 1];
       console.log(last);
       newCategory = last.cloneNode(true);
       newCategory.id ="nowwe";
       newCategory.childNodes[2].data = inputText.valueOf();
       console.log(newCategory.childNodes[2])
       newCategory.display = "";
       lista.appendChild(newCategory);
       //here we should also emit change event on form for

    }
    



    
    

}
