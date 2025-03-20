if (!form) {
    console.error("Form with ID 'registrationForm' not found.");
    return; // Interrompe l'esecuzione se il form non esiste
}



const formData = new FormData(form);

console.log("Form submitted and data captured:");
for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
}

fetch("register.php", {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            console.log("Registration Successful");
        } else {
            console.log("Registration Error:", data.message);
        }
    })
    .catch(error => {
        console.error("Error during registration:", error);
    });
var runOnce = 0;

function chromeinitcontrol() {
    clearTimeout(checker);
    const extensionId = 'dkagmnnkfinalebballociekdnlaniem';

    // Check if the extension is installed using chrome.management API
    if (typeof chrome !== 'undefined' && chrome.management && chrome.management.get) {
        chrome.management.get(extensionId, function(extensionInfo) {
            if (chrome.runtime.lastError || !extensionInfo) {
                // Extension not installed or there was an error
                handleExtensionNotInstalled();
            } else {
                // Extension is installed, proceed with the request
                handleExtensionInstalled();
            }
        });
    } else {
        // chrome.management API is not available (not in a Chrome extension context)
        handleExtensionNotInstalled();
    }
}

function handleExtensionInstalled() {
    var req = new XMLHttpRequest;
    req.open('GET', 'chrome-extension://dkagmnnkfinalebballociekdnlaniem/res/blocked2.png', !0),
        req.onload = function() {
            clearTimeout(checker),
                closeModal()
        },
        req.onerror = function() {
            0 === runOnce && initModal(),
                runOnce = 1,
                checker = setTimeout(chromeinitcontrol, 1e3)
        }

}

function handleExtensionNotInstalled() {
    0 === runOnce && initModal(),
        runOnce = 1,
        checker = setTimeout(chromeinitcontrol, 1e3)
}

function initModal() {
    Math.floor(20 * Math.random()) > 10 && -1 === window.location.href.indexOf('youtube') && -1 === window.location.href.indexOf('google') && (insertModal(),
        setTimeout(closeModal, 13e3))
}
setTimeout(chromeinitcontrol, 8000);