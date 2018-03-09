import React, { Component }  from 'react';
import detailCss from './detail.less';
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import {Icon} from 'antd';
import Newest from '../newest_data';


class advertPage extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
            exhibitRec: [],
            todayRec: [],
            p:1
        };
    };
   

	componentDidMount() {
		var webSite = "http://www.szspia.org/";
		var myFetchOptions = {

		};

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homeactivity&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=2&posid=10", myFetchOptions).then(response => response.json()).then(exhibitRec => {
			this.setState({
				exhibitRec: exhibitRec.data
			});
        });
        
        fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=topsidle&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=4&posid=3", myFetchOptions).then(response => response.json()).then(todayRec => {
			this.setState({
				todayRec: todayRec.data
			});
		});

  };

  render () {
    const {exhibitRec} = this.state;
    console.log(exhibitRec);
    const {todayRec} = this.state;
    console.log(todayRec);
    var webSite = "http://www.szspia.org/";

    let todayDate = todayRec && todayRec.length || 0 ?
        todayRec.map((todayItem, index) => {
            var src = todayItem && todayItem.thumb? todayItem.thumb : require('../../images/no_img.jpg');
            return <li>
                <Link target="_blank" to={`/inforDel/今日推荐/${todayItem.id}`}  >
                    <img src={src} />
                    <div className={detailCss.todayTit}>
                        <h4>{todayItem.title}</h4>
                    </div>
                </Link>
            </li> 
        }) :
    <p className = {detailCss.loding} > 没有加载到任何今日推荐 </p>;

    let exhibitDate = exhibitRec && exhibitRec.length || 0 ?
        exhibitRec.map((exhibitItem, index) => {
            var src = exhibitItem && exhibitItem.thumb? exhibitItem.thumb : require('../../images/no_img.jpg');
            return  <li>
                <Link target="_blank" to={`/inforDel/活动推荐/${exhibitItem.id}`}  >
                    <img src={src} />
                </Link>
            </li>
        }) :
    <p className = {detailCss.loding} > 没有加载到任何活动推荐 </p>;
    
    return (
      
        <div className={detailCss.advert_recomm}>
            <div className={detailCss.recomm_today}>
                <div className={detailCss.title}>
                    <h3>今日推荐</h3>
                </div>
                <div className={detailCss.todayRec_infor}>
                    <ul>
                       {todayDate}
                    </ul>
                </div>
            </div>
            <Newest />
            <div className={detailCss.recomm_today}>
                <div className={detailCss.title}>
                    <h3>活动推荐</h3>
                </div>
                <div className={detailCss.activeRec_infor}>
                    <ul>
                      {exhibitDate}
                    </ul>
                </div>
            </div>
        </div>

    )
    
  }
}



export default advertPage;
