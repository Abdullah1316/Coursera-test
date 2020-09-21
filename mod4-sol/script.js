(function () {
var names = ["Muhammad", "Arshman", "Jen", "Jason", "Ayesha", "Frank", "Salwa", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}
})();