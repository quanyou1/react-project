import React, { Component }  from 'react';
import footCss from './index.less';
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'


class FooterPage extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			friendlink: [],
			p:1
        };
        

    };

    componentDidMount() {
        var myFetchOptions = {

        };

        fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homelink&key=QUgFYq4L5n89ZG2Ab&callback=userapi", myFetchOptions).then(response => response.json()).then(friendlink => {
			this.setState({
				friendlink: friendlink.data
			});
		});
    };
    render () {
        var webSite = "http://www.szspia.org";
        const {friendlink} = this.state;
        console.log(friendlink);
        
        let linkDate = friendlink && friendlink.length || 0 ?
            friendlink.map((linkItem, index) => (
                <li><a href={linkItem.url} target="_blank" id={linkItem.linkid}>{linkItem.name}</a></li> 
            )) :
        <p className = {footCss.loding} > 没有加载到任何友情链接 </p>;
   
        return (
        <div className={footCss.pcFooter}>
            <div className={footCss.footWidth}>
                <div className={footCss.union}>
                    <h3>友情链接</h3>
                    <ul>
                        {linkDate}
                        
                    </ul>
                </div>
                <div className={footCss.copyRight}>
                    <div className={footCss.footAbout}>
                        <ul>
                            <li><Link to={'/associat_introd/协会介绍/1'}>关于协会</Link></li>
                            <li><Link to={'/journalDown'}>会刊下载</Link></li>
                            <li><Link to={'/memCenter'}>会员中心</Link></li>
                            <li><Link to={'/associat_introd/联系我们/5'}>联系我们</Link></li>
                        </ul>
                    </div>
                    <h3>深圳市安全防范行业协会</h3>
                    <p>地址：深圳市福田区深南大道6025号英龙大厦4楼 </p>
                    <span>Copyright 2012-2017 © CPS中安网(安防网) 版权所有 <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备17110166号-1</a></span>
                </div>
            </div>
            
        </div>
        )
        
    }
}



export default FooterPage;
