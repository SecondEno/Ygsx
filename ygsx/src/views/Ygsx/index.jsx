import React, { Component, Suspense, lazy } from 'react'

//引入样式组件
import PageContainer from './style'

// 引入功能组件
import Search from '../../components/Search'
import Swiper from '../../components/swiper'
import Menu from '../../components/menu'
import PlayBill from '../../components/playbill'
import NewsContainer from '../../components/news'
import Prolist from '../../components/prolist'
import Meat from '../../components/prolist/Meat'
import Wine from '../../components/prolist/Wine'
import Food from '../../components/prolist/Food'
import Snack from '../../components/prolist/Snack'
import Cookie from '../../components/prolist/Cookie'
// 引入connect高阶组件
import connect from './connect'


@connect
class Index extends Component {
    componentDidMount() {
        this.props.getSwiper()
        this.props.getMenu()
        this.props.getFirstList()
        this.props.getMeatList()
        this.props.getWineList()
        this.props.getFoodList()
        this.props.getSnackList()
        this.props.getCookieList()
    }
    render() {
        
        return (
            <PageContainer>
                <Search />
                {/* swiper模块 */}
                <Swiper />
                {/* menu板块 */}
                <Menu></Menu>
                {/* 海报的板块 */}
                <PlayBill></PlayBill>
                {/*促销消息 */}
                <NewsContainer />
                {/* 第一个商品列表 */}
                <Prolist />
                {/* 肉类的列表 */}
                <Meat />
                {/* 名优美酒的列表 */}
                <Wine />
                {/* 粮油调味 */}
                <Food />
                {/* 休闲食品 */}
                <Snack />
                {/* 烘焙糕点 */}
                <Cookie />
            </PageContainer>

        );
    }
}
export default Index;