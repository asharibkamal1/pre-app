
type props={
    item :{
        name : string
        quantity: number
    }
}


const MenuItem = (props:props)  => {
    return <li className="flex gap-4 text-xl justify-between" >
        <h2>{props.item.name}</h2>
        <span>{props.item.quantity}</span>
    </li>
}

export default MenuItem