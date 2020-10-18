import styled from 'styled-components'
import searchIcon from '@/assets/images/home-search.png'

const Searchwrap = styled.div`
        z-index:100;
        height:.44rem;
        width:100%;
        display:flex;
        /* position:fixed; */
        top:0;
        left:0;
        box-sizing: border-box;
        padding: 0.05rem 0.05rem 0.05rem 0.6rem;
        background: linear-gradient(90deg,#39da85,#01b27a);
        >a{
            position: absolute;
            top: .06rem;
            left: 0;
            width: .6rem;
            height: .34rem;
            line-height: .34rem;
            text-align: center;
            font-size: .16rem;
            color: #fff;
            }   
        >div{
            flex:1;
            position: relative;
            box-sizing: border-box;
            height: .34rem;
            padding: 0 .4rem 0 .6rem;
            border-radius: .45rem;
            background: #fff;
            >a{
                position: absolute;
                top:0.03rem;
                left: .14rem;
                width: .3rem;
                height: .3rem;
                background: url(${searchIcon}) no-repeat;
                background-size: 100% 100%;
            }
            >span{
                position: absolute;
                top: 0.02rem;
                left: .44rem;
                width: 1.5rem;
                height: .34rem;
                line-height: .34rem;
                font-size: .14rem;
                color: #999;
            }
        }
    
    
`

export default Searchwrap