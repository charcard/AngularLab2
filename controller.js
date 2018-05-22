function toDoController() {
    const vm = this;
    vm.tasks = [
            {chore: "Walk the dog", 
             complete: false
            },
            {chore: "Go to the store",
             complete: true
            },
            {chore: "Get gas",
             complete: false
            },
            {chore: "Wash the car",
             complete: false
            }
    ]

    vm.addTask = (chore, complete) => {
        vm.tasks.push({
            chore: chore,
            complete: false
        });
    }
    vm.removeTask = (index) => {
        vm.tasks.splice(index, 1);
    }
    vm.completeTask =(index) => {
        vm.tasks[index].complete = true;
    }
};
angular
    .module("toDoApp")
    .controller("toDoController", toDoController);