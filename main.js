const app = new Vue({
    el: '#app',
    data: {
        newTodo : [""],
        todoList : [
            {
                text : "mangiare",
                done : true
            },
            {
                text : "studiare",
                done : true
            },
            {
                text : "dormire",
                done : true
            },
            {
                text : "vedere la documentazione",
                done : true
            },
        ],
    },
    methods: {
        addTodo(){
           this.todoList.push(this.newTodo)
        },
        removeTodo(index){
            console.log(this.todoList, index)
            this.todoList.splice(index,1)
        },
        prova(){
            this.todoList.done = !this.todoList.done
            console.log(this.todoList.done);
        }
    }
})


