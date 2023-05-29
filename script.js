let textArea = document.getElementById("textA");
let bAnaliza = document.getElementById("analiza");
let sifra = document.getElementById("sifrovanie");

/* ANALIZA */
bAnaliza.addEventListener("click", function() {
    let text = textArea.value;
    // Spocita text ale aj medzeri
    let dlzka = textArea.value.length;
    
    // Spocitanie textu bez medzier
    let nebuduMedzery = text.replace(/\s/g, "");
    let druhaDlzka = nebuduMedzery.length;
    
    // Pocet cislic
    let cislice = text.match(/\d/g);
    let pocetCislic = cislice ? cislice.length : 0;

    // Vyhladavac na najdlhsie slovo + vypis poctu pismen
    let slovo = text.split(" ");
    let najdlhsieSlovo = [];
    let najdlhsiaDlzka = 0;

    slovo.forEach(function(slovo) {
        let dlzkaSlova = slovo.length;
        if (dlzkaSlova > najdlhsiaDlzka) {
            najdlhsieSlovo = [slovo];
            najdlhsiaDlzka = dlzkaSlova;
        } else if (dlzkaSlova === najdlhsiaDlzka) {
            najdlhsieSlovo.push(slovo);
        }
    });
    
    najdlhsieSlovo.forEach(function(slovo) {
        let sl = document.getElementById("slov");
        sl.textContent = "Najdlhšie slovo: " + najdlhsieSlovo.join(", ") + ", Počet písmen: " + najdlhsiaDlzka;
    });

    let dlz = document.getElementById("tuJeDlzka");
    let dl = document.getElementById("druhaDl");
    let cis = document.getElementById("cisl");

    dlz.textContent = "Celkova dlžka textu je: "+ dlzka;
    dl.textContent = "Celkova dlzka bez medzier: "+ druhaDlzka;
    cis.textContent = "Celkovy pocet cislic: "+ pocetCislic;

})

/* Funkcia najdi slovo */
function najdiSlovo() {
    // Cache DOM elements
    let hladameS = document.getElementById("vyhladavanie").value.toLowerCase().split(" ");
    let textArea = document.getElementById("textA").value.toLowerCase();
    let najdeneSlovo = document.getElementById("najdeneSlovo");
  
    let result = ""
    hladameS.forEach((x, i) => {
        let index = textArea.indexOf(x)
        console.log(index)
        if (index !== -1) {
            result += " " + x            
          }
    }  
    );


    if (result != "") {
        najdeneSlovo.textContent = "Slovo bolo nájdené: " + result;
      } else {
        najdeneSlovo.textContent = "Slovo nebolo nájdené.";
      }
  }
  

/* Kod na zasifrovanie citatelnosti textu */
function sifrujeme(text) {
    let result = "";
    for(let i=0; i < text.length; i++){
        let pismeno = text[i];
        if(pismeno === "O") {
            result += 0;
        } else if(pismeno === "o") {
            result += 0;
        } else if(pismeno === "I") {
            result += 1;
        } else if(pismeno === "i") {
            result += 1;
        } else if(pismeno === "E") {
            result += 2;
        } else if(pismeno === "e") {
            result += 2;
        } else if(pismeno === "A") {
            result += 3;
        } else if(pismeno === "a") {
            result += 3;
        } else if(pismeno === "S") {
            result += 4;
        } else if(pismeno === "s") {
            result += 4;
        } else if(pismeno === "B") {
            result += 5;
        } else if(pismeno === "b") {
            result += 5;
        } else {
            result += pismeno;
        }
    }
    return result;
}
let uloS = document.getElementById("uloS");
console.log(uloS);
sifra.addEventListener("click", function() {
    let zasifrovanyText = sifrujeme(textArea.value);
    uloS.textContent ="Zašifrovaný text: " + zasifrovanyText;
});


/* MAX 150 znakov */
function obmedzMaxZnaky(element) {
    let limit = 150;
    let text = element.value;
    let odpocitavac = limit - text.length;
  
    if (odpocitavac < 0) {
      element.value = text.substring(0, limit);
      odpocitavac = 0;
    }
    let clr = document.getElementById("pocetZnakov");
    if (odpocitavac === 0) {
        clr.style.color = "red";
    } else {
        clr.style.color = "";
    }
    
    document.getElementById("pocetZnakov").textContent = odpocitavac;
}