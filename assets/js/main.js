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
            
         ]

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

         }
		}
	}
);