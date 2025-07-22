const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  { id: 2, title: "Ler emails", completed: true, priority: "média" },
  { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
  { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" },
];

// 1. Encontrar a posição da primeira tarefa incompleta
const firstIncompleteIndex = tasks.findIndex(task => !task.completed);
console.log("Índice da primeira tarefa incompleta:", firstIncompleteIndex);

// 2. Verificar se existe alguma tarefa de baixa prioridade que esteja completa
const hasCompletedLowPriority = tasks.some(
  task => task.priority === "baixa" && task.completed
);
console.log("Existe tarefa de baixa prioridade completa?", hasCompletedLowPriority);

// 3. Verificar se todas as tarefas de alta prioridade estão incompletas
const allHighPriorityIncomplete = tasks
  .filter(task => task.priority === "alta")
  .every(task => !task.completed);

console.log("Todas as tarefas de alta prioridade estão incompletas?", allHighPriorityIncomplete);

// 4. Encontrar posição de tarefa com id = 10 e lidar com caso de não existência
const indexOfId10 = tasks.findIndex(task => task.id === 10);
if (indexOfId10 === -1) {
  console.log("Tarefa com id = 10 não encontrada (índice = -1)");
} else {
  console.log("Índice da tarefa com id = 10:", indexOfId10);
}
