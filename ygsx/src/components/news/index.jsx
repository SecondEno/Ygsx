import React from 'react';
import { Carousel } from 'antd-mobile';
import NewsContainer from './style'
const index = () => {
    return (
        <NewsContainer>
            <div>
                <i></i>
            </div>
            <div>
                <Carousel className="my-carousel"
                vertical
                dots={false}
                dragging={false}
                swiping={false}
                autoplay
                infinite
                >
                    <div className="v-item" >不良信息反馈</div>
                    <div className="v-item" >关于营业资质质疑的回应</div>
                    <div className="v-item" >天天特价生鲜水果配送</div>
                </Carousel> 
            </div>


        </NewsContainer>
    );
}

export default index;