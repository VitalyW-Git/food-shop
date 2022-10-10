import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addNewProduct } from "../store/basket.js";

export default function Editor({title, price, id}) {
    const label = `editor-${id}`
    const [titleValue, setTitle] = useState(title)
    const [priceValue, setPrice] = useState(price)
    const dispatch = useDispatch();

    const saveProduct= () => {
        dispatch(addNewProduct({id, titleValue, priceValue}));
    }
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#`+label}>
                Редактировать
            </button>

            <div class="modal fade" id={label} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Правка продукта</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" >Название</span>
                                <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={titleValue}/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" >Цена</span>
                                <input type="text" className="form-control" onChange={e => setPrice(e.target.value)} value={priceValue}/>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            <button type="button" class="btn btn-primary" onClick={saveProduct}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}