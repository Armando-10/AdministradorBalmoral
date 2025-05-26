const teachers = [
    { name: "Juan Pérez", subjects: "Matemáticas, Física", rating: 92 },
    { name: "María Gómez", subjects: "Literatura, Historia", rating: 88 },
    { name: "Carlos López", subjects: "Química, Biología", rating: 85 }
];

// Function to populate teacher cards
function populateTeacherCards() {
    const cardsRow = document.getElementById('teacher-cards');
    cardsRow.innerHTML = '';
    teachers.forEach((teacher, index) => {
        const card = document.createElement('div');
        card.className = 'teacher-card';
        card.innerHTML = `
            <img src="assets/img/iconousuario.png" alt="Teacher Icon">
            <h5>${teacher.name}</h5>
            <p><strong>Materias:</strong> ${teacher.subjects}</p>
            <p><strong>Evaluación:</strong> ${teacher.rating}%</p>
            <div class="rating-bar">
                <div class="rating-fill" style="width: ${teacher.rating}%;"></div>
            </div>
        `;
        cardsRow.appendChild(card);
    });
}

// Initialize charts
let pieChart, barChart;

function initializeCharts() {
    // Pie Chart
    pieChart = new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: {
            labels: ['Matemáticas', 'Literatura', 'Química', 'Otros'],
            datasets: [{
                data: [40, 30, 20, 10],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Bar Chart
    barChart = new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: ['Juan Pérez', 'María Gómez', 'Carlos López'],
            datasets: [{
                label: 'Rendimiento',
                data: [75, 85, 65],
                backgroundColor: ['#36a2eb', '#ffcd56', '#ff6384']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Function to apply filter (placeholder for future backend integration)
function applyFilter() {
    const selectedFilter = document.querySelector('input[name="filterOption"]:checked').id;
    // Placeholder: Update teacher cards based on filter
    console.log(`Filter applied: ${selectedFilter}`);
    // For now, just close the modal
    bootstrap.Modal.getInstance(document.getElementById('filterModal')).hide();
    // In a real implementation, this would fetch filtered data and update populateTeacherCards()
}

// Function to load header
function loadHeader() {
    fetch('Header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    populateTeacherCards();
    initializeCharts();
});

// Logout function (for header compatibility)
function logout() {
    alert("Cerrando sesión...");
}