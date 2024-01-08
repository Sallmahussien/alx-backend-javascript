const getListStudents = () => {
    return [
        createObj(1, 'Guillaume', 'Francisco'),
        createObj(2, 'James', 'Columbia'),
        createObj(5, 'Serena', 'San Francisco')
    ];
}

const createObj = (id, firstName, location) => {
    return { id, firstName, location };
}

export default getListStudents;