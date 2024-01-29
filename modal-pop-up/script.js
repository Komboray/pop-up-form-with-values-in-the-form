// Get references to elements
const openFormButton = document.getElementById("openForm");
const popupForm = document.getElementById("popupForm");

// Add click event listener to the span element
openFormButton.addEventListener("click", function () {
    // Toggle the visibility of the popup form
    popupForm.style.display = (popupForm.style.display === "block") ? "none" : "block";
});

// Function to close the popup form
function closePopupForm() {
    // Hide the popup form
    popupForm.style.display = "none";
}
