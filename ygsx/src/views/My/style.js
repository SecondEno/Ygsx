import styled from 'styled-components'

export const MyDiv = styled.div`
.jiange {
  margin: .3rem 0;
}
.cardbackground {
  background: #2dd282;

}

.cardbody-header{
    /* position: relative;
    display: inline-block;
    height: 2.26rem;
    margin-top: .9rem;
    padding: 0 .32rem 0 2.85rem;
    box-sizing: border-box; */
    display: flex;
    align-items: center;
    color: white;
    margin-bottom: 37px;

    /* 头像外框 */
    .imgBorder {
      display: inline-block;
      /* position: absolute;
      left: 0.5rem;
      top: 0;
      border: .13rem solid rgba(255, 255, 255, .5); */
      /* width: 2.26rem;
      height: 2.26rem; */
      width: 76px;
      height: 76px;
      border-radius: 50%;
      background: rgba(255, 255, 255, .5);
      margin-right: 10px;

      /* 头像图片 */
      .touxiang {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }


}





`