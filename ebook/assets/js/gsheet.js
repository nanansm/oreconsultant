const scriptURL = 'https://script.google.com/macros/s/AKfycbzx4D_24m7fQL23vDoyb05fcfz7dWbvo1RiFLJT4taEonTcPOvaQgeHl1LHEcKa9NspUA/exec'

const form = document.forms['form-data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //.then(response => alert("Terima Kasih" ))
  //.then(() => { window.location.reload(); })
  .catch(error => console.error('Masukan Data Kamu dulu yah!', error.message)) })


//function towa() {
  // window.location.href="https://api.whatsapp.com/send?phone=6287784183169&text=Hallo%20ORE,%20saya%20Ebook%20Gratisnya%20untuk%20bahan%20pembelajaran%20saya!"; }

   function towa() {
    var fname = document.forms['form-data']['fname'].value;
    var wnumber = document.forms['form-data']['wnumber'].value;
    var userig = document.forms['form-data']['userig'].value;

    if (fname === "" || wnumber === "" || userig === "") {
        alert("Mohon isi Nama & No Whatsapp Kamu.");
    } else {
        // Semua field telah diisi, maka arahkan pengguna ke WhatsApp
        var whatsappLink = "https://api.whatsapp.com/send?phone=6287784183169&text=Hallo%20ORE,%20saya%20Ebook%20Gratisnya%20untuk%20bahan%20pembelajaran%20saya!";
        window.location.href = whatsappLink;
    }
}
