let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #cb7ca2;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #cb7ca2;">Estoy terminando el bachillerato</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
