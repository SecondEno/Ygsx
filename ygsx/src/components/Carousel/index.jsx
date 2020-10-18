import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

class index extends React.Component {
  state = {
    picData:[],
    imgHeight:375
  }
  componentDidMount() {

    console.log(this.props )
    this.setState( state => state.picData = this.props.picData )
  }

  render() {
    return (

        <Carousel
          autoplay={false}
          infinite
        >
          {this.state.picData.map( (item,index) => (
              <div key={ index } >
                <img
                
                src={item}
                alt=""
                style={{ height:'100%', width:'100%'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
              </div>
              
          ))}
        </Carousel>

    );
  }
}
export default index