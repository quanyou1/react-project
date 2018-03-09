import React, { Component }  from 'react';
import detailCss from './details/detail.less';
import headerCss from '../header/header.less';
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import {Icon, Pagination, Carousel} from 'antd';
import { Menu, Dropdown, Button, Input, AutoComplete } from 'antd';
import Newest from './newest_data';
import Advert_right from './details/advert_right';
import HeadSeach from '../header/header';
import Atlas from './atlasAdd'
import Slider from 'slider'


class SecurityParty extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
            SecurityList: [],
            branchList: [],
            announ: [],
            introdItem: [],
            current: 1,
            atlas: []
        };
        this.next = this.next.bind(this)
		this.previous = this.previous.bind(this)
    };

    next() {
        this.slider.innerSlider.slickNext()
    }

    previous() {
        this.slider.innerSlider.slickPrev()
	}

	componentDidMount() {
		var webSite = "http://www.szspia.org/";
		var myFetchOptions = {

		};

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listnews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=6&newsid=16&p=" + this.state.current, myFetchOptions).then(response => response.json()).then(SecurityList => {
			this.setState({
                SecurityList: SecurityList.data
			});
        });

        fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listnews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=6&newsid=32&p=" + this.state.current, myFetchOptions).then(response => response.json()).then(announ => {
			this.setState({
                announ: announ.data
			});
        });

        fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listnews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=6&newsid=17&p=" + this.state.current, myFetchOptions).then(response => response.json()).then(branchList => {
			this.setState({
                branchList: branchList.data
			});
        });

        fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=findnews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&newsid=18", myFetchOptions).then(response => response.json()).then(introdItem => {
			this.setState({
                introdItem: introdItem.data
			});
        });

        fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=listtuji&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=4&position=7&p=1", myFetchOptions).then(response => response.json()).then(atlas => {
			this.setState({
                atlas: atlas.count
			});
        });  
        
  };


  render () {
    const {SecurityList} = this.state;
    console.log(SecurityList)

    const {atlas} = this.state;
    console.log(atlas)

    const {introdItem} = this.state;
    console.log(introdItem)

    const {announ} = this.state;
    console.log(announ)
    
    const {branchList} = this.state;
    console.log(branchList)

    var webSite = "http://www.szspia.org/";

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:true,
        swipe:true,
        autoplaySpeed: 3000
      };

    let SecurityDate = SecurityList && SecurityList.length || 0 ?
        SecurityList.map((inforItem, index) => {
                var src = inforItem && inforItem.thumb? inforItem.thumb : require('../images/no_img.jpg');
                return <li>
                    <Link to={`/partyDel/党委工作/${inforItem.id}`} >
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

     let branchDate = branchList && branchList.length || 0 ?
        branchList.map((inforItem, index) => {
             var src = inforItem && inforItem.thumb? inforItem.thumb : require('../images/no_img.jpg');
             return <li>
                 <Link to={`/partyDel/支部党建/${inforItem.id}`} >
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

    let announDate = announ && announ.length || 0 ?
        announ.map((announItem, index) => (
            <li>
                <Link to={`/partyDel/党委公告/${announItem.id}`} >
                    <Icon type="double-right" /><span>{announItem.title}</span>
                </Link>
            </li> 
        )) :
    <p className = {detailCss.loding} > 没有加载到任何信息 </p>;

    let atlasDate = atlas && atlas.length || 0 ?
        atlas.map((i, index) => (
            <ul>
                <Atlas p={i} />
            </ul>
        )) :
    <p className = {detailCss.loding} > 没有加载到任何信息 </p>;

    var srcs = introdItem && introdItem.thumb? introdItem.thumb : require('../images/no_img.jpg');
    
    return (
        
        <div className={detailCss.container}>
            <div className={headerCss.pcHeader}>
					<div className={headerCss.header_width}>
						<div className={headerCss.logo}>
                            <Link to={'/'}><img src={require('../images/logo.png')}/></Link>
						</div>
						<div className={headerCss.party_width}>
                            <div className={headerCss.partyImg}>
                              <img src={require('../images/partyConst.png')}/>
                            </div>
                        </div>
						<HeadSeach />
					</div>
				</div>
            <div className={detailCss.inforDetail}>
                <div className={detailCss.associat_advert}>
                    <Link to={'/'}><img src={require('../images/advent_3.jpg')} /></Link>
                </div>
                <div className={detailCss.Security_party}>
                    <div className={detailCss.party_left}>
                        <div className={detailCss.party_commit}>
                            <div className={detailCss.Security_title}>
                                <h3>党委工作</h3>
                                <Link to={'/party_build/党委工作/16'} >更多 <Icon type="double-right" /></Link>
                            </div>
                            <div className={detailCss.inforItem}>
                                <ul>
                                    {SecurityDate}
                                </ul>
                            </div>
                        </div>
                        <div className={detailCss.party_commit}>
                            <div className={detailCss.Security_title}>
                                <h3>支部党建</h3>
                                <Link to={'/party_build/支部党建/32'} >更多 <Icon type="double-right" /></Link>
                            </div>
                            <div className={detailCss.inforItem}>
                                <ul>
                                    {branchDate}
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className={detailCss.party_right}>
                        <div className={detailCss.party_commit}>
                            <div className={detailCss.Security_title}>
                                <h3>党委公告</h3>
                                <Link to={'/party_build/党委公告/17'} >更多 <Icon type="double-right" /></Link>
                            </div>
                            <div className={detailCss.announ_wrapper}>
                                <ul>
                                    {announDate}
                                    
                                </ul>
                            </div>
                        </div>
                        <div className={detailCss.party_commit}>
                            <div className={detailCss.Security_title}>
                                <h3>深安协党委介绍</h3>
                            </div>
                            <div className={detailCss.introd_wrapper}>
                            
                                <img src={srcs} />
                                <p>{introdItem.description}</p>
                            </div>
                        </div>
                        <div className={detailCss.party_commit}>
                            <div className={detailCss.Security_title}>
                                <h3>党委图集</h3>
                                <div className={detailCss.carousel}>
                                    <div className={detailCss.carousel_left} On>
                                        <Icon type="left" onClick={this.previous}/>
                                    </div>
                                    <div className={detailCss.carousel_right}>
                                        <Icon type="right" onClick={this.next}/>
                                    </div>
                                </div>
                            </div>
                            <div className={detailCss.atlas_wrapper}>
                                <Carousel ref={c => this.slider = c } {...settings}>
                                    {atlasDate}
                                </Carousel>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
  }
}



export default SecurityParty;
