import styled from 'styled-components'

const Cartwrap = styled.div`
    width:100%;
    height:1rem;
    padding:.1rem .16rem .1rem;
    margin-top:.5rem;
    background:#fff;
    position:relative;
    .card{
        width:100%;
        height:100%;
        display:flex;
        background:#fff;
        position:relative;
        .check{
            width:.26rem;
            display:flex;
            align-items:center;
            i{
                display: inline-block;
                width: .2rem;
                height: .2rem;
                background: url('//img06.yiguoimg.com/d/web/180119/01641/141347/check1.png') no-repeat;
                background-size: 100%;
                &.active{
                    background-image: url('//img06.yiguoimg.com/d/web/180508/01316/175209/check2.png');
                }
            }  
        }
        .img{
                width:.8rem;
                img{
                    width:100%;
                    height:100%;
                }
        }
        .text{
                flex:3;
                padding-top:.1rem;
                h2{
                    width:1.7rem;
                    height:.3rem;
                    line-height:.14rem;
                    font-size:.14rem;
                }
                p:nth-of-type(1){
                    height:.16rem;
                    line-height:.16rem;
                }
                p:nth-of-type(2){
                    margin-left:.05rem;
                    line-height:.16rem;
                    height:.16rem;
                    color:#fb3d3d;
                    font-size:.16rem;
                }
        }
        .del{
                flex:1;
                i{
                    display: block;
                    width: .4rem;
                    height: .4rem; 
                    background: url('//img07.yiguoimg.com/d/web/180119/01642/141511/del.png') bottom right no-repeat;
                    background-size: 0.15rem 0.16rem;
                }
        }
        .num{
                position: absolute;
                right: .15rem;
                top: .6rem;
                width: .8rem;
                height: .22rem;
                border:1px solid #9c9c9c;
                border-radius:.06rem;
                .cut{
                    float: left;
                    position: relative;
                    width: .2rem;
                    height: .22rem;
                    i {
                        position: absolute;
                        left: .06rem;
                        top: .06rem;
                        width: .1rem;
                        height: .1rem;
                        background: url('//img06.yiguoimg.com/d/web/180226/01311/172807/cut2.png') no-repeat;
                        background-size: 100%;
                    }
                }
                .input {
                    float: left;
                    position: relative;
                    width: .3rem;
                    height: .22rem;
                    line-height: .22rem;
                    color: #333;
                    font-size:.16rem;
                    text-align: center;
                }
                .add{
                    float: left;
                    position: relative;
                    width: .2rem;
                    height: .22rem;
                    i {
                        position: absolute;
                        left: .06rem;
                        top: .06rem;
                        width: .1rem;
                        height: .1rem;
                        background: url('//img07.yiguoimg.com/d/web/180119/01642/141511/add2.png') no-repeat;
                        background-size: 100%;
                    }
                }
        }
    }
    
    .cart-total {
        position: fixed;
        left: 0;
        bottom: .53rem;
        width: 100%;
        height: .5rem;
        padding: 0 1.2rem 0 0;
        background: #fff;
        .allcheck{
            display:flex;
            align-items:center;
            position: absolute;
            top: 0.1rem;
            left: 0;
            width: .7rem;
            height: .2rem;
            padding: .16rem 0 .16rem .1rem;
            font-size: .14rem;
            i {
                display: inline-block;
                width: .2rem;
                height: .2rem;
                margin: 0 .06rem 0 0;
                background: url('//img06.yiguoimg.com/d/web/180119/01641/141347/check1.png') center no-repeat;
                background-size: 100%;
                &.active{
                    background-image: url('//img06.yiguoimg.com/d/web/180508/01316/175209/check2.png');
                }
            }
        }
        .text {
            padding: .07rem 0;
            line-height: .2rem;
            font-size: 11px;
            text-align: right;
        }
        .btn{
            position:absolute;
            top:0;
            right:0;
            a{
                display: block;
                width: 1.15rem;
                height: .5rem;
                background: #fb3d3d;
                line-height: .5rem;
                font-size: .2rem;
                color: #fff;
                text-align: center;
            }
        }
    }

`
export default Cartwrap