import { connect } from 'react-redux'
// 引入actions creator操作redux中的数据源


// 将redux中的state数据映射到props中去
const mapStateToProps = state => ({
    menu: state.getIn(['fruit','menu']),
    firstList: state.getIn(['fruit','firstList']),
    meatList: state.getIn(['fruit','meatList']),
    wineList: state.getIn(['fruit','wineList']),
    foodList:state.getIn(['fruit','foodList']),
    snackList:state.getIn(['fruit','snackList']),
    cookieList:state.getIn(['fruit','cookieList']),
})

export default connect(mapStateToProps, null )