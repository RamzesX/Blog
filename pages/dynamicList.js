var options = {
  theme: "snow",
};

var quill = new Quill("#post_content", options);

var delta;

quill.on("text-change", function (delta, oldDelta, source) {
  var delta = quill.getContents();

  displayHeadings(delta);

});

function displayHeadings(delta) {
  headings = [];
  ops = delta.ops;

  for (var i = 0; i < ops.length; i++) {
    // for sure there cannot be header in 0 operation I;m asseting this.

    if (checkIfHeadingInAttrbutes(ops[i])) {
      if (ops[i - 1] != undefined) {
        heading = extractHeading(ops,i-1);
        if (heading.length > 0) console.log(heading)
      }
    }
  }
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
  event.preventDefault();
  // Populate hidden form on submit
  var about = document.querySelector("input[name=content]");
  about.value = JSON.stringify(quill.getContents());

  console.log("Submitted", jQuery(form).serialize(), $(form).serializeArray());

  // No back end to actually submit to!
  return true;
};