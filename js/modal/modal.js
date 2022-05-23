function createModal(container) {
    const modalSelector = container + ' .modal';
    const buttonSelector = container + ' .btn';
    const closeSelector = container + ' .close';
    // Get the modal
    var modal = document.querySelector(modalSelector);
    modal.setAttribute('aria-hidden', 'true');

    // Get the button that opens the modal
    var btns = document.querySelectorAll(buttonSelector);

    // Get the <span> element that closes the modal
    var closeButton = document.querySelector(closeSelector);
    closeButton.setAttribute('aria-hidden', 'true');

    // When the user clicks on the button, open the modal
    btns.forEach((btn, idx) => {
        btn.id = `${container}-open-modal-${idx}`;
        console.log(btn.id);
        btn.onclick = ev => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            modal.querySelector('.close').setAttribute('data-button-id', ev.currentTarget.id);
            modal.setAttribute('aria-hidden', 'false');
            modal.querySelector('.close').focus();
        }
    });

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function (ev) {
        console.log(ev.currentTarget);
        ev.currentTarget.setAttribute('aria-hidden', 'true');
        modal.classList.remove('show');
        modal.classList.add('hide');
        modal.setAttribute('aria-hidden', 'true');
        const sourceButtonId = ev.currentTarget.dataset.buttonId;
        document.getElementById(sourceButtonId).focus();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};

createModal('#speaking');
createModal('.guiding-principles');
createModal('.services');
createModal('.expertise');
createModal('#bio');