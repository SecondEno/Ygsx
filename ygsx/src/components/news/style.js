import styled from 'styled-components'
const newsContainer = styled.div`
    height:.33rem;
    width:100%;
    display:flex;
    background:#fff;
    >div:nth-of-type(1){
        height:.33rem;
        width:.8rem;
        position:relative;
        
        i{
            position: absolute;
            top: 0.07rem;
            left: .1rem;
            width: .68rem;
            height: .18rem;
            background: url('//img06.yiguoimg.com/e/web/161222/018522/134216/news.png') no-repeat;
            background-size: 100% 100%
        }
    }
    >div:nth-of-type(2){
        height:.33rem;
        flex:1;
        .my-carousel .v-item {
            height: .33rem;
            line-height: .33rem;
            padding-left: .1rem;
            }
    }
`
export default newsContainer