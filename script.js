


var movies = [
  "Spiderman Far From Home",
  "Spiderman Homecoming",
  "Harry Potter and the Goblet of Fire",
  "Thor Ragnarok",
  "Avengers Endgame",
  "Avengers Infinty War",
  "Thor Love and Thunder",
  "Thor",
  "Iron Man 3",
  "Artemis Fowl",
  "Star Wars The Phantom Menace",
  "Star Wars The Attack Of The Clones",
  "Star Wars The Revenge Of The Sith",
  "Star Wars A New Hope",
  "Star Wars The Empire Strikes Back",
  "Star Wars The Return Of The Jedi",
  "Star Wars The Force Awakens",
  "Star Wars The Last Jedi",
  "Star Wars The Rise Of Skywalker",
  "Star Wars Rogue One",
  "Star Wars Solo",
  "Star Wars Rebels",
  "Star Wars The Clone Wars",
  "Star Wars The Resistance",
  " Iron Man 2",
  "Iron Man 1",
  "Civil War",
  "National Treasure",
  "Minions",
  "National Treasure 2",
  "Godzila",
  "Percy Jackson",
  "The 40-Year-Old Virgin",
  "51 Birch Street",
  "The Adventures of Sharkboy and Lavagirl in 3-D",
  "on Flux",
  "Aliens of the Deep",
  "Alone in the Dark",
  "The Amityville Horror",
  "Are We There Yet?",
  "The Aristocrats",
  "Assault on Precinct 13",
  "Bad News Bears",
  "The Ballad of Jack and Rose",
  "Batman Begins",
  "The Baxter",
  "Be Cool",
  "Beauty Shop",
  "Because of Winn-Dixie",
  "Bee Season",
  "Bewitched",
  "Bigger Than the Sky",
  "Boogeyman",
  "Brick",
  "Brokeback Mountain",
  "Broken Flowers",
  "The Brothers Grimm",
  "Capote",
  "Casanova",
  "The Cave",
  "Charlie and the Chocolate Factory",
  "Cheaper by the Dozen 2",
  "Chicken Little",
  "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
  "The Chumscrubber",
  "Cinderella Man",
  "Coach Carter",
  "Constantine",
  "Corpse Bride",
  "The Crow: Wicked Prayer",
  "Cruel World",
  "Cry_Wolf",
  "Cursed",
  "Daltry Calhoun",
  "Dark Water",
  "Deuce Bigalow: European Gigolo",
  "Derailed",
  "The Derby Stallion",
  "The Devil's Rejects",
  "Diary of a Mad Black Woman",
  "Dirty Love",
  "Dominion: Prequel to the Exorcist",
  "Domino",
  "Don't Come Knocking",
  "Doom",
  "Dreamer",
  "The Dukes of Hazzard",
  "Duma",
  "The Dying Gaul",
  "Elektra",
  "Elizabethtown",
  "Enron: The Smartest Guys in the Room",
  "Everything Is Illuminated",
  "The Exorcism of Emily Rose",
  "The Family Stone",
  "Fantastic Four"

]


var movie;
var ignoredCharacters = [",", ":", "?", "!", "?", "-", "_", "&", "'", " "];
var foundThings = [];
var choices = [];
var i;
var img = document.getElementById("inside");
function setUpKeys() {
  document.getElementById("keyboard").innerHTML = "";
  var keys = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  keys.forEach(myKey => {
    var template = `<button class="key" onclick="onUserInput('${myKey}')">${myKey}</button>`;
    document.getElementById("keyboard").innerHTML += template;
  });
}


function renderHangman(level) {
                                                    
 img.src = `https://github.com/utkarshtrivedi/assets/blob/master/images/${level}.png?raw=true`;

}







function onUserInput(myKey) {
  choices.push(myKey)
  makelines(movie);

}


function makelines(thing) {
  var my = thing.split("");

  var lines = "";
  my.forEach(letter => {

    if (choices.lastIndexOf(letter.toUpperCase()) < 0 && letter != " " && letter != ":" && letter != "," && letter != "&" && letter != "'" && letter != "!") {
      lines += "<h1 style='display:inline;font-size:50px'>" + "__ " + "</h1>";

    }

    else{
      lines += "<h1 style='display:inline;font-size:50px'>" + letter + "</h1>"
foundThings.push(letter)


    }
    var num;
for(var i = 0;i < my.length;i++){
var b = choices[i];
num = 0;
 if(b !== letter){
   
 num++
renderHangman(num)

 }
 
}

  });




  document.getElementById("question").innerHTML = lines;

}



function game() {
  var random = Math.floor(Math.random() * 100) + 1;
  document.getElementById("sam").src = "";
  choices = [];
  foundThings = [];
  movie = movies[random];
  console.log(movie)
  makelines(movie);
  setUpKeys();
 document.getElementById("inside").src = `https://raw.githubusercontent.com/utkarshtrivedi/assets/master/images/0.png`

}




game()


document.getElementById("reset").onclick = game;

function win() {
  document.getElementById("keyboard").innerHTML = "";
  document.getElementById("sam").src = `https://github.com/utkarshtrivedi/assets/blob/master/images/you-win.png?raw=true`;
}


function getHint(movie) {
  var word = movie.split("");
  var hint1 = word[0]
  var hint2 = word[1]
  var hint = hint1 + hint2;
  document.getElementById("hint").innerText = hint;
}


