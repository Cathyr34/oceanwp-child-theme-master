//Ce code fait la même chose que le code jQuery, mais sans dépendre de jQuery. Il attend que le document soit chargé, puis attache un gestionnaire d’événements à chaque bouton de fermeture de la popup. Lorsqu’un bouton est cliqué, la popup est cachée.

document.addEventListener('DOMContentLoaded', function(){
    var closeButtons = document.querySelectorAll('.popup-close');
    closeButtons.forEach(function(button){
        button.addEventListener('click', function(){
            var overlay = document.querySelector('.popup-overlay');
            overlay.style.display = 'none';
        });
    });
});