import { Link } from "react-router-dom"
import ThingCard from "../../components/ThingCard/ThingCard"

const HarrisonThings = (props) => {
  return ( 
    <>
          <h1>Harrison's Things</h1>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}

export default HarrisonThings