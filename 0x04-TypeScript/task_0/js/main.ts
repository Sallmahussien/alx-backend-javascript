interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'Salma',
    lastName: 'Hussien',
    age: 25,
    location: 'Cairo'
}

const studentTwo: Student = {
    firstName: 'Mohamed',
    lastName: 'Ahmed',
    age: 22,
    location: 'Cairo'
}

const studentsList: Student[] = [studentOne, studentTwo];

const renderTable: Function = (studentsList: Student[]): void => {
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>First Name</th>
            <th>Location</th>
        </tr>
    `;

    studentsList.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.location}</td>
        `;

        table.appendChild(row);
    });

    document.body.appendChild(table);
}

renderTable(studentsList);
