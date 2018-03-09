import React, { Component }  from 'react';
import detailCss from './details/detail.less';
import headerCss from '../header/header.less';
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import {Icon, Pagination, Collapse, Timeline } from 'antd';
import {Dropdown, Button, Input, AutoComplete } from 'antd';
import Newest from './newest_data';
import HeadSeach from '../header/header';
import { Switch, Menu, Breadcrumb, Layout } from 'antd';
import Advert from './Advert';
const Panel = Collapse.Panel;
const { Header } = Layout;

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

  function handleBlur() {
    console.log('blur');
  }
  
  function handleFocus() {
    console.log('focus');
  }
  
  
  function onSelect(value) {
    console.log('onSelect', value);
  
  }
  
  
  function onSelect(value) {
    console.log('onSelect', value);
    console.log(this.dataSource)
  }
  

class InforList extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
            inforList: [],
            inforWhole: [],
            current: 1,
            dataSource: "",
            Screen: []
        };
    };

    change = (e) =>{
        this.setState({value: e.target.value});
        console.log(this.state.value);
      }
      
    handleSearch = (value) => {
        this.setState({
          dataSource: !value ? [] : [
            value
          ],
        });
      }

    onChange = (page) => {
		console.log(page);
		
		this.setState({
			current: page
		});

		this.getData(page);
	}

   getData(page) {
	
		var webSite = "http://www.szspia.org";

   		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listnews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=10&newsid=10&p=" + page).then(response => response.json()).then(inforList => {
			this.setState({
				inforList: inforList.data
			});
		});
		
   }

   onScreen = (unit, value, addtime) => {
        console.log(unit, value, addtime);

        this.getScreenData(unit, value, addtime);
    }
    

    getScreenData(unit, value, addtime) {

        fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homesearch&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=10&catid=2&keyword=" + this.state.dataSource + "&p=1&level=" + unit + "&city=" + value + "&addtime=" + addtime).then(response => response.json()).then(inforList => {
                 
            this.setState({
                inforList: inforList.data,
                inforWhole: inforList.count
            });
            
        });
        
    }

//     $('.inforSel').find('span').click(function(){
//         $('.inforSel span').each(function () {
//             $(this).removeClass("inforAct");
//         });  
//         $(this).addClass("inforAct");
//         var type = $(this).attr('type');
//         $.ajax({
//                type:'get',
//                url: "{:U('getlist')}",
//                data:{
//                      type : type
//                },
//                dataType: 'json',
//                success: function(data){
//                    $('.recommCont').text("");
//                        $('.recommCont').append(data);
//                }
//        });
//    });



   

	componentDidMount() {
		var webSite = "http://www.szspia.org/";
		var myFetchOptions = {

        };


        fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listnews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=10&newsid=10&p=" + this.state.current, myFetchOptions).then(response => response.json()).then(inforList => {
            this.setState({
              inforList: inforList.data,
              inforWhole: inforList.count
            });
      });

      fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=region&key=QUgFYq4L5n89ZG2Ab&callback=userapi").then(response => response.json()).then(Screen => {
            this.setState({
                Screen: Screen.data
            });
            console.log(Screen);
        });
       
       
  };
  


  render () {
    const {inforList} = this.state;
    console.log(inforList)

    const {inforWhole} = this.state;
    console.log(inforWhole)

    const {Screen} = this.state;
    console.log(Screen);

    var webSite = "http://www.szspia.org/";

    let memberDate = inforList && inforList.length || 0 ?
        inforList.map((inforItem, index) => {
                var src = inforItem && inforItem.thumb? inforItem.thumb : require('../images/no_logo.jpg');
                return <li><Link to={`/memberDel/会员中心/${inforItem.id}`} >
                    <div className={detailCss.member_infor + ' ' + detailCss.member_logo}>
                        <img src={src} />
                    </div>
                    <div className={detailCss.member_infor + ' ' + detailCss.more_in + ' ' + detailCss.fontBold}>
                        {inforItem.title}
                    </div>
                    <div className={detailCss.member_infor + ' ' + detailCss.more_in}>
                        <div className={detailCss.member_region}>
                            {inforItem.area}
                        </div>
                        <div className={detailCss.member_phone}>
                            联系电话：{inforItem.phone}
                        </div>
                    </div>
                    <div className={detailCss.member_infor}>
                           {inforItem.level}
                    </div>
                    <div className={detailCss.member_infor}>
                        {inforItem.inputtime}
                    </div></Link>
                </li>
            }) :
            <div className={detailCss.noScreen}>
                <p>抱歉，搜索不到符合条件的会员单位</p>
                <span>建议您更换搜索条件</span>
            </div>;

    

        let screenDate = Screen && Screen.length || 0 ?
            Screen.map((screenItem, index) => (
                <Menu.Item key={index}><span onClick={() => this.onScreen("0", screenItem, "1")}>{screenItem}</span></Menu.Item>   
            )) :
        <p></p>;
    
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
                            <Link to={'/memCenter'} className={headerCss.current}>会员中心</Link>
                            <Dropdown overlay={menu2} placement="bottomCenter">
                                <span className="ant-dropdown-link">
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
                            <Link to={'/security_party'}><img src={require('../images/partyConst.png')}/></Link>
                        </div>
						<HeadSeach />
					</div>
				</div>
                
                
            <div className={detailCss.inforDetail}>
                <div className={detailCss.member_advert}>
                    <Advert position="5" limit="1"/>
                </div>
                <div className={detailCss.detail_container}>
                    <div className={detailCss.detail_wrapper} style={{marginRight: '0px'}}>
                        <div className={detailCss.detail_title}>
                            <Link to={''}>深安协 ></Link><span>会员中心</span>
                        </div>
                        <div className={detailCss.member_title}>
                            <h3>会员中心</h3>
                        </div>
                        <div className={detailCss.member_search}>
                            <div className={detailCss.search_input}>
                                <AutoComplete
                                    dataSource={this.dataSource}
                                    style={{ width: 810, height: 36, marginLeft: '1px'}}
                                    onSelect={onSelect}
                                    onSearch={this.handleSearch}
                                    placeholder="输入您要搜索会员单位的名称"
                                    
                                />
                                <Link to={`/infor_search/2/${this.state.dataSource}`} >搜索</Link>
                            </div>
                            <Collapse bordered={false} style={{width: 80, marginTop: '-3px'}}>
                                <Panel header="筛选查看" key="1"  className={detailCss.screen}>
                                    <div className={detailCss.screen_area}>
                                        <div className={detailCss.level}>
                                            <h4>会员级别：</h4>
                                            <Menu
                                                theme="dark"
                                                mode="horizontal"
                                                defaultSelectedKeys={['1']}
                                                style={{ lineHeight: '24px', height: '24px' }}
                                                className={detailCss.ant_headli}
                                                rootPrefixCls='styles'>
                                                <Menu.Item key="1"><span onClick={() => this.onScreen("0", "全国", "1")}>全部</span></Menu.Item>
                                                <Menu.Item key="2"><span onClick={() => this.onScreen("1", "全国", "1")}>副会长单位</span></Menu.Item>
                                                <Menu.Item key="3"><span onClick={() => this.onScreen("2", "全国", "1")}>常务理事单位</span></Menu.Item>
                                                <Menu.Item key="4"><span onClick={() => this.onScreen("3", "全国", "1")}>理事单位</span></Menu.Item>
                                                <Menu.Item key="5"><span onClick={() => this.onScreen("4", "全国", "1")}>会员单位</span></Menu.Item>
                                            </Menu>
                                        </div>
                                        <div className={detailCss.level}>
                                            <h4>所在地区：</h4>
                                            <div className={detailCss.level_li}>
                                                <Menu
                                                    theme="dark"
                                                    mode="horizontal"
                                                    defaultSelectedKeys={['0']}
                                                    style={{ lineHeight: '24px', height: '24px' }}
                                                    className={detailCss.ant_headli}
                                                    rootPrefixCls='styles'>
                                                    {screenDate}
                                                </Menu>
                                            </div>
                                            <div className={detailCss.level_more}>更多会员加入中</div>
                                        </div>
                                        <div className={detailCss.level}>
                                            <h4>排<span>序：</span></h4>
                                            <Menu
                                                theme="dark"
                                                mode="horizontal"
                                                defaultSelectedKeys={['1']}
                                                style={{ lineHeight: '24px', height: '24px' }}
                                                className={detailCss.ant_headli}
                                                rootPrefixCls='styles'>
                                                <Menu.Item key="1"><span onClick={() => this.onScreen("0", "深圳", "1")}>默认</span></Menu.Item>
                                                <Menu.Item key="2"><span onClick={() => this.onScreen("0", "深圳", "2")}>加入时间</span></Menu.Item>
                                            </Menu>
                                            
                                            
                                        </div>
                                    </div>
                                </Panel>
                            </Collapse>
                            
                        </div>
                        {/* <Timeline pending={<a href="#">See more</a>}>
                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                        </Timeline> */}
                        <div className={detailCss.member_wrapper}>
                            <div className={detailCss.listTitle}>
                                <p>会员logo</p>
                                <p className={detailCss.more_in}>会员单位</p>
                                <p className={detailCss.more_in}>联系地址</p>
                                <p>会员级别</p>
                                <p>加入时间</p>
                            </div>
                            <div className={detailCss.memberItem}>
                                <ul>
                                    {memberDate}
                                </ul>
                            </div> 
                        </div>
                        <div className={detailCss.pagination}>
                            <Pagination  defaultCurrent={1} onChange={this.onChange} total={inforWhole} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
    
  }
}



export default InforList;
