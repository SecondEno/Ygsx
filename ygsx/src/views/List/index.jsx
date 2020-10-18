import React, { useState, useEffect } from 'react';

import Prolist from '../../components/prolist/listcontent'

import queryString from 'querystring'

import listModel from '../../models/listModel'

import { fromJS } from 'immutable'

const index = (props) => {
    const [goods, setGoods] = useState([])
    let code = queryString.parse(props.location.search.slice(1)).commodityCode
    useEffect(() => {
        let data = async () => {
            let ret = await listModel.getDetailData(code)
            ret= fromJS(ret)
            setGoods(ret)
            console.log(ret)
        }
        data()
    }, []);

    return (
        <div>
            <Prolist data={goods} />
        </div>
    );
}

export default index;
