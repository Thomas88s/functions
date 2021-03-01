
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(63)
console.log('dogAge: ', dogAge);


const bestInShow = (breed) => {
  const statement = "My favorite dog breed is " + breed; 
  return statement
}

const myFavorite = bestInShow("blah blah")
console.log(myFavorite);

const bestestInShow = (breed) => {
    if (breed !== "meow") {
     return "My favorite dog breed is " + breed;
    } else { 
      return  alert("There's a cat in here!"),
       "There's a cat in here!";     
    }
}

const whewDoggie = bestestInShow("meow")
console.log('whewDoggie: ', whewDoggie);


const add = (num1, num2, num3, num4, num5, num6) => {
   const answer = ((num1 + num2) / num3) * (num4 * (num5 - num6));
   return answer
}
 const whatIsIt = add(10, 20, 30, 40, 50, 60)
 console.log('whatIsIt: ', whatIsIt);

 const go = (direction, speed) => {
     if (speed > 75) {
         return 'Slow down you madman, your doing ' + speed + '!!!';
     } else {
         return "The car is moving " + direction + " at " + speed + "mph.";
     }
 }
 
 const goGoGo = go("in circles", 76)
 console.log('goGoGo: ', goGoGo);
 
//  till next time