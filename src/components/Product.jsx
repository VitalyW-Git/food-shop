import { useDispatch } from 'react-redux'
import {fetchProducts} from "../store/showcase.js";
import Editor from "./Editor";

export default function Product({title, price, id}){

    const dispatch = useDispatch()
    const deleteMushroom = async () => {
        const res = await fetch(`/api/products/${id}`, {method: 'delete'})
        await res.json()
        dispatch(fetchProducts())
    }

    return (
        <div className="row mb-2">
            <div className="col-6">{title}</div>
            <div className="col-2">{price} руб./кг</div>
            <div className="col-2">
                <Editor
                    title={title}
                    price={price}
                    id={id}
                />
            </div>
            <div className="col-2">
                <button className="btn btn-primary" onClick={deleteMushroom}>Удалить</button>
            </div>
        </div>
    )
}
