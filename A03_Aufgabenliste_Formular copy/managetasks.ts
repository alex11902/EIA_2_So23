/*
Aufgabe: <L02_EventInspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <30.03.2023>
Quellen: <inspiriert von Medin Flaig und Alexander Holstein>
*/
namespace copy {
  window.addEventListener("load", handleLoad);

  
  let task: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#typetask")
  );
  let date: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#choosedate")
  );
  let person: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#typename")
  );
  let comment: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#typecomment")
  );
  
  function handleLoad(): void {
    fetchData()
      task = <HTMLInputElement>document.querySelector("#typetask");
      date = <HTMLInputElement>document.querySelector("#choosedate");
      person = <HTMLInputElement>document.querySelector("#typename");
      comment = <HTMLInputElement>document.querySelector("#typecomment");
      
      let addbutton: HTMLButtonElement = <HTMLButtonElement>(
      document.querySelector("#add")
    );
   
    //generateTasks();
    addbutton.addEventListener("click", handleButtonadd);
    
   
}
function handleButtonadd(): void {
    let taskadd = task.value;
    //console.log(taskadd);
    let dateadd = date.value;
    //console.log(dateadd);
    let personadd = person.value;
   // console.log(comment);
    let commentadd = comment.value;
    
    let newTASK: Task = {
      task: taskadd,
      datetime: dateadd,
      person: personadd,
      comment: commentadd,
      status: false,
    };

    data.moretasks.push(newTASK);

    let query = JSON.parse(newTask); 

    await fetch("https://webuser.hs-furtwangen.de/~halmosil/Database/?command=insert&collection=Task&data=" + query);
    //console.log("add new task");
    task.value = "";
    date.value = "";
    person.value = "Lisa";
    comment.value = "2023-04-30";
    
    generateTasks();
    
  };
  
 export async function deleteTask(_event:MouseEvent): Promise <void> {


    let deleteButton = document.querySelector("#summtask");
    let target: HTMLElement= <HTMLElement>_event.target;
    let parent:HTMLElement= <HTMLElement>target.parentElement;

    deleteButton?.removeChild(parent);
    //console.log("weg damit")
        

    }
  }



