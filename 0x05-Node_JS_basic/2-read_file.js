const fs = require('fs');

const countStudents = (path) => {
    try {
        const data = fs.readFileSync(path, { encoding: 'utf8' });
        const lines = data.split('\n').filter((line) => line.length > 0);
        console.log(`Number of students: ${lines.length - 1}`);
        const fields = {};
        for (const line of lines) {
            const student = line.split(',');
            if (!fields[student[3]]) fields[student[3]] = [];
            fields[student[3]].push(student[0]);
        }
        delete fields.field;
        for (const field in fields) {
            if (field) {
                const names = fields[field];
                console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
            }
        }
    }
    catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
