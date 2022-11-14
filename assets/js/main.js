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

            this.todoList.splice(index, 1);

         },

         removeFromDone(index){

            this.doneList.splice(index, 1);

         }
		}
	}
);