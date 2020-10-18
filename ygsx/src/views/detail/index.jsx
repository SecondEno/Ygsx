import React, { useState, useEffect } from 'react';

// 组件引入
import Carousel from '../../components/Carousel'

// 引入样式组件
import DetailWrap from './style'
// 
import queryString from 'querystring'

import detailModel from '../../models/detailModel'




// 详情页展示
// 需要的组件
// 走马灯+卡片
const index = (props) => {
    const [goods, setGoods] = useState([])

    let code = queryString.parse(props.location.search.slice(1)).commodityCode

    useEffect(() => {
        let data = async () => {
            let ret = await detailModel.getDetailData(code)
            setGoods(ret)
        }
        data()
    }, []);
    console.log(goods)
    return (
        <DetailWrap>
            {
                goods.length === 0 ? <></> : (
                    <><div className='cengji'>
                        <div className='swiper'>
                            <Carousel picData={goods.Pictures} />
                        </div>
                        <div className="productInfor">
                            <p className="title">{goods.CommodityName}</p>
                            <p className="subhead">
                                <span>{ goods.SubTitle}</span>
                            </p>
                            <div className="price">
                                <p className="priceIn">
                                    <span className="priceRed">
                                        <i>¥</i>{goods.OriginalPrice}
                                    </span>
                                </p>
                                <p className="area">
                                    产地：<span className="name">{goods.PlaceOfOrigin}</span>
                                </p>
                            </div>
                            <div className="sevenDay line-top backGauge">
                                <span className="dian"></span>
                                不支持7天无理由退货
                            </div>
                        </div>
                        <div className="norms">
                            <div className="title line-bottom">
                                规格<span className="choose active">{goods.Spec}</span>
                            </div>
                            <div className="title line-bottom">
                                数量
                                <div className="num">
                                    <span className="cut line-all active"><i></i></span>
                                    <span className="input line-bottom">{goods.State}</span>
                                    <span className="add line-all"><i></i></span>
                                </div>
                            </div>
                        </div>

                        <div className="address clear">
                            <p className="title">送至</p>
                            <div className="addressDetail">
                                <p className="add"><span></span>{goods.ShippingAddress}</p>
                                <p className="infor"><span>有货</span>
                                    {goods.DeliveryTips}
                                </p>
                            </div>
                        </div>
                        <div className="evaluate">
                            <p className="title line-bottom">
                                <span className="count">评价（115）</span>
                                <span className="number">查看全部 <i className="back"></i></span>
                            </p>
                            <div className="content line-bottom">
                                <div className="txt clear">
                                    <div className="left clear_fix">
                                        <img alt="" className="imgHeaer" src="https://img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg" />
                                        <p className="userName">13***62</p>
                                        <span className="name">2020-10-17</span>
                                    </div>
                                </div>
                                <p className="text">超时未评价，系统默认好评</p>
                            </div>
                        </div>
                        <div className="detail"><a>查看图文详情</a></div>
                        <div className="footer line-top">
                            <a className="btn1">
                                <i className="home"></i>首页
                            </a>
                            <a className="btn1">
                                <i className="cart"></i> 购物车<i className="num">4</i>
                            </a>
                            <a className="btn2 btnRed">加入购物车</a>
                        </div>
                        </div>
                    </>
                )
            }

        </DetailWrap>
    );
}
export default index