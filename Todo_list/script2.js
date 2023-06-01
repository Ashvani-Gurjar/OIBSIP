let saveTodo = JSON.parse(localStorage.getItem('todo')) || [];

showTodo(saveTodo);

function showTodo(data){

   document.getElementById('result').innerHTML = ''

    data.forEach((element, index) => {

        //append task
    
        let div = document.createElement('div')
        let heading = document.createElement('h2')  
        heading.innerText = "Task Name :"+ " "+element?.task
        div.style.border="5px solid black";
        div.style.marginBottom = "20px";
        div.style.width="500px";
        div.style.height="230px";
        div.style.paddingLeft ="20px";
        div.style.borderRadius="10px";

         //append detail
         let detail = document.createElement('h2')
         detail.innerText = "Detail :"+" "+element?.detail
         div.append(heading, detail)

        //create delate btn
        let delete_btn = document.createElement('button')
        let deletes = document.createTextNode('Delate')
        delete_btn.setAttribute('class','delete')
        delete_btn.append(deletes)

        delete_btn.addEventListener('click',function(){
        data.splice(index,1)
        localStorage.setItem('todo',JSON.stringify(data))
        location.reload()

      })



        //create edit btn 
        let edit_btn = document.createElement('button')
        let edit = document.createTextNode('Edit')
        edit_btn.append(edit)

         //display none to block
        edit_btn.addEventListener('click',function(){
        var edits = document.getElementById("edit_div");
        edits.style.display = "block"

        //input select and display
        var edit_input_task = document.getElementById('input_task');
        var edit_input_detail = document.getElementById('input_detail');

        //display new task and detail
        document.getElementById("edit_bin").addEventListener('click', function(){
           element["task"] = edit_input_task.value;
           element["detail"] = edit_input_detail.value
         
           // edit btn  -- replace
           data.splice(index, 1, element)
           localStorage.setItem('todo',JSON.stringify(data))
           location.reload()
          }) 
       })

       
         //create Scarch btn
         let Search_btn = document.createElement('button')
         let Search = document.createTextNode('Search')
         Search_btn.append(Search)


            Search_btn.addEventListener('click',function(){
            var Search = document.getElementById("Search_div");
            Search.style.display = "block"


             //input select and display
        var Search_input_task = document.getElementById('input_Search_Task');
        document.getElementById("Search_btn").addEventListener('click', function(){
        let  Search_input_value = Search_input_task.value;


        function filterObj(obj){
            let newArray = data.filter(function (element)
              {
                return element.task == obj
              });
              showTodo(newArray)
           };
           console.log(filterObj(Search_input_value));
        



        })

         })

        //dispaly delate and edit btns
        document.getElementById('result').append(div)
        div.append(delete_btn)
        div.append(edit_btn)
        div.append(Search_btn)

    });
}

//sorting
 function sorttodo(){
    var select = document.getElementById("sort_List").value;
    if(select == "Asc"){
      var sortArr = saveTodo.sort((a, b)=> {

         let fa = a.task.toLowerCase(),
             fb = b.task.toLowerCase();
     
         if (fa < fb) {
             return -1;
         }
         if (fa > fb) {
             return 1;
         }
         return 0;
     }); 
   
    }
    else if(select == "Desc"){
      var sortArr = saveTodo.sort((a, b)=>  {

         let fa = a.task.toLowerCase(),
             fb = b.task.toLowerCase();
     
         if (fa > fb) {
             return -1;
         }
         if (fa < fb) {
             return 1;
         }
         return 0;
     });  

    }
   showTodo(sortArr)
  

 }








 