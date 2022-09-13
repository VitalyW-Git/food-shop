import { useDispatch } from 'react-redux'

export default function Product({title, price, id}){

    const dispatch = useDispatch()
    const addMushrooms = () => dispatch({type: 'basket/addMushrooms', payload: price}) 

    return (
        <div className="row mb-2">
            <div className="col-8">{title}</div>
            <div className="col-2">{price} руб./кг</div>
            <div className="col-2">
                <button className="btn btn-primary" onClick={addMushrooms}>В корзину</button>
            </div>
        </div>
    )
}
