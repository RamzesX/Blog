var options = {
  theme: "snow",
};

var quill = new Quill("#post_content", options);
quill.setContents([
  { insert: "Hello " },
  { insert: "Wowqqqqqqqqqwwds!\n", attributes: { bold: true } },
  { insert: "\n" },
  { insert: "\n" },
  { insert: "\n" },
  { insert: "\n" },
  { insert: "\n" },
  { insert: "\n" },
  { insert: "\n" },
  { insert: "\n" },
  { insert: "dsfsdfsf" },
]);

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
      console.log(ops[i - 1].insert);
    }
  }
}

function checkIfHeadingInAttrbutes(operation) {
  if (operation.attributes !== undefined) {
    if (operation.attributes["header"] !== undefined) return true;
  }
  return false;
}

function extractHeading(operation) {
  line = operation.insert;
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
