document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const messageContainer = document.getElementById('message-container');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const name = signupForm.querySelector('input[name="name"]').value.trim();
        const email = signupForm.querySelector('input[name="email"]').value.trim();
        const password = signupForm.querySelector('input[name="password"]').value.trim();

        // Valider les champs (exemple simple avec nom, email et mot de passe non vides)
        if (name === '' || email === '' || password === '') {
            displayMessage('Veuillez remplir tous les champs requis.', 'error');
            return;
        }

        // Simuler l'enregistrement du formulaire (ici, juste pour l'exemple)
        setTimeout(function() {
            displayMessage('Compte créé avec succès!', 'success');
            signupForm.reset();
        }, 1000);
    });

    function displayMessage(messageText, type) {
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        messageElement.classList.add('message', type, 'show');
        messageContainer.appendChild(messageElement);

        // Supprimer le message après un court délai
        setTimeout(function() {
            messageElement.remove();
        }, 3000); // Supprimer après 3 secondes (ajustez selon vos besoins)
    }
 });
  