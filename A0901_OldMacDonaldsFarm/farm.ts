/*
Aufgabe: <L09.1_Luftfahrt>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <23.05.2023>
Quellen: <inspired by Marie Eckl>
*/

namespace OldMacDonalds {

    window.addEventListener("load", handleLoad);

    let cow: Animal = new Animal("Cow", "Magda", "Grass", 120, 40, "Mooo");
    console.log(cow)   
    let pig: Animal = new Animal("Pig", "Edgar", "Junk", 95, 20, "OINK");
    let chicken: Animal = new Animal("Chicken", "Arnold", "Grain", 50, 10, "BOGBOG");
    let cat: Animal = new Animal("Cat", "Karl", "Meat", 65, 8, "MIAAAU");
    let horse: Animal = new Animal("Horse", "Carla", "Grass", 65, 8, "WIIIUUU");
    let allAnimals: Animal[] = [cow, pig, chicken, cat, horse];
  
    function handleLoad(_event: Event): void {
      singSong();
      document.getElementById("daysimulation")?.addEventListener("click", newDay);
    }
  
    function singSong(): void {
        for (let animal of allAnimals) {
            let paragraph: HTMLParagraphElement = document.createElement("p");
            paragraph.innerHTML = animal.singSong();
            let textarea: HTMLDivElement = <HTMLDivElement>document.getElementById("lyrics");
            textarea.appendChild(paragraph);
        };

        newDay();

    };
  
    function newDay(): void {
      for (let animal of allAnimals) {
        animal.portion -= animal.foodstock;
      }
  
      let storageDiv: HTMLElement = document.getElementById("Storage") as HTMLDivElement;
      storageDiv.innerHTML = `<h3>Food Storage</h3>
        ${allAnimals[0].portion}kg of ${allAnimals[0].foodstock}<br>
        ${allAnimals[1].portion}kg of ${allAnimals[1].foodstock}<br>
        ${allAnimals[2].portion}kg of ${allAnimals[2].foodstock}<br>
        ${allAnimals[3].portion}kg of ${allAnimals[3].foodstock}<br>
        ${allAnimals[4].portion}kg of ${allAnimals[4].foodstock}<br>`;
  

     if (allAnimals[0].foodstock <= 0) {
    alert:(" LANDWIRTSCHAFTLICHER GUTSHERREHOF wird zu FARM DER TIERE- GENOSSENSCHAFTSBETRIEB");
    window.location.reload()
            } 
        }
    }
