var app = new Vue(
	{
	  el: '#app',
		data:{
	    
         todoList: [

            {
               text: 'Andare a fare la spesa',
               done: false,
            },
            {
               text: 'Andare a correre',
               done: false,
            },
            {
               text: 'Fare esercizio',
               done: false,
            },

         ],

         doneList: [
            
         ],

         addTaskText: '',

         addTask: {text: '', done: false}

	  },

		methods:{

         removeFromTodo(index){

            this.todoList.splice(index, 0);

         },

         removeFromDone(index){

            this.doneList.splice(index, 1);

         },

         markAsDone(element, index){

            if(element.done == false){
               element.done = true;
               this.doneList.push(element);
            } 

            this.todoList.splice(index, 0);

         },

         markAsDoneText(element, index){

            if(element.done == false){
               element.done = true;
               this.doneList.push(element);
            } 

            this.todoList.splice(index, 1);

         },

         addButton(){

            if(this.addTaskText != ''){

               let newTask = 
               
               {
                  text: this.addTaskText, 
                  done: false
               };

               this.todoList.push(newTask)

            }         

         }
		}
	}
);