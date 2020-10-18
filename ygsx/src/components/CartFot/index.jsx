import React from 'react';
import CartCard from './style'

const index = () => {
    return (
            <CartCard>
            <div className='cart-total'>
                <div className = 'allcheck'>
                    <i className='active'></i>全选
                </div>
                <div className='text'>
                    <p>合计(不含运费)：<b className="red">￥4580.00</b></p>
                    <span>已优惠: ￥0.00</span>
                </div>
                <div className='btn'>
                    <a>去结算</a>
                </div>
            </div>
    </CartCard>            

    );
}

export default index;
