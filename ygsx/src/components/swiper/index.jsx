import React, { Component } from 'react';

// 测试用axios请求，看mock的配置是否生效，是否返回跨域提示
import axios from 'axios'



// 引入antd组件
import { Carousel } from 'antd-mobile'
// 引入图片滑块的图片
import Swiper1 from '@/assets/images/swiper1.jpg'
import Swiper2 from '@/assets/images/swiper2.jpg'
import Swiper3 from '@/assets/images/swiper3.jpg'
import Swiper4 from '@/assets/images/swiper4.jpg'
import Swiper5 from '@/assets/images/swiper5.jpg'


// 引入样式组件
import {SwiperContainer} from './style';

// 引入与redux建立连接的高阶组件
import connect from './connect'


@connect
class index extends Component {

    // 当直接使用静态图片时，不能设置为autoplay为false，因为加载图片需要时间，这样会造成图片的加载不成功
    render() {
        let swiper = this.props.swiper ? this.props.swiper.toJS() : []
        return (
            <SwiperContainer>
            <Carousel
            autoplay={ true }
            infinite={true}>
                {
                    swiper.map( (item,index)=>(
                        <img src={ item['img'] } key={index}  style={{ width: '100%', verticalAlign: 'top' }}/>
                    ))
                }
            </Carousel>
            </SwiperContainer>
        );
    }
}

export default index;