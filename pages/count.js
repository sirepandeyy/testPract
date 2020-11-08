var button1 = document.getElementById("clickme");
  var button2 = document.getElementById("bt2");

    count = 0;
button1.onclick = function() {
  count += 1;
  button1.innerHTML = "Click me: " + count
};
button2.onclick = function() {
  count -= 1;
    button1.innerHTML = "Click me: "+count;
};
