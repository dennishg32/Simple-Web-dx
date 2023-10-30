function updateYear() {
    const yearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Call the function to initially set the year
updateYear();
