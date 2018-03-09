import React, { Component }  from 'react';
import newCss from './container.less';
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'


class newestPage extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			newest: [],
			p:1
        };
        

    };

    componentDidMount() {
        var myFetchOptions = {

        };

        fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homenews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=10&newsid=10", myFetchOptions).then(response => response.json()).then(newest => {
			this.setState({
				newest: newest.data
			});
		});
    };
    render () {
        var webSite = "http://www.szspia.org";
        const {newest} = this.state;
        console.log(newest);
        
        let newestDate = newest && newest.length || 0 ?
            newest.map((newestItem, index) => {
                var src = newestItem && newestItem.thumb? newestItem.thumb : require('../images/no_logo.jpg');
                return <li>
                    <Link target="_blank" to={`/inforDel/最新会员/${newestItem.id}`} >
                        <img src={src} />
                        <div className={newCss.corpName}>
                            <h4>{newestItem.title}</h4>
                        </div>
                    </Link>
                </li>  
            }) :
        <p className = {newCss.loding} > 没有加载到任何最新会员 </p>;
   
        return (
            <div className={newCss.newest_member}>
                <div className={newCss.title}>
                    <h3>最新会员</h3>
                </div>
                <div className={newCss.newest_infor}>
                    <ul>
                        {newestDate}
                        
                    </ul>
                </div>
            </div>
        )
        
    }
}



export default newestPage;
