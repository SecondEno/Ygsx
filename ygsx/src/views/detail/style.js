import styled from 'styled-components'

const Detailwrap = styled.div`
.cengji{
    position:sticky;
    background-color:#fff;
}
    .clear_fix:after{
        content:'';
        clear:both;
        height:0;
        overflow: hidden;
        display:block;
        visibility: hidden;
    }
    .swiper{
        height:3.75rem;
        width:100%;
    }
    .productInfor {
    padding: .1rem 0 0.4rem 0rem;
    background: #fff;
    margin-bottom: .1rem;
    padding-bottom: 0;
        .title {
            line-height: .2rem;
            padding-right: .2rem;
            font-size: .16rem;
            font-weight: 500;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: .2rem;
            }
        .subhead{
            padding-right: .2rem;
            font-size: .13rem;
            color: #808080;
            padding-top: .05rem;
            line-height: .3rem;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: .2rem;
            height: .3rem;
            span {
                color: #666;
            }
        }
        .price {
            display:flex;
            justify-content:space-between;
            position: relative;
            padding: 0rem 0 0rem;
            overflow: hidden;
            padding: .1rem 0 .2rem;
            padding-left: .2rem;
            padding-right: .2rem;
            span{
                font-size: .2rem;
                color: #EB3939
            }
            .area {
                font-size: .12rem;
                color: #999999;
                margin-top: .1rem;
                .name{
                    font-size: .12rem;
                    color: #999999;
                }
            }
        }
        .sevenDay {
            color: #aaaaaa;
            font-size: .12rem;
            padding: 0 .2rem;
            .dian {
                display: inline-block;
                width: .1rem;
                height: .1rem;
                border-radius: 50%;
                margin-right:0.02rem;
                border: 1px solid;
            }
        }
    }
    .norms {
        background: #fff;
        margin-bottom: .1rem;
        >div:nth-of-type(1){
            border-bottom:1px solid #ddd;
        }
        .title {
            position: relative;
            color: #999999;
            font-size: .14rem;
            line-height: .4rem;
            padding: .05rem .16rem;
            .choose.active {
                color: #01B27A;
                font-size: .16rem;
                padding: .05rem .15rem;
                box-sizing: border-box;
                border: 1px solid #01B27A;
                margin-left: .12rem;
                height: .16rem;
                line-height: .16rem;
                border-radius:0.2rem;
            }
            .num {
                position: absolute;
                left: .45rem;
                top: 0.1rem;
                width: .8rem;
                height: .3rem;
                margin-left: .1rem;
                .add,.cut{
                    position: relative;
                    width: .2rem;
                    height: .25rem;
                }
                .cut{
                    float:left;
                }
                .add{
                    float:right;
                }
                .cut i {
                    position: absolute;
                    left: .06rem;
                    top: .1rem;
                    width: .1rem;
                    height: .1rem;
                    background: url('//img06.yiguoimg.com/d/web/180226/01311/172807/cut2.png') no-repeat;
                    background-size: 100%;
                }
                .input {
                    float: left;
                    position: relative;
                    width: .34rem;
                    height: .27rem;
                    line-height: .3rem;
                    color: #333;
                    text-align: center;
                }
                .add i {
                    position: absolute;
                    left: .06rem;
                    top: .1rem;
                    width: .1rem;
                    height: .1rem;
                    background: url('//img06.yiguoimg.com/d/web/180110/00911/141220/add2.png') no-repeat;
                    background-size: 100%;
                }
            }
            .hint {
                padding-left: 1rem;
                color: #ff6353;
            }
        }
    }
    .address {
        background: #fff;
        padding: .1rem .16rem .1rem;
        margin-bottom: .1rem;
        display:flex;
        .title {
            color: #999999;
            font-size: .14rem;
            padding-right: .1rem;
            line-height: .15rem;
        }
        .addressDetail .add {
            position: relative;
            font-size: .14rem;
            color: #333;
            line-height: .14rem;
            width: 2rem;
            padding-bottom: .06rem;
        }
        .addressDetail .infor {
            line-height: .16rem;
            color: #333;
            font-size: .12rem;
        }

    }
    .evaluate {
        background: #fff;
        margin-bottom: .1rem;
        .title {
            position: relative;
            padding: .14rem;
            font-size: .14rem;
            color: #999;
            overflow: hidden;
            display:flex;
            justify-content:space-between;
            .number{
                padding-right:0.2rem;
            }
            .back {
                position: absolute;
                top: 0rem;
                right:.2rem;
                margin-top: .16rem;
                display: inline-block;
                width: .08rem;
                height: .16rem;
                background: url('//img05.yiguoimg.com/d/web/170830/00911/152542/arrow.png') no-repeat;
                background-size: 100% 100%;
            }
        }
        .content {
            position: relative;
            padding: .12rem .16rem .16rem;
            .txt {
                padding: .18rem 0 0rem;
                .left {
                    position: relative;
                    padding-left: .45rem;
                    box-sizing: border-box;
                    .userName {
                        position: absolute;
                        left: .4rem;
                        top: -.22rem;
                        padding-left: .1rem;
                    }                
                    .imgHeaer {
                        position: absolute;
                        left: 0;
                        top: -.22rem;
                        width: .34rem;
                        height: .34rem;
                        border-radius: 20px;
                        display: inline-block;
                    }                
                    .name {
                        line-height: 18px;
                        position: absolute;
                        top: -.22rem;
                        right: .32rem;
                        color: #808080;
                    }
                }


            }
            .text {
                font-size: .14rem;
                color: #333;
                line-height: .16rem;
                margin-left: .5rem;
            }
        }   
        .line-bottom:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: #ddd;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            -webkit-transform-origin: 0 100%;
            transform-origin: 0 100%;

        }
    }
    .detail {
        padding: .2rem 0 .6rem;
        background: #FFF;
        a{
            display: block;
            width: 1.2rem;
            padding: .08rem .08rem;
            border: 1px solid #aaa;
            color: #999;
            font-size: .16rem;
            margin: 0 auto;
            border-radius: 3px;
            text-align: center;
        }
    }
    .footer {
        height: .5rem;
        width:100%;
        padding-right: 0;
        display:flex;
        position:fixed;
        bottom:0;
        background:#fff;
        .btn1{
            display:flex;
            flex-direction:column;
            width:.7rem;
            font-size:.12rem;
            position:relative;
            justify-content:center;
            align-items:center;
            color: #000;
            .home {
                width: .22rem;
                height: .22rem;
                background: url('//img05.yiguoimg.com/d/web/170830/00913/153914/home.png') no-repeat;
                background-size: 100% 100%;
            }
            .cart{
                width: .22rem;
                height: .22rem;
                background: url('//img05.yiguoimg.com/d/web/170830/00911/152542/nav_list.png') no-repeat;
                background-size: 100% 100%;
            }
            .num{
                position:absolute;
                top: .02rem;
                right: .1rem;
                padding: 0 .04rem;
                display: inline-block;
                background: #ff6353;
                font-style: normal;
                color: #fff;
                border-radius: 4px;
                font-size:.12rem;
            }
        }
        .btn2{
            flex:1;
            margin-left:.1rem;
            text-align:center;
            line-height:.5rem;
            font-size:.20rem;
            background: #FB3D3D;
            color: #fff;
        }
    }
`
export default Detailwrap