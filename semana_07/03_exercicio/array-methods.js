// desafio.js

const students = [
	{ id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
	{ id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
	{ id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
	{ id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
	{ id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
]

// 1. Estudantes inativos
const inactiveStudents = students.filter(student => !student.active)
console.log("Estudantes inativos:")
console.log(inactiveStudents)

// 2. Estudante com id = 3
const studentId3 = students.find(student => student.id === 3)
console.log("\nEstudante com ID = 3:")
console.log(studentId3)

// 3. Estudantes com pelo menos uma nota abaixo de 70
const studentsWithLowGrades = students.filter(student =>
	student.grades.some(grade => grade < 70)
)
console.log("\nEstudantes com pelo menos uma nota abaixo de 70:")
console.log(studentsWithLowGrades)

// 4. Nomes dos estudantes com média > 85
const topStudentsNames = students
	.filter(student => {
		const average =
			student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
		return average > 85
	})
	.map(student => student.name)

console.log("\nNomes dos estudantes com média acima de 85:")
console.log(topStudentsNames)
