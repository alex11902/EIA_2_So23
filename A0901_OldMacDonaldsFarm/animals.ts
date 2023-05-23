
/*Aufgabe: <L09.1_Luftfahrt>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.05.2023>
Quellen: <insects and windsock inspired by Marie Eckl>
*/
// Handle-load function
namespace OldMacDonalds {
    export class Animal {
      animaltype: string;
      name: string;
      food: string;
      foodstock: number;
      portion: number;
      noise: string;
    
        constructor( _animaltype: string,_name: string,_food: string,_foodstock: number,_portion: number,_noise: string )
        
        {
          this.animaltype = _animaltype;
          this.name = _name;
          this.food = _food;
          this.foodstock = _foodstock;
          this.portion = _portion;
          this.noise = _noise;
        }
    
        singSong(): string {
          return `<h2>${this.name} the ${this.animaltype}</h2>
            <p>"And on that Farm he had a ${this.animaltype} EIEIO</p>
            <p>With a ${this.noise} ${this.noise} here and a ${this.noise} ${this.noise} there</p>
            <p>The ${this.animaltype} called ${this.name} ate ${this.portion} kg of ${this.food}.</p>`;
        }
    }
}