

var options = {
  theme: 'snow'
}

var quill = new Quill('#post_content', options);
  quill.setContents([ 
    { insert: 'Hello ' },
    { insert: 'Wowqqqqqqqqqwwds!', attributes: { bold: true } },
    { insert: '\n' },
    { insert: '\n' },
    { insert: '\n' },
    { insert: '\n' },
    { insert: '\n' },
    { insert: '\n' },
    { insert: '\n' },
    { insert: '\n' },
    { insert: 'dsfsdfsf' }
    
  ]);



     var form = document.querySelector('#conatiner');
    form.onsubmit = function() {
        event.preventDefault();
  // Populate hidden form on submit
  var about = document.querySelector('input[name=content]');
  about.value = JSON.stringify(quill.getContents());
  
  console.log("Submitted", jQuery(form).serialize(), $(form).serializeArray());
  
  // No back end to actually submit to!
  return true;
}; 
















  