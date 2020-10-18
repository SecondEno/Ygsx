import { connect } from 'react-redux'
// 引入actions creator操作redux中的数据源

import *as indexActions from '../../store/actions/IndexAction'

export default connect(null, indexActions )