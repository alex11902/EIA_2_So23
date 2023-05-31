namespace LuftfahrtClasses{

    

   // export let ParagliderForms

   export let Insects: Insect[] = [];
  // ufoPath = createUfoPath();
 export function createInsects(numInsects: number): void {
    const maxInsects = 5; // Maximale Anzahl von Insekten im Bild
  
    for (let i = 0; i < numInsects && Insects.length < maxInsects; i++) {
      let insect: Insect = new Insect();
      Insects.push(insect);
    }
  }
}


