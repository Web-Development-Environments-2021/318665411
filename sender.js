const addToText= ()=> {
    let text = document.getElementById('message').value
    const imogi = document.getElementById('selection')
    let chosen = imogi.options[imogi.selectedIndex].text
    if (chosen !== imogi.options[0].text) {
        document.getElementById('message').value = text + chosen
    }
    imogi.selectedIndex = imogi.options[0]
}


