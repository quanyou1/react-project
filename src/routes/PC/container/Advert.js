
import styles from './container.less'
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
// import Slider from 'slider'


class advertDynamic extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
            Advert: [],
            p:1
        };
    };

   
   

	componentDidMount() {
		var webSite = "http://www.szspia.org/";
		var myFetchOptions = {

		};

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listads&key=QUgFYq4L5n89ZG2Ab&callback=userapi&position=" + this.props.position + "&limit=" + this.props.limit, myFetchOptions).then(response => response.json()).then(Advert => {
			this.setState({
				Advert: Advert.data
			});
		});

	};



    
	render() {
		const {Advert} = this.state;
		console.log(Advert);
		var webSite = "http://www.szspia.org/";
		
		let advertDate = Advert && Advert.length || 0 ?
			Advert.map((advertItem, index) => {
                var src = advertItem && advertItem.path? advertItem.path : require('../images/advert.png');
                return <div className={styles.advert_left}>
					<a href={advertItem.url}><img src={src}/></a>
				</div>
            }) :
        <p className = {styles.loding} ></p>;	
		
		return(
			<div className={styles.advert_wrapper}>
				{advertDate}
				
			</div>
		);
	}
}

  

export default advertDynamic;
