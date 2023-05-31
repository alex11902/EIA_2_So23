namespace LuftfahrtClasses{

   export let Insects: Insect[] = [];
   export let HotAirBalloons: HotAirBalloon[] = [];

  // ufoPath = createUfoPath();
 export function createInsects(numInsects: number): void {
    const maxInsects = 5; // Maximale Anzahl von Insekten im Bild
  
    for (let i = 0; i < numInsects && Insects.length < maxInsects; i++) {
      let insect: Insect = new Insect();
      Insects.push(insect);
    }
  }
  export function createHotairballoons(numHotairballoons: number): void {
    const maxBalloons = 5; // Maximale Anzahl von Insekten im Bild
  
    for (let i = 0; i < numHotairballoons && Insects.length < maxBalloons; i++) {
      let hotairballoon: HotAirBalloon = new HotAirBalloon();
      HotAirBalloons.push(hotairballoon);
    }
}


