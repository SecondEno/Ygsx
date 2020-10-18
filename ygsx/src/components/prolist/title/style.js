import styled from 'styled-components'
import leftIcon from '@/assets/images/left.png'

const Tt = styled.div`
    margin-top:.1rem;
    height:.44rem;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    span:nth-of-type(1){
        width: .4rem;
        height: .09rem;
        margin-top:0.04rem;
        background: url(${leftIcon}) 0 0 no-repeat;
    }
    h3{
        font-size:.14rem;
        text-align:center;
    }
    span:nth-of-type(2){
        width: .4rem;
        height: .09rem;
        margin-top:-.04rem;
        background: url(${leftIcon}) 0 0 no-repeat;
        transform: rotate(180deg);
    }

`
export default Tt