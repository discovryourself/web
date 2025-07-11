document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;

  fetch("https://script.google.com/macros/s/AKfycbymXdjURI_v571atAjwboQb2nd3rehCByADHRDFdUFJp7RoK_jeWVblmcmjo8kI0Lw1/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `nombre=${encodeURIComponent(nombre)}&mensaje=${encodeURIComponent(mensaje)}`
  });

  document.getElementById("respuesta").classList.remove("respuesta-oculta");
  document.getElementById("formulario").reset();
});
