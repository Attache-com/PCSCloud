function validateForm() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    var tel = document.getElementById('tel').value;
    var emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    var telRegex = /^[0-9]{10}$/;

    if (nom.trim() === "") {
        showMessage('Veuillez entrer votre nom.');
        return false;
    }
    
    if (prenom.trim() === "") {
        showMessage('Veuillez entrer votre prénom.');
        return false;
    }

    if (!emailRegex.test(email)) {
        showMessage('Veuillez entrer une adresse Gmail valide.');
        return false;
    }

    if (email !== confirmEmail) {
        showMessage('Les adresses Gmail ne correspondent pas.');
        return false;
    }

    if (!telRegex.test(tel)) {
        showMessage('Veuillez entrer un numéro de téléphone valide (10 chiffres).');
        return false;
    }

    // Validation réussie
    showMessage('Inscription réussie !');
    return true;
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}