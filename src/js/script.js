const updateYear = () => {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `©${currentYear} Todos direitos UBER`
}

document.addEventListener("DOMContentLoaded", updateYear);