const { hash } = window.location

const message = (atob(hash.replace('#', ''))) //replaces hash with '' then decodes message back

if (message) {
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#message-show').classList.remove('hide')

    document.querySelector('h1').innerHTML = message
}

document.querySelector('form').addEventListener('submit', e =>{
    e.preventDefault() //prevents the default of browser submitting form and refreshing

    document.querySelector('#message-form').classList.add('hide'); //adds class hide to 1st form
    document.querySelector('#link-form').classList.remove('hide') //removes class hide to 2nd form

    const userMessage = document.querySelector('#message-input').value //grabbing users message from input
    const encrypted = btoa(userMessage) //btoa() encodes the user value with base64 encoding

    const linkInput = document.querySelector('#link-input') //selecting 2nd input
    linkInput.value = `${window.location}#${encrypted}` //displays the encoded message LINK in input
    linkInput.select() //selects the url link input

})
