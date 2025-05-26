let students = [
    {
        name: "Ana García López",
        details: {
            photo: "assets/img/user.png",
            group: "6-A",
            cellular: "4421246543",
            correo: "11199988@gmail.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "Juan Hernández Martínez",
        details: {
            photo: "assets/img/user.png",
            group: "6-B",
            cellular: "4421256789",
            correo: "juan.hernandez@example.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "María Pérez González",
        details: {
            photo: "assets/img/user.png",
            group: "6-A",
            cellular: "4421234567",
            correo: "maria.perez@example.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "Carlos Sánchez Ramírez",
        details: {
            photo: "assets/img/user.png",
            group: "6-C",
            cellular: "4421265432",
            correo: "carlos.sanchez@example.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "Sofía Torres Flores",
        details: {
            photo: "assets/img/user.png",
            group: "6-A",
            cellular: "4421278901",
            correo: "sofia.torres@example.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "Luis Martínez Vargas",
        details: {
            photo: "assets/img/user.png",
            group: "6-B",
            cellular: "4421287654",
            correo: "luis.martinez@example.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "Daniela Rodríguez Castro",
        details: {
            photo: "assets/img/user.png",
            group: "6-B",
            cellular: "4421294321",
            correo: "daniela.rodriguez@example.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "José López Mendoza",
        details: {
            photo: "assets/img/user.png",
            group: "6-C",
            cellular: "4421309876",
            correo: "jose.lopez@example.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "Valeria Guzmán Herrera",
        details: {
            photo: "assets/img/user.png",
            group: "6-A",
            cellular: "4421312543",
            correo: "valeria.guzman@example.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "Miguel Morales Ruiz",
        details: {
            photo: "assets/img/user.png",
            group: "6-A",
            cellular: "4421326789",
            correo: "miguel.morales@example.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "Laura Fernández Ortiz",
        details: {
            photo: "assets/img/user.png",
            group: "6-B",
            cellular: "4421334567",
            correo: "laura.fernandez@example.com",
            workshop: "",
            psychologist: ""
        }
    },
    {
        name: "Diego Castillo Navarro",
        details: {
            photo: "assets/img/user.png",
            group: "6-C",
            cellular: "4421347890",
            correo: "diego.castillo@example.com",
            workshop: "",
            psychologist: ""
        }
    }
];

let selectedIndex = -1;

// Function to populate student list
function populateStudentList() {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const label = document.createElement('label');
        label.className = 'student';
        label.onclick = () => showStudentInfo(index);
        label.innerHTML = `
            <input type="checkbox" name="student_checkbox" value="${index}" onchange="updateSelectedIndex(this, ${index})"> ${student.name}
        `;
        studentList.appendChild(label);
    });
}

// Function to update selected index based on checkbox
function updateSelectedIndex(checkbox, index) {
    if (checkbox.checked) {
        selectedIndex = index;
        showStudentInfo(index);
        // Uncheck other checkboxes
        document.querySelectorAll('input[name="student_checkbox"]').forEach(cb => {
            if (cb !== checkbox) cb.checked = false;
        });
    } else {
        selectedIndex = -1;
        document.getElementById('noSelectionMessage').style.display = 'block';
        document.getElementById('studentInfo').classList.remove('active');
    }
}

// Function to show student information
function showStudentInfo(index) {
    const student = students[index];
    const details = student.details;

    document.getElementById('studentPhoto').src = details.photo;
    document.getElementById('studentName').innerText = student.name;
    document.getElementById('studentGroup').innerText = details.group;
    document.getElementById('studentCellular').innerText = details.cellular;
    document.getElementById('studentCorreo').innerText = details.correo;
    document.getElementById('studentWorkshop').innerText = details.workshop || "No asignado";
    document.getElementById('studentPsychologist').innerText = details.psychologist || "No asignado";

    document.getElementById('noSelectionMessage').style.display = 'none';
    document.getElementById('studentInfo').classList.add('active');
    selectedIndex = index;
}

// Function to show group modal
function showGroupModal() {
    if (selectedIndex === -1) {
        alert("Por favor, selecciona un alumno primero.");
        return;
    }
    document.getElementById('selected_student').value = selectedIndex;
    const groupModal = new bootstrap.Modal(document.getElementById('changeGroupModal'));
    groupModal.show();
}

// Function to show workshop modal
function showWorkshopModal() {
    if (selectedIndex === -1) {
        alert("Por favor, selecciona un alumno primero.");
        return;
    }
    document.getElementById('selected_student_workshop').value = selectedIndex;
    const workshopModal = new bootstrap.Modal(document.getElementById('assignWorkshopModal'));
    workshopModal.show();
}

// Function to show psychologist modal
function showPsychologistModal() {
    if (selectedIndex === -1) {
        alert("Por favor, selecciona un alumno primero.");
        return;
    }
    document.getElementById('selected_student_psychologist').value = selectedIndex;
    const psychologistModal = new bootstrap.Modal(document.getElementById('assignPsychologistModal'));
    psychologistModal.show();
}

// Function to show edit modal
function showEditModal() {
    if (selectedIndex === -1) {
        alert("Por favor, selecciona un alumno primero.");
        return;
    }
    const student = students[selectedIndex];
    const details = student.details;

    document.getElementById('selected_student_edit').value = selectedIndex;
    document.getElementById('group').value = details.group;
    document.getElementById('cellular').value = details.cellular;
    document.getElementById('correo').value = details.correo;

    const editModal = new bootstrap.Modal(document.getElementById('editStudentModal'));
    editModal.show();
}

// Function to add a new student
function addStudent() {
    const form = document.getElementById('addStudentForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const newStudent = {
        name: `${form.nombre.value} ${form.apellidos.value}`,
        details: {
            photo: "assets/img/user.png",
            group: "6-A",
            cellular: form.celular.value,
            correo: form.correo_institucional.value,
            workshop: "",
            psychologist: ""
        }
    };
    students.push(newStudent);
    populateStudentList();
    bootstrap.Modal.getInstance(document.getElementById('addStudentModal')).hide();
}

// Function to change group
function changeGroup() {
    const form = document.getElementById('changeGroupForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const index = parseInt(form.selected_student.value);
    if (index >= 0 && index < students.length) {
        students[index].details.group = form.new_group.value;
        if (selectedIndex === index) {
            showStudentInfo(index);
        }
        populateStudentList();
    }
    bootstrap.Modal.getInstance(document.getElementById('changeGroupModal')).hide();
}

// Function to assign workshop
function assignWorkshop() {
    const form = document.getElementById('assignWorkshopForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const index = parseInt(form.selected_student_workshop.value);
    if (index >= 0 && index < students.length) {
        students[index].details.workshop = form.new_workshop.value;
        if (selectedIndex === index) {
            showStudentInfo(index);
        }
        populateStudentList();
    }
    bootstrap.Modal.getInstance(document.getElementById('assignWorkshopModal')).hide();
}

// Function to assign psychologist
function assignPsychologist() {
    const form = document.getElementById('assignPsychologistForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const index = parseInt(form.selected_student_psychologist.value);
    if (index >= 0 && index < students.length) {
        students[index].details.psychologist = form.new_psychologist.value;
        if (selectedIndex === index) {
            showStudentInfo(index);
        }
        populateStudentList();
    }
    bootstrap.Modal.getInstance(document.getElementById('assignPsychologistModal')).hide();
}

// Function to edit student
function editStudent() {
    const form = document.getElementById('editStudentForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const index = parseInt(form.selected_student_edit.value);
    if (index >= 0 && index < students.length) {
        students[index].details.group = form.group.value;
        students[index].details.cellular = form.cellular.value;
        students[index].details.correo = form.correo.value;
        if (selectedIndex === index) {
            showStudentInfo(index);
        }
        populateStudentList();
    }
    bootstrap.Modal.getInstance(document.getElementById('editStudentModal')).hide();
}

// Function to load header
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    populateStudentList();
    document.getElementById('noSelectionMessage').style.display = 'block';
    document.getElementById('studentInfo').classList.remove('active');
});