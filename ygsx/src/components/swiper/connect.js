import { connect } from 'react-redux'
// 引入actions creator操作redux中的数据源

import { getSwiper } from '../../store/actions/IndexAction'

// 将redux中的state数据映射到props中去
const mapStateToProps = state => ({
    swiper: state.getIn(['fruit','swiper'])
})

// 将dispatch方法映射到props中
const mapDispatchToProps = dispatch => ({
    // 定义组件中可以调用的方法
    getSwiper(){
        return dispatch(getSwiper())
    }
})


export default connect(mapStateToProps, { getSwiper })