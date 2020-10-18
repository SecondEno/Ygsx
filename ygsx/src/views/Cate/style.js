import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height:.44rem;
  background:#ee742f;
  display:flex;
  align-items:center;
  justify-content:center;
  ul{
      width:1.4rem;
      height:.3rem;
      display:flex;
      position:relative;
      border:1px solid #fff;
      // 有定位，有层级
      z-index:0;
      border-radius:.15rem;
      li{
          // 平均占位 项目属性
          flex:1;
          line-height:.3rem;
          text-align:center;
          color:#fff;
          // 最后一个li
          &:last-child{
            position:absolute;
            width:50%;
            height:.3rem;
            background:#fff;
            z-index:-1;
            border-radius:.15rem;
            // 位移 左边
            transform:translate(0,0);
            // 过渡动画
            transition:all 1s ease-in;
            &.right{
                transform:translate(100%,0);
            }
          }
          &.active{
            color:#ee742f;
          }
      }
  }
`

export const CateListContainer = styled.div`
    height:100%;
    display:flex;
    > div:first-child{
        width:.9rem;
        > ul{
            height:100%;
            // 允许Y轴滚动
            overflow-y:scroll;
            li{
                height:.5rem;
                text-align:center;
                line-height:.5rem;
                background:#f3f3f3;
                
                &.active{
                    background:#fff;
                    span{
                        height:.4rem;
                        width:100%;
                        display:inline-block;
                        height:80%;
                        border-left:4px solid #3a9f7d;
                        line-height:.4rem;
                    }
                }
            }
        }
    }
    >div:last-child{
        // 剩余空间满屏占用
        flex:1;
        background:#fff;
        padding:.2rem .1rem;
        >ul{
            display:flex;
            flex-wrap:wrap;
            // 允许Y轴滚动
            overflow-y:scroll;
            height:100%;
            align-content:flex-start;
            li{
                display:flex;
                width:33.33%;
                text-align:center;
                line-height:.5rem;
                color:#666;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                >img{
                    display:flex;
                    height:.57rem;
                    width:.57rem;
                    justify-content:center;
                }
            }
        }
    }

`



export const CateContainer = styled.div`
  height:100%;
  // 溢出隐藏
  overflow:hidden;
`
