const app = new Vue({
    el: '#app',
    data: {
        newTodo : [""]
        ,
        todoList : [
            {
                text : "mangiare",
                done : false
            },
            {
                text : "studiare",
                done : false
            },
            {
                text : "dormire",
                done : false
            },
            {
                text : "vedere la documentazione",
                done : false
            },
        ],
    },
    methods: {
        addTodo(){
                if(this.newTodo != ""){
                    this.todoList.push(
                        {
                            text: this.newTodo,
                            done: false
                        }
                        )
                    }
                
        },
        removeTodo(index){
            console.log(this.todoList, index)
            this.todoList.splice(index,1)
        },
        prova(index){
            this.todoList[index].done = !this.todoList[index].done
        }
    }
})


