document.addEventListener('DOMContentLoaded', function() {

    // Disable right click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable text selection
    document.addEventListener('mousedown', function(e) {
        if (e.detail > 1) { // if double click
            e.preventDefault();
        }
    });

    // This will prevent copying content using Ctrl + C
    document.addEventListener('copy', function(e) {
        e.clipboardData.setData('text/plain', 'Copying is not allowed on this website.');
        e.preventDefault();
    });

    // Prevent Ctrl+Shift+I
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.code === 'KeyI') {
            e.preventDefault();
            // alert('The key combination Ctrl + Shift + I has been disabled.');
        }
    });



    document.addEventListener('keydown', function(e) {
        // Check for F12
        // console.log(e.keyCode);
        if (e.keyCode === 123) {
            e.preventDefault();
        }

        // Check for Ctrl or Cmd key being held down
        if (e.ctrlKey || e.metaKey) {
            switch (e.keyCode) {
                case 73:   // I key
                case 74:   // J key
                case 67:   // C key
                case 85:   // U key
                    e.preventDefault();
                    break;
            }

            // Check for Shift key being held down
            if (e.shiftKey) {
                switch (e.keyCode) {
                    case 73:   // I key
                    case 74:   // J key
                    case 67:   // C key
                    case 85:   // U key
                        e.preventDefault();
                        break;
                }
            }
        }

    });


    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
    

}, false);