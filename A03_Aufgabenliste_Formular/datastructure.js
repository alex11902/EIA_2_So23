"use strict";
/*
Aufgabe: <L04_Datastructures>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <29.04.2023>
Quellen: <inspiriert von Theresa Hauser>
*/
var household;
(function (household) {
    //data from mingi
    async function fetchData() {
        console.log("async");
        let response = await fetch("https://webuser.hs-furtwangen.de/~halmosil/database/?command=find&collection=Task");
        let task = await response.text();
        console.log("hello");
        household.data = JSON.parse(task);
        console.log(household.data);
        console.log("Hey da funktioniert was!");
        household.generateTasks();
    }
    household.fetchData = fetchData;
    /* change formular data
    interface FormDataJSON {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];
      }
      
      let formData: FormData = new FormData(form);
      let json: FormDataJSON = {};
      
      for (let key of formData.keys())
        if (!json[key]) {
          let values: FormDataEntryValue[] = formData.getAll(key);
          json[key] = values.length > 1 ? values : values[0];
        }
    //set query
        let query: URLSearchParams = new URLSearchParams();
        query.set("collection", "moretasks");
        query.set("data", JSON.stringify(json));
    }
    
      */
})(household || (household = {}));
/* change formular data
interface FormDataJSON {
    [key: string]: FormDataEntryValue | FormDataEntryValue[];
  }
  
  let formData: FormData = new FormData(form);
  let json: FormDataJSON = {};
  
  for (let key of formData.keys())
    if (!json[key]) {
      let values: FormDataEntryValue[] = formData.getAll(key);
      json[key] = values.length > 1 ? values : values[0];
    }
//set query
    let query: URLSearchParams = new URLSearchParams();
    query.set("collection", "moretasks");
    query.set("data", JSON.stringify(json));
}

  */
//# sourceMappingURL=datastructure.js.map