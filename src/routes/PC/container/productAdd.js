
import styles from './container.less'
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
// import Slider from 'slider'


class unionDynamic extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
            productRec: [],
            p:1
        };
    };

   
   

	componentDidMount() {
		var webSite = "http://www.szspia.org/";
		var myFetchOptions = {

		};

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homeprodect&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=6&posid=10&p=" + this.props.p, myFetchOptions).then(response => response.json()).then(productRec => {
			this.setState({
				productRec: productRec.data
			});
		});

	};



    
	render() {
		const {productRec} = this.state;
		console.log(productRec);
		var webSite = "http://www.szspia.org/";

		

		

		let productDate = productRec && productRec.length || 0 ?
            productRec.map((productItem, index) => {
                var src = productItem && productItem.thumb? productItem.thumb : require('../images/no_img.jpg');
                return <li id={productItem.id}>
                    <a target="_blank" href={productItem.url} >
                        <img src={src} />
                        <div className={styles.product_infor}>
                            <h3>{productItem.title}</h3>
                        </div>
                    </a>
                </li>
            }) :
        <p className = {styles.loding} > 没有加载到任何推荐产品 </p>;

		
		
		return(
			<div className={styles.proList}>
                <ul>
					{productDate}
                </ul>
            </div>
		);
	}
}

  

export default unionDynamic;
