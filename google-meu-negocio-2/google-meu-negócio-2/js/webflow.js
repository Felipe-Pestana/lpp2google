document.getElementById("email-forms").addEventListener("submit", function(event){
  event.preventDefault();
  sendEmail();
});

function sendEmail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
  };

  const serviceId = "service_y1tqny9";
  const templateId = "template_rqacods";

  emailjs.send(serviceId, templateId, params)
    .then((res) => {
      alert("Foi enviado com sucesso!");
    })
    .catch((err) => console.log(err));
}