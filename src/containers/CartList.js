import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../components/Cart'
import { increment, decrement, nullify } from '../store/cartSlice';
import {
    selectGoods
} from '../store/goodsSlice';

import {
    selectCart
} from '../store/cartSlice';

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
	 const dispatch = useDispatch();
    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});



	 let clickHandler = (event) => {
		event.preventDefault();
		let t = event.target;
		if (t.classList.contains('plus')) {
			dispatch(increment(t.getAttribute('data-key')));
		} else if (t.classList.contains('minus')) {
			dispatch(decrement(t.getAttribute('data-key')));
		} else if (t.classList.contains('null')) {
			dispatch(nullify(t.getAttribute('data-key')));
		}
  }


    return (
        <div onClick={clickHandler}>
				<Cart cart={cart} 
						goodsObj={goodsObj}
				/>
        </div>
    );
}

export default CartList;