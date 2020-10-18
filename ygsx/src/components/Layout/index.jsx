import React, { Component } from 'react';

import { TabBar } from 'antd-mobile'

import ygsx from '@/assets/icon/Layout/ia_300000003.png'
import ygsxActive from '@/assets/icon/Layout-active/ia_100000040.png'
import memu from '@/assets/icon/Layout/ia_300000004.png'
import memuActive from '@/assets/icon/Layout-active/ia_100000000648.png'
import cart from '@/assets/icon/Layout/ia_100000042.png'
import cartActive from '@/assets/icon/Layout-active/ia_300000005.png'
import center from '@/assets/icon/Layout/ia_300000006.png'
import centerActive from '@/assets/icon/Layout-active/ia_400000023.png'

//分类
import Categroy from '../../views/Cate'
import Ygsx from '../../views/Ygsx'
import Cart from '../../views/cart'
import My from '../../views/My'

class index extends Component {
    state = {
        // 默认显示的菜单页
        selectedTab: 'ygsx',
        hidden: false,
        // 是否全屏,让菜单到底部
        fullScreen: true
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 100 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#000"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="ygsx"
                        icon={<div style={{
                            width: '30px',
                            height: '22px',
                            background: 'url(' + ygsx + ') center center /  30px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '30px',
                            height: '22px',
                            background: `url(${ygsxActive}) center center /  30px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'ygsx'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'ygsx',
                            });
                        }}
                    >
                        {/* 内容 */}
                        {/* <div>首页</div> */}
                        <Ygsx></Ygsx>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '30px',
                                height: '22px',
                                background: `url(${memu}) center center /  30px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '30px',
                                height: '22px',
                                background: `url(${memuActive}) center center /  30px 21px no-repeat`
                            }}
                            />
                        }
                        title="分类"
                        key="cate"
                        selected={this.state.selectedTab === 'cate'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'cate',
                            });
                        }}
                    >
                        {/* 内容 */}
                        <Categroy></Categroy>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '30px',
                                height: '22px',
                                background: `url(${cart}) center center /  30px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '30px',
                                height: '22px',
                                background: `url(${cartActive}) center center /  30px 21px no-repeat`
                            }}
                            />
                        }
                        title="购物车"
                        key="cart"
                        selected={this.state.selectedTab === 'cart'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'cart',
                            });
                        }}
                    >
                        {/* 内容 */}
                        {/* <div>购物车</div> */}
                        <Cart></Cart>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '30px',
                                height: '22px',
                                background: `url(${center}) center center /  30px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '30px',
                                height: '22px',
                                background: `url(${centerActive}) center center /  30px 21px no-repeat`
                            }}
                            />
                        }
                        title="个人中心"
                        key="center"
                        selected={this.state.selectedTab === 'center'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'center',
                            });
                        }}
                    >
                        {/* 内容 */}
                        <My></My>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default index;
