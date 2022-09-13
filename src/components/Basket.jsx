import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/showcase'
import classNames from 'classnames'

export default function Basket () {


    const total = useSelector(state => state.basket.total)
    const isSpoiled = useSelector(state => state.basket.isSpoiled)
    const dispatch = useDispatch()
    const toggleSpoiled = () => {
        dispatch({type: 'basket/toggleSpoiled'})
        const url = isSpoiled ? '/api/products' : 'nowhere'
        dispatch(fetchProducts(url))
    }

    const btnClass = classNames({
        'btn': true,
        'btn-warning': !isSpoiled,
        'btn-success': isSpoiled
    });

    return (
        <>
            <span className="text-light fw-bold">Корзина:&nbsp;</span>
            <span className="text-light">{total || 0}</span>
            <span className="text-light">&nbsp;руб.&nbsp;&nbsp;&nbsp;</span>
            <button className={btnClass} style={{width: '12rem'}} onClick={toggleSpoiled}>{isSpoiled ? 'Починить' : 'Испортить'}</button>
        </>
    )
}