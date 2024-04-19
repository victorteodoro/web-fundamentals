const nomeCompleto = "Victor Teodoro"
const anoCorrente = new Date().getFullYear()
const twitter = "@victorteodoro"
const facebook = "victor.teodoro"
const instagram = "@victorteodoro__"
const linkedin = "victor_teodoro"
const sexo = "Masculino"
const localizacao = "Pólo Feira de Santanba"

const footer = document.getElementById('footer')
footer.innerHTML += "<p>Nome: " + nomeCompleto + "</p>"
footer.innerHTML += "<p>Ano: " + anoCorrente + "</p>"
footer.innerHTML += "<p>Twitter: " + twitter + "</p>"
footer.innerHTML += "<p>Facebook: " + facebook + "</p>"
footer.innerHTML += "<p>Instagram: " + instagram + "</p>"
footer.innerHTML += "<p>LinkedIn: " + linkedin + "</p>"
footer.innerHTML += "<p>Sexo: " + sexo + "</p>"
footer.innerHTML += "<p>Localização: " + localizacao + "</p>"