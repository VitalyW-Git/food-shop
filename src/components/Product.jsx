import { useDispatch } from 'react-redux'
import {fetchProducts} from "../store/showcase.js";

export default function Product({title, price, id}){

    const dispatch = useDispatch()
    const addMushrooms = () => dispatch({type: 'basket/addMushrooms', payload: price}) 
    const deleteMushroom = async () => {
        const res = await fetch(`/api/products/${id}`, {method: 'delete'})
        console.log(res)
        await res.json()
        dispatch(fetchProducts())
    }


    return (
        <div className="row mb-2">
            <div className="col-8">{title}</div>
            <div className="col-2">{price} руб./кг</div>
            <div className="col-2">
                <button className="btn btn-primary" onClick={deleteMushroom}>Удалить</button>
            </div>
        </div>
    )
}
