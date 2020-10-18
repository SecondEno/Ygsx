import styled from 'styled-components'

const Cartwrap = styled.div`
    width:100%;
    height:0.6rem;
    /* padding:.1rem .16rem .1rem; */
    margin-top:.5rem;
    background:#fff;
    position:absolute;
    bottom:0;

    
    .cart-total {
        position: absolute;
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