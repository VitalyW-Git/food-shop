// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addProduct as _addProduct } from '../store/showcase'
import Product from './Product'
import Progress from './Progress'
import Failure from './Failure'

export function Showcase() {

    // const withAuth = document.cookie
    const dispatch = useDispatch()
    const products = useSelector(state => state.showcase.products)
    const fetchStatus = useSelector(state => state.showcase.status)

    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [dispatch])

    function addProduct(e) {
        e.preventDefault()
        let {title, price} = e.target
        title = title.value
        price = price.value
        dispatch(_addProduct({title, price}))
    }

    return (
        <>
            <form onSubmit={addProduct}>
                <input type="text" placeholder="Название продукта" name="title"/>
                <input type="text" placeholder="Цена продукта" name="price"/>
                <input type="submit" value="Добавить продукт"/>
            </form>
            {fetchStatus === 'loading' && <Progress />}
            {fetchStatus === 'failed' && <Failure />}
            {fetchStatus === 'succeeded' && products.map(el => <Product {...el} key={el.id} />)}
        </>
    )
}