for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

const cardGiver = ["Guadalupe", "Ollie", "Aki"];


function writeCards(cardGiver, eventName) {
  const cardGiverArray = [];
    for (let i = 0; i < cardGiver.length; i++) {
      cardGiverArray.push(`Thank you, ${cardGiver[i]}, for the wonderful surprise gift!`);
      }
      // const map1 = cardGiver.map(name => {console.log(name)
      // return `Thank you, ${name}, for the wonderful surprise gift!`} );
      // console.log(map1);
      return cardGiverArray;
}

function countDown() {
  for (let i = 0; i < 11; i++) {
    console.log(i);
    }
}