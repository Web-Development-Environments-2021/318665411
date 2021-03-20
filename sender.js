function sendEmail() {
    document.getElementById('msg').value= ""
    document.getElementById('mail').value= ""
    alert("Email sent successfully")
}

const addToText= ()=>{
        let text = document.getElementById('msg').value
        const imogi = document.getElementById('selection')
        let chosen = imogi.options[imogi.selectedIndex].value
        document.getElementById('msg').value = text + chosen

}
