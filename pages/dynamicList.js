
lista = document.getElementById("first_level_list");

lista.addEventListener('click', event => {
  text = event.target.innerText;
  headings = document.querySelectorAll(".rozdzial");
  for ( heading of headings) {
    if (heading.innerText == text ) {
      console.log(heading);
      const yOffset = -250; 
      const y = heading.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
      //heading.scrollIntoView();
    }
  } 
})

var options = {
  theme: "snow",
};

var quill = new Quill("#post_content", options);



var delta;

var Heading = Quill.import('formats/header');
Heading.className = "rozdzial";
Quill.register(Heading, true);

quill.on("text-change", function (delta, oldDelta, source) {
  var delta = quill.getContents();



  var headings = getHeadings(delta);

  


  var lista = document.getElementById("first_level_list");
  lista.innerHTML="";

  for (heading of headings) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(heading["heading"]));
    lista.appendChild(li);
  }

  
  

});




function getHeadings(delta) {
  headings = [];
  ops = delta.ops;

  for (var i = 0; i < ops.length; i++) {
    // for sure there cannot be header in 0 operation I;m asseting this.

    if (checkIfHeadingInAttrbutes(ops[i])) {
      if (ops[i - 1] != undefined) {
        heading = extractHeading(ops,i-1);
        if (heading.length > 0) {
          var data = {
            heading: heading,
            index: i-1 }
          
          headings.push(data);
        }
      }
    }
  }
  return headings;
}

function checkIfHeadingInAttrbutes(operation) {
  if (operation.attributes !== undefined) {
    if (operation.attributes["header"] !== undefined) return true;
  }
  return false;
}

function extractHeading(operations, index) {
  var heading = '';
  var i = operations[index].insert.lastIndexOf('\n');
  heading = operations[index].insert.substring(i+1);
  return heading;
}

var form = document.querySelector("#conatiner");
form.onsubmit = function () {

  return true;
};



