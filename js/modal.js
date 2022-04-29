function createModal(container) {
    const modalSelector = container + ' .modal';
    const buttonSelector = container + ' .btn';
    const closeSelector = container + ' .close';
    // Get the modal
    var modal = document.querySelector(modalSelector);

    // Get the button that opens the modal
    var btns = document.querySelectorAll(buttonSelector);

    // Get the <span> element that closes the modal
    var span = document.querySelector(closeSelector);

    // When the user clicks on the button, open the modal
    btns.forEach(btn => {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

createModal('#speaking');
createModal('.guiding-principles');
createModal('.services');
createModal('.expertise');