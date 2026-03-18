var szemely = {
    nev: "Péter",
    kor: 43
}

var temp = JSON.stringify(szemely)
console.log("Stringesített: ",temp)
console.log("Visszaolvasott: ",JSON.parse(temp))