export default function Cart(){
    return(
        <div>
            <h4 className="title">Cart</h4>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>

    )


}

function CartItem(){
    return (
        <div className="Cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}