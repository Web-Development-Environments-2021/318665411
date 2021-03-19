function sendEmail() {
    document.getElementById('msg').value= ""
    document.getElementById('mail').value= ""
    alert("Email sent successfully")
}

function addToText(){
        let text = document.getElementById('msg').value
        const imogi = document.getElementById('selection')
        let chosen = imogi.options[imogi.selectedIndex].value
        if(chosen){
            document.getElementById('msg').value = text + chosen
        }
        imogi.value=imogi.options[0]

}
