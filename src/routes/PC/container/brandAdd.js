
import styles from './container.less'
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
// import Slider from 'slider'


class brandData extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
            brandRec: [],
            p:1
        };
    };

   
   

	componentDidMount() {
		var webSite = "http://www.szspia.org/";
		var myFetchOptions = {

		};

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homeprodect&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=12&posid=9&p=" + this.props.p, myFetchOptions).then(response => response.json()).then(brandRec => {
			this.setState({
				brandRec: brandRec.data
			});
		});

	};



    
	render() {
		const {brandRec} = this.state;
		console.log(brandRec);
		var webSite = "http://www.szspia.org/";

		

		

		let brandDate = brandRec && brandRec.length || 0 ?
			brandRec.map((brandItem, index) => {
				var src = brandItem && brandItem.thumb? brandItem.thumb : require('../images/no_img.jpg');
				return <li>
					<a target="_blank" href={brandItem.url} >
						<img src={src} />
						<div className={styles.brand_infor}>
							<h3>{brandItem.title}</h3>
						</div>
					</a>
				</li>
			}) :
		<p className = {styles.loding} > 没有加载到任何品牌推荐 </p>;

		
		
		return(
			<div className={styles.brandList}>
				<ul>
					{brandDate}
				</ul>
			</div>
		);
	}
}

  

export default brandData;
