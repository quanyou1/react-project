import React, { Component }  from 'react';
import detailCss from './detail.less';
import headerCss from '../../header/header.less';
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import {Icon} from 'antd';
import { Menu, Dropdown, Button, Input, AutoComplete } from 'antd';
import Newest from '../newest_data';
import Advert_right from './advert_right';
import HeadSeach from '../../header/header';
import Advert from '../Advert';


class InforDetail extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
            inforDel: [],
            p:1,
            container: []
        };
    };
   

	componentDidMount() {
		var webSite = "http://www.szspia.org/";
		var myFetchOptions = {

		};

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=newsdetail&key=QUgFYq4L5n89ZG2Ab&callback=userapi&id=" + `${this.props.match.params.id}`, myFetchOptions).then(response => response.json()).then(inforDel => {
			this.setState({
        inforDel: inforDel.data,
        container: inforDel.data.content
			});
		});

  };
  
  createMarkup() {
		return {__html: this.state.container};
	};

  render () {
    const {inforDel} = this.state;
    const {container} = this.state;
    console.log(inforDel)
    console.log(container)

    var webSite = "http://www.szspia.org/";
    
    return (
        <div>
            <div className={headerCss.pcHeader}>
                <div className={headerCss.header_width}>
                    <div className={headerCss.logo}>
                        <Link to={'/'}><img src={require('../../images/logo.png')}/></Link>
                    </div>
                    <div className={headerCss.party_width}>
                        <div className={headerCss.partyImg}>
                            <img src={require('../../images/partyConst.png')}/>
                        </div>
                    </div>
                    <HeadSeach />
                </div>
            </div>
        <div className={detailCss.inforDetail}>
            <Advert position="4" limit="1"/>
            <div className={detailCss.detail_container}>
                <div className={detailCss.detail_wrapper}>
                    <div className={detailCss.detail_title}>
                        <Link to={''}>深安协 ></Link><span>{this.props.match.params.title}</span>
                    </div>
                    <div className={detailCss.source_infor}>
                        <h2>{inforDel.title}</h2>
                        <p>{inforDel.inputtime}<span>{inforDel.copyfrom}</span></p>
                    </div>
                    <div className={detailCss.description}>
                        摘要：{inforDel.description}
                    </div>
                    <div className={detailCss.delContainer} dangerouslySetInnerHTML={this.createMarkup()}></div>
                </div>
                <Advert_right />
            </div>
        </div>
      </div>
    )
    
  }
}



export default InforDetail;
