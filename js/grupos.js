let groups = [
    {name: "1-A°", photo: "assets/img/grupo.png", counselor: "Antonio Pera", students: 25, student_list: {"Ana García": {cellular: "4421246543", correo: "ana.garcia@example.com"}, "Juan Hernández": {cellular: "4421256789", correo: "juan.hernandez@example.com"}}},
    {name: "2-A°", photo: "assets/img/grupo.png", counselor: "María Gómez", students: 20, student_list: {"María Pérez": {cellular: "4421234567", correo: "maria.perez@example.com"}}},
    {name: "4-A°", photo: "assets/img/grupo.png", counselor: "Carlos López", students: 22, student_list: {"Carlos Sánchez": {cellular: "4421265432", correo: "carlos.sanchez@example.com"}}},
    {name: "5-A°", photo: "assets/img/grupo.png", counselor: "Antonio Pera", students: 18, student_list: {"Sofía Torres": {cellular: "4421278901", correo: "sofia.torres@example.com"}}},
    {name: "1-B°", photo: "assets/img/grupo.png", counselor: "María Gómez", students: 15, student_list: {"Luis Martínez": {cellular: "4421287654", correo: "luis.martinez@example.com"}}},
    {name: "2-B°", photo: "assets/img/grupo.png", counselor: "Carlos López", students: 23, student_list: {"Daniela Rodríguez": {cellular: "4421294321", correo: "daniela.rodriguez@example.com"}}},
    {name: "3-B°", photo: "assets/img/grupo.png", counselor: "Antonio Pera", students: 19, student_list: {"José López": {cellular: "4421309876", correo: "jose.lopez@example.com"}}},
    {name: "4-B°", photo: "assets/img/grupo.png", counselor: "María Gómez", students: 21, student_list: {"Valeria Guzmán": {cellular: "4421312543", correo: "valeria.guzman@example.com"}}},
    {name: "5-B°", photo: "assets/img/grupo.png", counselor: "Carlos López", students: 17, student_list: {"Miguel Morales": {cellular: "4421326789", correo: "miguel.morales@example.com"}}},
    {name: "1-C°", photo: "assets/img/grupo.png", counselor: "Antonio Pera", students: 24, student_list: {"Laura Fernández": {cellular: "4421334567", correo: "laura.fernandez@example.com"}}},
    {name: "2-C°", photo: "assets/img/grupo.png", counselor: "María Gómez", students: 16, student_list: {"Diego Castillo": {cellular: "4421347890", correo: "diego.castillo@example.com"}}}
];

const counselors = ["María Elena Ramírez Torres", "Juan Pablo García López", "Carlos Andrés Mendoza Ruiz", "Sofía Guadalupe Hernández Castro"];

let selectedIndex = -1;

// Function to populate group list
function populateGroupList() {
    const groupList = document.getElementById('group-list');
    groupList.innerHTML = '';
    groups.forEach((group, index) => {
        const label = document.createElement('label');
        label.className = 'group';
        label.onclick = () => showGroupInfo(index);
        label.innerText = group.name;
        groupList.appendChild(label);
    });
}

// Function to show group information
function showGroupInfo(index) {
    const group = groups[index];

    document.getElementById('groupPhoto').src = group.photo;
    document.getElementById('groupName').innerText = group.name;
    document.getElementById('groupCounselor').innerText = group.counselor || "No asignado";
    document.getElementById('groupStudents').innerText = group.students;
    document.getElementById('successMessage').style.display = 'none';

    document.getElementById('noSelectionMessage').style.display = 'none';
    document.getElementById('groupInfo').classList.add('active');
    selectedIndex = index;
    updateStudentList();
}

// Function to show edit modal
function showEditModal() {
    if (selectedIndex === -1) {
        alert("Por favor, selecciona un grupo primero.");
        return;
    }
    const group = groups[selectedIndex];
    document.getElementById('editGroupForm').group_name.value = group.name;
    document.getElementById('editGroupForm').counselor.value = group.counselor;
    document.getElementById('editGroupForm').students.value = group.students;
    document.getElementById('selected_group_edit').value = selectedIndex;
    const editModal = new bootstrap.Modal(document.getElementById('editGroupModal'));
    editModal.show();
}

// Function to show delete modal
function showDeleteModal() {
    if (selectedIndex === -1) {
        alert("Por favor, selecciona un grupo primero.");
        return;
    }
    if (confirm("¿Estás seguro de que deseas eliminar este grupo?")) {
        groups.splice(selectedIndex, 1);
        selectedIndex = -1;
        populateGroupList();
        document.getElementById('noSelectionMessage').style.display = 'block';
        document.getElementById('groupInfo').classList.remove('active');
    }
}

// Function to manage counselor
function manageCounselor() {
    if (selectedIndex === -1) {
        alert("Por favor, selecciona un grupo primero.");
        return;
    }
    const manageCounselorModal = new bootstrap.Modal(document.getElementById('manageCounselorModal'));
    manageCounselorModal.show();
    document.getElementById('counselorSuccessMessage').style.display = 'none';
}

// Function to show change counselor modal
function showChangeCounselorModal() {
    if (selectedIndex === -1) {
        alert("Por favor, selecciona un grupo primero.");
        return;
    }
    const counselorList = document.getElementById('counselor-list');
    counselorList.innerHTML = '';
    counselors.forEach(counselor => {
        const label = document.createElement('label');
        label.className = 'd-flex align-items-center p-2 bg-light rounded mb-2';
        label.innerHTML = `
            <input type="radio" name="new_counselor" value="${counselor}" required class="me-2">
            <span class="flex-grow-1">${counselor}</span>
        `;
        counselorList.appendChild(label);
    });
    document.getElementById('selected_group_change').value = selectedIndex;
    const changeCounselorModal = new bootstrap.Modal(document.getElementById('changeCounselorModal'));
    changeCounselorModal.show();
}

// Function to remove counselor
function removeCounselor() {
    if (selectedIndex === -1) {
        alert("Por favor, selecciona un grupo primero.");
        return;
    }
    if (confirm("¿Estás seguro de que deseas eliminar el counselor?")) {
        groups[selectedIndex].counselor = "";
        showGroupInfo(selectedIndex);
        document.getElementById('counselorSuccessMessage').style.display = 'block';
        bootstrap.Modal.getInstance(document.getElementById('manageCounselorModal')).hide();
    }
}

// Function to manage students
function manageStudents() {
    if (selectedIndex === -1) {
        alert("Por favor, selecciona un grupo primero.");
        return;
    }
    document.getElementById('selected_group_students').value = selectedIndex;
    updateStudentList();
    const manageStudentsModal = new bootstrap.Modal(document.getElementById('manageStudentsModal'));
    manageStudentsModal.show();
}

// Function to update student list
function updateStudentList() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    if (selectedIndex !== -1) {
        const students = groups[selectedIndex].student_list;
        for (let name in students) {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerText = `${name} (Celular: ${students[name].cellular}, Correo: ${students[name].correo})`;
            li.onclick = () => editStudent(name);
            studentList.appendChild(li);
        }
    }
}

// Function to add or update student
function addOrUpdateStudent() {
    const form = document.getElementById('studentForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const studentName = form.student_name.value.trim();
    const cellular = form.cellular.value.trim();
    const correo = form.correo.value.trim();
    const editIndex = form.edit_student_index.value;

    if (studentName && cellular && correo) {
        if (!groups[selectedIndex].student_list[studentName] || editIndex === studentName) {
            groups[selectedIndex].student_list[studentName] = {cellular, correo};
            groups[selectedIndex].students = Object.keys(groups[selectedIndex].student_list).length;
            form.student_name.value = '';
            form.cellular.value = '';
            form.correo.value = '';
            form.edit_student_index.value = '';
            updateStudentList();
            showGroupInfo(selectedIndex);
        } else {
            alert("El alumno ya existe en este grupo.");
        }
    }
}

// Function to edit student
function editStudent(name) {
    const student = groups[selectedIndex].student_list[name];
    document.getElementById('student_name').value = name;
    document.getElementById('cellular').value = student.cellular;
    document.getElementById('correo').value = student.correo;
    document.getElementById('edit_student_index').value = name;
}

// Function to delete student
function deleteStudent() {
    const form = document.getElementById('studentForm');
    const studentName = form.student_name.value.trim();
    if (studentName && confirm("¿Estás seguro de que deseas eliminar este alumno?")) {
        delete groups[selectedIndex].student_list[studentName];
        groups[selectedIndex].students = Object.keys(groups[selectedIndex].student_list).length;
        form.student_name.value = '';
        form.cellular.value = '';
        form.correo.value = '';
        form.edit_student_index.value = '';
        updateStudentList();
        showGroupInfo(selectedIndex);
    }
}

// Function to add group
function addGroup() {
    const form = document.getElementById('addGroupForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const groupName = form.group_name.value.trim();
    const counselor = form.counselor.value;
    const students = parseInt(form.students.value);
    if (groupName && !groups.some(g => g.name === groupName)) {
        groups.push({name: groupName, photo: "assets/img/grupo.png", counselor, students, student_list: {}});
        populateGroupList();
        bootstrap.Modal.getInstance(document.getElementById('addGroupModal')).hide();
        form.reset();
    } else {
        alert("El grupo ya existe o el nombre es inválido.");
    }
}

// Function to edit group
function editGroup() {
    const form = document.getElementById('editGroupForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const index = parseInt(form.selected_group.value);
    const groupName = form.group_name.value.trim();
    const counselor = form.counselor.value;
    const students = parseInt(form.students.value);
    if (index >= 0 && index < groups.length && groupName && (!groups.some(g => g.name === groupName) || groups[index].name === groupName)) {
        groups[index].name = groupName;
        groups[index].counselor = counselor;
        groups[index].students = students;
        if (selectedIndex === index) {
            showGroupInfo(index);
        }
        populateGroupList();
        bootstrap.Modal.getInstance(document.getElementById('editGroupModal')).hide();
    } else {
        alert("El grupo ya existe o el nombre es inválido.");
    }
}

// Function to change counselor
function changeCounselor() {
    const form = document.getElementById('changeCounselorForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const index = parseInt(form.selected_group.value);
    const newCounselor = form.new_counselor.value;
    if (index >= 0 && index < groups.length) {
        groups[index].counselor = newCounselor;
        showGroupInfo(index);
        document.getElementById('counselorSuccessMessage').style.display = 'block';
        bootstrap.Modal.getInstance(document.getElementById('changeCounselorModal')).hide();
        bootstrap.Modal.getInstance(document.getElementById('manageCounselorModal')).show();
    }
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
    populateGroupList();
    document.getElementById('noSelectionMessage').style.display = 'block';
    document.getElementById('groupInfo').classList.remove('active');
});