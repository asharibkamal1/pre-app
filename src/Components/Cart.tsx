import { useEffect } from "react"
import MenuItem from "./MenuItem"

const Cart = ()  => {

    useEffect(()=>{
        
    })
    return <section className="max-w-sm mx-auto">
        <h1>Cart</h1>
    <ul>
    <MenuItem item={{
            name:'Biryani',
            quantity:2
        }} />
        <MenuItem 
        item={{
            name:'Chicken handi',
            quantity:1
        }}/>
        <MenuItem 
        item={{
            name:'Halwa Pori',
            quantity:5
        }}/>
    </ul>
    </section>
}

export default Cart