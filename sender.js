function sendEmail() {
    const first_name = document.getElementById('fname').value
    const last_name = document.getElementById('lname').value
    const message = document.getElementById('message').value
    const from_mail = document.getElementById('mail').value
    let temp = {
        from_name : first_name + " " + last_name,
        to_name : "Roi",
        message : message,
        from_email: from_mail
    }

    emailjs.send('gmail','template_9bxpfdt',temp).then(function (response){
        alert("email sent")
    })

}

const addToText= ()=> {
    let text = document.getElementById('message').value
    const imogi = document.getElementById('selection')
    let chosen = imogi.options[imogi.selectedIndex].text
    if (chosen) {
        document.getElementById('message').value = text + chosen
    }
    imogi.selectedIndex = imogi.options[0]
}


