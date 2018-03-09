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
import Advert from './Advert';

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

   		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listnews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=10&newsid=" + `${this.props.match.params.newsid}` + "&p=" + page).then(response => response.json()).then(inforList => {
			this.setState({
				inforList: inforList.data
			});
		});
		
   }
   

	componentDidMount() {
		var webSite = "http://www.szspia.org/";
		var myFetchOptions = {

		};

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listnews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=10&newsid=" + `${this.props.match.params.newsid}` + "&p=" + this.state.current, myFetchOptions).then(response => response.json()).then(inforList => {
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
                    <Link to={`/inforDel/详情/${inforItem.id}`}  id={inforItem.id}>
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
                            <img src={require('../images/logo.png')}/>
                        </div>
						<div className={headerCss.headerNav}>
                            <Link to={'/'}  >首页</Link>
                            <Dropdown overlay={menu} placement="bottomCenter" size='Large'>
								<span  className="ant-dropdown-link">
									协会概况 <Icon type="down" />
								</span>
							</Dropdown>
							<Dropdown overlay={menu1} placement="bottomCenter">
								<span className="ant-dropdown-link" >
									资讯中心 <Icon type="down" />
								</span>
							</Dropdown>
							<Link to={'/memCenter'} >会员中心</Link>
							<Dropdown overlay={menu2} placement="bottomCenter">
								<span className="ant-dropdown-link" >
									服务机构 <Icon type="down" />
								</span>
							</Dropdown>
							<Dropdown overlay={menu3} placement="bottomCenter">
								<span className="ant-dropdown-link" className={headerCss.current} >
									展览会议 <Icon type="down" />
								</span>
							</Dropdown>
                            
                        </div>
						<div className={headerCss.partyImg}>
                            <Link to={'/security_party'}><img src={require('../images/partyConst.png')}/></Link>
                        </div>
						<HeadSeach />
					</div>
				</div>
            <div className={detailCss.inforDetail}>
                <Advert position="3" limit="1"/>
                <div className={detailCss.detail_container}>
                    <div className={detailCss.detail_wrapper}>
                        <div className={detailCss.detail_title}>
                            <Link to={''}>深安协 ></Link><span>{this.props.match.params.title}</span>
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
