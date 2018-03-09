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

const menu = (
    <Menu className={headerCss.menus}>
      <Menu.Item>
        <Link to={'/associat_introd/协会介绍/1'} target="_blank" rel="noopener noreferrer" >协会介绍</Link>
      </Menu.Item>
      <Menu.Item>
        <Link  to={'/associat_introd/组织架构/2'} target="_blank" rel="noopener noreferrer">组织架构</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={'/associat_leader/领导班子/3'} target="_blank" rel="noopener noreferrer" >领导班子</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={'/associat_introd/大事记/4'} target="_blank" rel="noopener noreferrer" >大事记</Link>
      </Menu.Item>
	  {/* <Menu.Item>
        <Link to={'/journalDown'} target="_blank" rel="noopener noreferrer" >会刊下载</Link>
      </Menu.Item> */}
      <Menu.Item>
        <Link to={'/associat_introd/联系我们/5'} target="_blank" rel="noopener noreferrer" >联系我们</Link>
      </Menu.Item>
    </Menu>
  );
  const menu1 = (
    <Menu>
        <Menu.Item>
            <Link to={'/inforList/协会动态/6'} target="_blank"  rel="noopener noreferrer" >协会动态</Link>
        </Menu.Item>
        <Menu.Item>
            <Link  to={'/inforList/行业动态/7'} target="_blank"  rel="noopener noreferrer">行业动态</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={'/inforList/会员动态/8'}  target="_blank" rel="noopener noreferrer" >会员动态</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={'/inforList/政策法规/9'} target="_blank" rel="noopener noreferrer" >政策法规</Link>
        </Menu.Item>
       
    </Menu>
  );

  const menu3 = (
    <Menu>
       <Menu.Item>
            <Link to={'/exhibit/展会/29'} target="_blank"  rel="noopener noreferrer" >展会</Link>
        </Menu.Item>
        <Menu.Item>
            <Link  to={'/exhibit/会议活动/30'}  target="_blank" rel="noopener noreferrer">会议活动</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={'/exhibit/评选活动/31'} target="_blank"  rel="noopener noreferrer" >评选活动</Link>
        </Menu.Item>
        
    </Menu>
  );
  const menu2 = (
    <Menu>
      <Menu.Item>
          <Link to={'/service_organ/产品检验/11'} target="_blank"  rel="noopener noreferrer" >产品检验</Link>
      </Menu.Item>
      <Menu.Item>
          <Link  to={'/service_organ/能力评价/12'} target="_blank"  rel="noopener noreferrer">能力评价</Link>
      </Menu.Item>
      <Menu.Item>
          <Link to={'/service_organ/工程验收/13'}  target="_blank" rel="noopener noreferrer" >工程验收</Link>
      </Menu.Item>
      <Menu.Item>
            <Link to={'/service_organ/培训中心/14'} target="_blank" rel="noopener noreferrer" >培训中心</Link>
        </Menu.Item>
        <Menu.Item>
            <Link  to={'/service_organ/工程招标/15'} target="_blank" rel="noopener noreferrer">工程招标</Link>
        </Menu.Item>
       
    </Menu>
  );

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
                        <img src={require('../../images/logo.png')}/>
                    </div>
                    <div className={headerCss.headerNav}>
                        <Link to={'/'}  >首页</Link>
                        <Dropdown overlay={menu} placement="bottomCenter" size='Large'>
                            <span  className="ant-dropdown-link" >
                                协会概况 <Icon type="down" />
                            </span>
                        </Dropdown>
                        <Dropdown overlay={menu1} placement="bottomCenter">
                            <span className="ant-dropdown-link"  >
                                资讯中心 <Icon type="down" />
                            </span>
                        </Dropdown>
                        <Link to={'/memCenter'} >会员中心</Link>
                        <Dropdown overlay={menu2} placement="bottomCenter">
                            <span className="ant-dropdown-link"  >
                                服务机构 <Icon type="down" />
                            </span>
                        </Dropdown>
                        <Dropdown overlay={menu3} placement="bottomCenter">
                            <span className="ant-dropdown-link" >
                                展览会议 <Icon type="down" />
                            </span>
                        </Dropdown>
                    </div>
                    <div className={headerCss.partyImg}>
                        <Link to={'/security_party'}><img src={require('../../images/partyConst.png')}/></Link>
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
