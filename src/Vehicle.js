
export default function Vehicle(props) {
  return <div className="vehicle">
    {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}

    {/* if the vehicle props is a car, render a '🚗' emoji */}
    {props.type === 'car' && '🚗'}
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    {props.type === 'truck' && '🚚'}
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    {props.type === 'bus' && '🚌'}
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    
  </div>;
}