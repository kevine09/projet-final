
document.addEventListener("DOMContentLoaded", function() {
    console.log("Inscription script loaded");
    // Sélectionner le formulaire
    const form = document.querySelector("form");
    
    // Sélectionner les champs de formulaire par leur ID
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const phoneInput = document.getElementById("phone");

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


        // Validation de l'Email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        // Utiliser une expression régulière pour vérifier le format de l'email
        if (!emailPattern.test(emailInput.value.trim())) {
            // Si le format de l'email est incorrect, marquer le formulaire comme invalide
            valid = false;
            // Ajouter un message d'erreur
            messages.push("L'email n'est pas valide.");
        }

        
        // Validation du Mot de passe
        // Vérifier que le mot de passe a au moins 6 caractères
        if (passwordInput.value.length < 6) {
            // Si le mot de passe est trop court, marquer le formulaire comme invalide
            valid = false;
            // Ajouter un message d'erreur
            messages.push("Le mot de passe doit comporter au moins 6 caractères.");
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


        // Si le formulaire n'est pas valide, empêcher la soumission et afficher les messages d'erreur
        if (!valid) {
            // Empêcher l'envoi par défaut du formulaire
            event.preventDefault();
            // Afficher les messages d'erreur dans une alerte
            alert(messages.join("\n"));
        }
    });
});

        // Supprimer le message après un court délai
        setTimeout(function() {
            messageElement.remove();
        }, 3000); // Supprimer après 3 secondes (ajustez selon vos besoins)
    }
 });
  

