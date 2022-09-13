import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../store/showcase'
import Product from './Product'
import Progress from './Progress'
import Failure from './Failure'

export default function Showcase () {

    const dispatch = useDispatch()
    const products = useSelector(state => state.showcase.products)
    const fetchStatus = useSelector(state => state.showcase.status)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <>
            {fetchStatus === 'loading' && <Progress />}
            {fetchStatus === 'failed' && <Failure />}
            {fetchStatus === 'succeeded' && products.map(el => <Product {...el} key={el.id} />)}
        </>
    )
}