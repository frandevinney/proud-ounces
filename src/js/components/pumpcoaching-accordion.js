var acc = document.getElementsByClassName('topic-bar');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    if(this.classList.contains('active')) {
      removeSpecificClass(this, 'active');
      return;
    }

    // Remove active from all topic bars for now
    removeAllClasses('active');
   
    // if there is an item that is active, remove that class
    addActiveClass(this, 'active');
  });
}

function removeSpecificClass($el, $class) {
  $el.classList.remove($class);
}

function removeAllClasses($class) {
  for (i = 0; i < acc.length; i++) {
    acc[i].classList.remove($class);
  }
}

function addActiveClass($el, $class) {
  $el.classList.add($class);
}


//   /*function myFunction() {
//     var copyText = document.getElementById("myInput");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
//   }

//   */