//Ce code remplace jQuery. Il attend que le document soit chargé, puis attache un gestionnaire d’événements au bouton.

document.addEventListener('DOMContentLoaded', function(){
    var closeButtons = document.querySelectorAll('.popup-close');
    closeButtons.forEach(function(button){
        button.addEventListener('click', function(){
            var overlay = document.querySelector('.popup-overlay');
            overlay.style.display = 'none';
        });
    });
});

// Ouvre le formulaire de la  pop up.
document.getElementById("myButton").addEventListener("click", function() {
    var x = document.getElementById("monForm"); 
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});