// an example of how to make short small components:
// export default ({info}) => (
//     <div key={info.name}>
//       <h2>{info.name}</h2>
//       <p>he is: {info.height}CM tall</p>
//       <p>he weights: {info.mass}KG</p>
//     </div>
//   )

  const Person = function(props){
      console.log(props)
      const {name, height, mass} = props.info;
      return(
            <div key={name}>
              <h2>{name}</h2>
              <p>he is: {height}CM tall</p>
              <p>he weights: {mass}KG</p>
            </div>
          )
  }

  export default Person