const app = new Vue({
    el: '#app',
    data: {
        newTodo : "",
        todoList : ["mangiare", "dormire", "leggere documentazione vue", "sport"]
    },
    methods: {
        addTodo(){
           this.todoList.push(this.newTodo)
        }
    }
})


