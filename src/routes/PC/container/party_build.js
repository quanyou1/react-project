import React, { Component }  from 'react';
import detailCss from './details/detail.less';
import headerCss from '../header/header.less';
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import {Icon, Pagination} from 'antd';
import { Menu, Dropdown, Button, Input, AutoComplete } from 'antd';
import Newest from './newest_data';
import Advert_right from './details/advert_right';
import HeadSeach from '../header/header';


class InforList extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
            inforList: [],
            inforWhole: [],
            current: 1
        };
    };

    onChange = (page) => {
		console.log(page);
		
		this.setState({
			current: page
		});

		this.getData(page);
	}

   getData(page) {
	
		var webSite = "http://www.szspia.org";

   		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listnews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=10&newsid=16&p=" + page).then(response => response.json()).then(inforList => {
			this.setState({
				inforList: inforList.data
			});
		});
		
   }
   

	componentDidMount() {
		var webSite = "http://www.szspia.org/";
		var myFetchOptions = {

		};

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listnews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=10&newsid=" + `${this.props.match.params.id}` + "&p=" + this.state.current, myFetchOptions).then(response => response.json()).then(inforList => {
			this.setState({
                inforList: inforList.data,
                inforWhole: inforList.count
			});
        });
       

  };


  render () {
    const {inforList} = this.state;
    console.log(inforList)

    const {inforWhole} = this.state;
    console.log(inforWhole)

    var webSite = "http://www.szspia.org/";

    let ListDate = inforList && inforList.length || 0 ?
        inforList.map((inforItem, index) => {
                var src = inforItem && inforItem.thumb? inforItem.thumb : require('../images/no_img.jpg');
                return <li>
                    <Link to={`/partyDel/协会动态/${inforItem.id}`}  id={inforItem.id}>
                        <div className={detailCss.dynamic_item}>
                            <div className={detailCss.dynamic_img}>
                                <img src={src} />
                            </div>
                            <div className={detailCss.dynamic_infor}>
                                <h3>{inforItem.title}</h3>
                                <p>{inforItem.description}</p>
                                <span>{inforItem.inputtime}</span>
                            </div>
                        </div>
                    </Link>
                </li>  
            }) :
     <p className = {detailCss.loding} > 没有加载到任何信息 </p>;
    
    return (
        <div className={detailCss.container}>
            <div className={headerCss.pcHeader}>
					<div className={headerCss.header_width}>
						<div className={headerCss.logo}>
							<Link to={'/'}><img src={require('../images/logo.png')}/></Link>
						</div>
						<div className={headerCss.party_width}>
                            <div className={headerCss.partyImg}>
                                <Link to={'/'}><img src={require('../images/partyConst.png')}/></Link>
                            </div>
                        </div>
						<HeadSeach />
					</div>
				</div>
            <div className={detailCss.inforDetail}>
                <div className={detailCss.associat_advert}>
                    <img src={require('../images/advent_3.jpg')} />
                </div>
                <div className={detailCss.detail_container}>
                    <div className={detailCss.detail_wrapper}>
                        <div className={detailCss.detail_title}>
                            <Link to={''}>深安协 ></Link> <Link to={'/security_party'}>安防党建 ></Link><span>{this.props.match.params.title}</span>
                        </div>
                        <div className={detailCss.inforList_wrapper}>
                                <div className={detailCss.inforItem}>
                                    <ul>
                                        {ListDate}
                                    </ul>
                                </div>
                                <div className={detailCss.pagination}>
                                    <Pagination defaultCurrent={1}  onChange={this.onChange} total={inforWhole} />
                                </div>
                        </div>
                    </div>
                    <Advert_right />
                </div>
            </div>
        </div>
    )
    
  }
}



export default InforList;
