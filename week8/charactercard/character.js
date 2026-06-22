const characterCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'snortleblat.jpg',

levelUp: function () {
    this.level+=1
},
attacked: function () {
    this.health-=20

    if (this.health <= 0) 
        alert (this.name + " has died!")
},

};

function loadCharacter() {
    document.querySelector("#characterName").textContent = characterCard.name;
    document.querySelector("#characterClass").textContent = characterCard.class;
    document.querySelector("#characterLevel").textContent = characterCard.level;
    document.querySelector("#characterHealth").textContent = characterCard.health;
    document.querySelector("#characterImage").src = characterCard.image;
}

loadCharacter ();

document.querySelector("#levelUp").addEventListener("click", function () {
    characterCard.levelUp()
    loadCharacter()
});

document.querySelector("#attacked").addEventListener("click", function () {
    characterCard.attacked()
    loadCharacter()
});
