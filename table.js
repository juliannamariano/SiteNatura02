function searchTable() {
    const input = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        const name = row.querySelectorAll("td")[1].textContent.toLowerCase();
        if (name.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.goal-section').forEach(section => {
        section.classList.remove('active');
    });

    
    document.getElementById(sectionId).classList.add('active');

    
    document.querySelectorAll('.goal-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    showSection('acompanhamento');
});
