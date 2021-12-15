var i = 0;
var txt = 'My name is Jan Yuri Cabaluna. A student of Adamson Universty, studying the course Bachelor of Science in Information Technology';

var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("facts").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}
