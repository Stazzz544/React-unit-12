import s from './cart.module.css'

function Cart (props) {
	return(

		<div  className={s.wrapper}>
			<div className={`${s.flexWrapper} ${s.flexWrapperMain}`}>
				<div className={s.flexItem}>Name</div>
				<div className={s.flexItem}>Price</div>
				<div className={s.flexItem}>Count</div>
				<div className={s.flexItem}>TotalPrice</div>
				<div className={s.flexItem}>Add more</div>
				<div className={s.flexItem}>Delete</div>
			</div>

			{Object.keys(props.cart).map(item => 
			<div key={item + props.goodsObj[item]['title']} >
				<div className={s.flexWrapper}>
					<div className={s.flexItem}>{props.goodsObj[item]['title']}</div>
					<div className={s.flexItem}>{props.goodsObj[item]['cost']}</div>
					<div className={s.flexItem}>{props.cart[item]}</div>
					<div className={s.flexItem}>{props.goodsObj[item]['cost'] * props.cart[item]}</div>
					<div className={s.flexItem}>
						<button data-key={props.goodsObj[item]['articul']} 
								  className='plus'>+</button>
						<button data-key={props.goodsObj[item]['articul']} 
								  className='minus'>-</button>
					</div>

					<div className={s.flexItem}>
						<button>Удалить товар</button>
					</div>
				</div>
			</div>
			)}

		</div>


		
	)
}

export default Cart

// {Object.keys(props.cart).map(item => 
// 	<div key={item + props.goodsObj[item]['title']}>
// 		{props.goodsObj[item]['title']} - {props.cart[item]}
// 	</div>)}