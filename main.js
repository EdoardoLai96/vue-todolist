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
                if(this.newTodo.trim().length >0){
                    this.todoList.push(
                        {
                            text: this.newTodo.trim(),
                            done: false
                        }
                        )
                    }
                    this.newTodo="";
                
        },
        removeTodo(index){
            console.log(this.todoList, index)
            this.todoList.splice(index,1)
        },
        barrato(index){
            this.todoList[index].done = !this.todoList[index].done
        }
    }
})


