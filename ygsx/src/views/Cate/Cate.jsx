import React, { Component } from 'react';

import cateModel from '../../models/cateModel'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'

import {
	CateListContainer
} from './style'
@withRouter
class Cate extends Component {
	
	state = {
		activeList: [],
		cateList: [],
		cateInfoList: []
	}
	activeFn = index => {
		let activeList = this.state.activeList.map(item => '')
		console.log(activeList[index])
		activeList[index] = 'active'
		let cateInfoList = this.state.cateList[index][1].Childs
		this.setState({ activeList, cateInfoList })
	}
	async componentDidMount() {
		let ret = await cateModel.getCate().then()
		
		let jsonObj = ret.data.Data.CategoryList
		
		let jsonArr = Object.entries(jsonObj)
		console.log(jsonArr)
		let activeList = new Array(jsonArr.length).fill('')
		activeList[0] = 'active'
		let cateInfoList = jsonArr[0][1].Childs
		console.log(cateInfoList)
		this.setState({
			cateList: jsonArr,
			activeList,
			cateInfoList
		})
	}
	setId = id => {
		console.log(id)
		console.log(this.props.push)
		this.props.history.push(`/list?commodityCode=${id}`)
		
	}
	render() {
		return (
			<CateListContainer>
				<div>
					<ul>
						{
							this.state.cateList.length === 0 ? <div>加载中</div> : (
								<>
									{
										this.state.cateList.map((item, index) => (
											<li key={item[0]} onClick={this.activeFn.bind(this, index)} className={this.state.activeList[index]}><span>{item[1].CategoryName}</span></li>
										))
									}
								</>
							)
						}

					</ul>
				</div >
				<div>
					<ul>
						{
							this.state.cateInfoList.map((item, index) => (
								<li key={index} onClick={this.setId.bind(this, item.CategoryId)}><img src={item.PictureUrl} /><span>{item.CategoryName}</span></li>
							))
						}

					</ul>
				</div>
			</CateListContainer >
		);
	}
}

export default Cate;
