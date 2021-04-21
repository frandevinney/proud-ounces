var acc = document.getElementsByClassName('topic-bar');
var copyToClipboardBtn = document.getElementById('employer-msg');
var copyText = document.getElementById("clipboardInput");
var copiedMsg = document.getElementById('copied-msg');
var i;

copyToClipboardBtn.addEventListener('click', copyToClipboard, false);

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

function triggerCopyMsgReveal() {
  copiedMsg.classList.add('copied-success--reveal');
  setTimeout(removeCopyMsg, 2500 );
}

function removeCopyMsg() {
  copiedMsg.classList.remove('copied-success--reveal');
}


function copyToClipboard() {
  triggerCopyMsgReveal();
  const el = document.createElement('textarea');
  el.value = copyText.value;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
