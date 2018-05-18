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
}
angular
    .module("toDoApp")
    .controller("toDoController", toDoController);