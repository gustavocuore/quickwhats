document.addEventListener('DOMContentLoaded', function () {
    // Get the input element by its ID
    const inputField = document.getElementById('numInput');
    const goButton = document.getElementById("goButton");

    // Focus on the input field when the popup is opened (extension icon clicked)
    inputField.focus();

    // Add an event listener to trigger the button click when Enter key is pressed
    inputField.addEventListener('keydown', function (event) {
        // Check if the pressed key is Enter (keyCode 13)
        if (event.key === 'Enter') {
            // Trigger the button click when Enter is pressed
            goButton.click();
        }
    });

    // Add an event listener to the button for click event
    goButton.addEventListener("click", function() {
        const input = document.getElementById("numInput").value.trim();
        const numberFilter = input.replace(/\D/g, "");
        if(numberFilter.length >= 3) {
            const url = `https://wa.me/${numberFilter}?text=hey`
            chrome.tabs.create({ url: url });
        }
    });
});
