const app = new Vue({
    el: '#app',
    data: {
        todoList: [
            {id: 0, txt: "clean the house"},
        ],
        inputText: '',
        latestId: 0,
    },
    methods: {
        addTodo: function() {
            this.todoList.push(
                {id: ++this.latestId, txt: this.inputText}
            )
        }
    }
});
