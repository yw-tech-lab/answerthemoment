function createModal(container) {
    const id = container.replace('#', '').replace('.', '');
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
    
    const attachEventHandlers = () => {
        // When the user clicks on the button, open the modal
        btns.forEach((btn, idx) => {
            btn.id = `${id}-open-modal-${idx}`;
            // console.log(btn.id);
            btn.onclick = open;
        });
    };

    const disableTabbing = () => {
        modal.querySelectorAll('a, button').forEach(elem => {
            elem.setAttribute('tabindex', '-1');
        })
    };

    const enableTabbing = () => {
        modal.querySelectorAll('a, button').forEach(elem => {
            elem.setAttribute('tabindex', '1');
        })
    };

    const open = ev => {
        const closeButton = modal.querySelector('.close');
        modal.classList.add('show');
        modal.classList.remove('hide');
        modal.setAttribute('aria-hidden', 'false');
        modal.querySelector('.close').focus();

        closeButton.setAttribute('data-button-id', ev.currentTarget.id);
        enableTabbing();
         
        document.body.style.overflowY = 'hidden';
    }

    const close = ev => {
        if (ev) {
            const elem = ev.currentTarget;
            const btnId = elem.dataset.buttonId;
            console.log(btnId);
            document.querySelector(`#${btnId}`).focus();
        }
        modal.classList.remove('show');
        modal.classList.add('hide');
        modal.setAttribute('aria-hidden', 'true');
        disableTabbing();
        document.body.style.overflowY = 'auto';
    };

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = close;


    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            close();
        }
    });

    attachEventHandlers();
};

createModal('#speaking');
createModal('.services');
createModal('.guiding-principles');
createModal('.expertise');
createModal('#bio');