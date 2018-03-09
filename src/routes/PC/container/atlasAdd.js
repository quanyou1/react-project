
import styles from './container.less'
import detailCss from './details/detail.less';
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
// import Slider from 'slider'


class unionDynamic extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
            atlasItem: [],
			current:1,
			count: ""
        };
    };

   
   

	componentDidMount() {
		var webSite = "http://www.szspia.org/";
		var myFetchOptions = {

		};

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listtuji&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=4&position=7&p=" + this.props.p, myFetchOptions).then(response => response.json()).then(atlasItem => {
			this.setState({
				atlasItem: atlasItem.data,
				count: atlasItem.count
			});
        });

	};



    
	render() {
		
		const {atlasItem} = this.state;
		console.log(atlasItem)

		const {count} = this.state;
		console.log(count)

		var webSite = "http://www.szspia.org/";

		

		

		let atlasDate = atlasItem && atlasItem.length || 0 ?
			atlasItem.map((atlasList, index) => {
				var src = atlasList && atlasList.path? atlasList.path : require('../images/no_img.jpg');
				return <li>
							<Link to={`/inforDel/党委图集/${atlasList.id}`} >
								<img src={src} />
							</Link>
					</li>
			}) :
		<p className = {detailCss.loding} > 没有加载到任何信息 </p>;

		
		
		return(
			<div className={detailCss.atlasList}>
				<ul>
					{atlasDate}
				</ul>
			</div>
		);
	}
}

  

export default unionDynamic;
