import React, { Component }  from 'react';
import footCss from './index.less';
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'


class FooterPage extends React.Component {

    constructor(props) {
		super(props);
		this.state = {

        };
        

    };

    componentDidMount() {
        var myFetchOptions = {

        };

       
    };
    render () {
        
        
       
   
        return (
        <div className={footCss.window}>
            <div className={footCss.window_link}>
                <div className={footCss.window_title}>
                    <h3><img src={require('./images/icon_server.png')} />办事窗口</h3>
                </div>
                <div className={footCss.links}>
                    <ul>
                        <li><Link to={'/inforList/入会须知/20'} target="_blank">入会须知</Link></li>
                        <li><Link to={'/inforList/申请入会/21'} target="_blank">申请入会</Link></li>
                        <li><Link to={'/inforList/能力认证/22'} target="_blank">能力认证</Link></li>
                        <li><Link to={'/inforList/产品检测/23'} target="_blank">产品检测</Link></li>
                    </ul>
                </div>
            </div>
            <div className={footCss.window_code}>
                <img src={require('./images/code.png')} />
                <span>扫码关注协会</span>
            </div>
        </div>
        )
        
    }
}



export default FooterPage;
