document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const messageContainer = document.getElementById('message-container');

    // Ajouter un événement de soumission au formulaire
    contactForm.addEventListener('submit', function(event) {
        // Empêcher l'envoi par défaut du formulaire
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        // Valider les champs (exemple simple avec nom et email non vides)
        if (name === '' || email === '') {
            displayMessage('Veuillez remplir tous les champs.', 'error');
            return;
        }

        // Simuler l'envoi du formulaire (ici, juste pour l'exemple)
        setTimeout(function() {
            displayMessage('Message envoyé avec succès!', 'success');
            contactForm.reset();
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
