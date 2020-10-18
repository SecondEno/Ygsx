import React,{ useEffect} from 'react';
import { Grid } from 'antd-mobile';
import connect from './connect'

const index = (props) => {
  const data = props.menu.toJS()
    return (
        <Grid data={data}
        columnNum={4}
        renderItem={dataItem => (
          <div style={{ padding: '2.5px' }}>
            <img src={dataItem.icon} style={{ width: '.5rem', height: '.5rem' }} alt="" />
            <div style={{ color: 'rgb(51,51,51)', fontSize: '12px', marginTop: '.04rem' }}>
            <span>{dataItem.text}</span>
            </div>
          </div>
        )}
      />
    );
}

export default connect(index);