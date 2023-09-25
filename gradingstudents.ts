const gradingStudents = (grades: number[]) => {
  try {
    let newGrades: number[] = [];
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] >= 38) {
        if (grades[i] % 5 >= 3) {
          newGrades.push(grades[i] - (grades[i] % 5) + 5);
        } else {
          newGrades.push(grades[i]);
        }
      } else {
        newGrades.push(grades[i]);
      }
    }
    console.log(newGrades);
  } catch (error: any) {
    console.log(error);
  }
};

gradingStudents([73, 67, 38, 33]);
