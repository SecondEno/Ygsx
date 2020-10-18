import { connect } from 'react-redux'
// 引入actions creator操作redux中的数据源


// 将redux中的state数据映射到props中去
const mapStateToProps = state => ({
    menu: state.getIn(['fruit','menu'])
})

export default connect(mapStateToProps, null )