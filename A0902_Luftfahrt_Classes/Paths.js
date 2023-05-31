"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    // export let ParagliderForms
    LuftfahrtClasses.Insects = [];
    // ufoPath = createUfoPath();
    function createInsects(numInsects) {
        const maxInsects = 5; // Maximale Anzahl von Insekten im Bild
        for (let i = 0; i < numInsects && LuftfahrtClasses.Insects.length < maxInsects; i++) {
            let insect = new LuftfahrtClasses.Insect();
            LuftfahrtClasses.Insects.push(insect);
        }
    }
    LuftfahrtClasses.createInsects = createInsects;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Paths.js.map