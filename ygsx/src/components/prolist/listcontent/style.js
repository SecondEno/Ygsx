import styled from 'styled-components'

const Prolist = styled.div`
  /* display:flex;
overflow-y:scroll; */
ul{
    padding:0 .05rem;
    width:100%;
    box-sizing:border-box;
    display:flex;
    flex-wrap:wrap;
    
    li{
        width:50%;
        height:2.34rem;
        padding:0.05rem;
        box-sizing:border-box;
        .proitem{
            width:100%;
            height:100%;
            max-width: 3.78rem;
            box-shadow: 0 0 5px rgba(0,0,0,.1);
            text-align: center;
            border-radius: .04rem;
            background: #fff;
            .pic{
                width:100%;
                img{
                    width:100%
                }
            }
            .info{
                padding:0 0.1rem .2rem .1rem;
                text-align:left;
                .name{
                    height:.2rem;
                }
                .name,.price{
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .price{
                    margin-top: .04rem;
                    font-size: .14rem;
                    height:.24rem;
                    line-height: .24rem;
                    color: #aaa;
                    strong{
                        margin-right:.04rem;
                        font-weight: bold;
                        color: #fb3d3d 
                    }
                    i{
                        width: .24rem;
                        height: .24rem;
                        background: url('//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png') no-repeat;
                        background-size: 100% 100%;
                        float: right;
                        border-radius: 50%;
                        background-color: #01b27a;
                    }
                }
            }
        }
    }
}

`

export default Prolist