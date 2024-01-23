//Ce code remplace jQuery. Il attend que le document soit chargé, puis attache un gestionnaire d’événements au bouton.

document.addEventListener('DOMContentLoaded', function(){
    const closeButtons = document.querySelectorAll('.popup-close');
    closeButtons.forEach(function(button){
        button.addEventListener('click', function(){
            var overlay = document.querySelector('.popup-overlay');
            overlay.style.display = 'none';
        });
    });
});

    const Formulaire = document.getElementById("monForm");
// Ouvre le formulaire de la  pop up.
document.getElementById("myButton").addEventListener("click", function() {
     
    if (Formulaire.style.display === "none") {
        Formulaire.style.display = "block";
    } else {
        Formulaire.style.display = "none";
    }
});