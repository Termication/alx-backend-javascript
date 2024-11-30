const { readFile } = require('fs');

/**
 * Reads a CSV file to count and categorize students by their fields of study.
 *
 * @param {string} fileName - The path to the CSV file.
 * @returns {Promise} Resolves with file data on success, rejects with an error message on failure.
 */
function countStudents(fileName) {
  const students = {}; // Stores student names categorized by field.
  const fields = {};   // Stores the count of students in each field.
  let length = 0;      // Tracks the total number of lines (excluding header).

  return new Promise((resolve, reject) => {
    // Asynchronously read the file.
    readFile(fileName, (error, data) => {
      if (error) {
        // Reject the promise if there is an error reading the file.
        reject(Error('Cannot load the database'));
      } else {
        // Split the file content into lines.
        const lines = data.toString().split('\n');

        // Process each line of the file.
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) { // Skip empty lines.
            length += 1;

            // Split the line into fields (columns).
            const field = lines[i].toString().split(',');

            // Categorize student names by field of study.
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            // Count the number of students in each field.
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        // Exclude the header row from the student count.
        const totalStudents = length - 1;

        // Output the total number of students.
        console.log(`Number of students: ${totalStudents}`);

        // Output the number of students in each field along with their names.
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') { // Exclude the header field name.
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }

        // Resolve the promise with the file data.
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
