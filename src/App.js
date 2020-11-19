import {useState, useEffect} from 'react';
import Person from './components/Person';

function App() {
  // useState is a function that returns an array with two items in it
  //by doing this:
  const [starwarsCharacters, setStarwarsCharacters] = useState({results:[]});
  //we now have two variables that hold the values from the array
  // the first one (starwarsCharacters) is our state and has the default value that we pass as an argument to the
  //useState function (here it is an empty object {})
  // the later one (setStarwarsCharacters) is a function we use to change the value of
  //our state (starwarsCharacters)

  //the old way of doing this would be to do something like:
  // const myArray = useState({});
  // const starwarsCharacters = myArray[0];
  // const setStarwarsCharacters = myArray[1];


  //example of destructuring an object:
  //const myObject = {name: "kalli", age: 33};
  //The old way of getting the data into variables:
  // const name = myObject.name;
  // const age = myObject.age;

  //The new way (destructuring)
  //const {name, age} = myObject;
  

  useEffect(function(){
    fetch("https://swapi.dev/api/people/")
    .then(r=>r.json())
    .then(json=>{
      //This would be very wrong!!!
      //starwarsCharacters = json
      setStarwarsCharacters(json)
    })
  },[])

  return (
    <div>
     <h1>Starwars!!!</h1>
     {starwarsCharacters.results.map(person=>(<Person info={person}></Person>))}
    </div>
  );
}

export default App;
