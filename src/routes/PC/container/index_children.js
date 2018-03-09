import { connect } from 'dva';
import styles from './container.less'
import headerCss from '../header/header.less';
import fetchJsonp from 'fetch-jsonp';
// import { Tabs, Carousel, Icon } from 'antd';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react'
import { Tabs, Icon, Carousel } from 'antd';
import { Menu, Dropdown, Button, Input, AutoComplete } from 'antd';
import HeadSeach from '../header/header';
import ProductAdd from './productAdd';
import BrandAdd from './brandAdd';
import Newest from './newest_data';
import Slider from 'slider'
import Advert from './Advert';
const TabPane = Tabs.TabPane;



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


class Apps extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			banner: [],
			associatDyn: [],
			MemberDyn: [],
			Interview: [],
			selectionAct: [],
			trainingCen: [],
			regulatPol: [],
			acceptan: [],
			newest: [],
			committe: [],
			adviser: [],
			exhibitRec: [],
			advertRec: [],
			count: [],
			brandCount: [],
			p:1
		};
		
        this.next = this.next.bind(this)
		this.previous = this.previous.bind(this)
		
		this.brand_next = this.brand_next.bind(this)
		this.brand_prev = this.brand_prev.bind(this)
		
		this.banner_next = this.banner_next.bind(this)
		this.banner_prev = this.banner_prev.bind(this)

    };

	next() {
        this.slider.innerSlider.slickNext()
    }

    previous() {
        this.slider.innerSlider.slickPrev()
	}
	
	brand_next() {
        this.sliders.innerSlider.slickNext()
    }

    brand_prev() {
        this.sliders.innerSlider.slickPrev()
	}
	
	banner_next() {
        this.slider_banner.innerSlider.slickNext()
    }

    banner_prev() {
        this.slider_banner.innerSlider.slickPrev()
    }
   

	componentDidMount() {
		var myFetchOptions = {

		};

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=topsidle&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=4&posid=13", myFetchOptions).then(response => response.json()).then(banner => {
			this.setState({
				banner: banner.data
			});
		});
		
		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homenews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=5&newsid=6", myFetchOptions).then(response => response.json()).then(associatDyn => {
			this.setState({
				associatDyn: associatDyn.data
			});
		});

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homenews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=5&newsid=8", myFetchOptions).then(response => response.json()).then(MemberDyn => {
			this.setState({
				MemberDyn: MemberDyn.data
			});
		});
		
		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homenews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=5&newsid=25", myFetchOptions).then(response => response.json()).then(Interview => {
			this.setState({
				Interview: Interview.data
			});
		});
		
		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homenews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=5&newsid=31", myFetchOptions).then(response => response.json()).then(selectionAct => {
			this.setState({
				selectionAct: selectionAct.data
			});
		});
		
		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homenews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=5&newsid=14", myFetchOptions).then(response => response.json()).then(trainingCen => {
			this.setState({
				trainingCen: trainingCen.data
			});
		});
		
		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homenews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=5&newsid=9", myFetchOptions).then(response => response.json()).then(regulatPol => {
			this.setState({
				regulatPol: regulatPol.data
			});
		});

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homenews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=5&newsid=13", myFetchOptions).then(response => response.json()).then(acceptan => {
			this.setState({
				acceptan: acceptan.data
			});
		});

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homenews&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=10&newsid=10", myFetchOptions).then(response => response.json()).then(newest => {
			this.setState({
				newest: newest.data
			});
		});

		
		
		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homeexpert&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=3&newsid=27", myFetchOptions).then(response => response.json()).then(committe => {
			this.setState({
				committe: committe.data
			});
		});

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homeexpert&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=3&newsid=28", myFetchOptions).then(response => response.json()).then(adviser => {
			this.setState({
				adviser: adviser.data
			});
		});

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homeactivity&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=4", myFetchOptions).then(response => response.json()).then(exhibitRec => {
			this.setState({
				exhibitRec: exhibitRec.data
			});
		});

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homeexpert&key=QUgFYq4L5n89ZG2Ab&callback=userapi&newsid=24&limit=5", myFetchOptions).then(response => response.json()).then(advertRec => {
			this.setState({
				advertRec: advertRec.data
			});
		});

		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homeprodect&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=6&posid=10&p=1", myFetchOptions).then(response => response.json()).then(count => {
			this.setState({
				count: count.count
			});
		});
		
		fetchJsonp("http://www.szspia.org/index.php?m=Home&c=homeapi&a=homeprodect&key=QUgFYq4L5n89ZG2Ab&callback=userapi&limit=12&posid=9&p=1", myFetchOptions).then(response => response.json()).then(brandCount => {
			this.setState({
				brandCount: brandCount.count
			});
		});
		
        

	};

    
	render() {
		var webSite = "http://www.szspia.org/";
		const {banner} = this.state;
		const {associatDyn} = this.state;
		const {MemberDyn} = this.state;
		const {Interview} = this.state;
		const {selectionAct} = this.state;
		const {trainingCen} = this.state;
		const {regulatPol} = this.state;
		const {acceptan} = this.state;
		const {newest} = this.state;
		const {committe} = this.state;
		const {adviser} = this.state;
		const {count} = this.state;
		const {brandCount} = this.state;
		const {exhibitRec} = this.state;
		const {advertRec} = this.state;
		// console.log(count);
		// console.log(brandCount);
		// console.log(exhibitRec);
		// console.log(adviser);
		// console.log(committe);
		// console.log(newest);
		// console.log(acceptan);
		// console.log(regulatPol);
		// console.log(trainingCen);
		// console.log(selectionAct);
		// console.log(Interview);
		// console.log(MemberDyn);
		console.log(banner);
		// console.log(associatDyn);

		var allianSets = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow:true,
			swipe:true,
			autoplaySpeed: 3000
		  };

		  var settings = {
			dots: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay:true,
			nextArrow:true,
			swipe:true,
			autoplaySpeed: 3000
		  };

		let bannerList = banner && banner.length || 0 ?
			banner.map((bannerItem, index) => (
				
					<div className={styles.bannerImg}>
						<Link to={`/inforDel/协会动态/${bannerItem.id}`}>
							<img src={bannerItem.thumb}/>
							<p></p>
							<h3>{bannerItem.title}</h3>
						</Link>
					</div>
				
			)) :<p></p>;

		let associatDate = associatDyn && associatDyn.length || 0 ?
			associatDyn.map((associatItem, index) => {
				var src = associatItem && associatItem.thumb? associatItem.thumb : require('../images/no_img.jpg');
				return <li>
					<Link to={`/inforDel/协会动态/${associatItem.id}`} >
						<div className={styles.dynamic_item}>
							<div className={styles.dynamic_img}>
								<img src={src} />
							</div>
							<div className={styles.dynamic_infor}>
								<h3>{associatItem.title}</h3>
								<p>{associatItem.description}</p>
								<span>{associatItem.inputtime}</span>
							</div>
						</div>
					</Link>
				</li>  
			}) :
		<p className = {styles.loding} > 没有加载到任何协会动态 </p>;

		let MemberDate = MemberDyn && MemberDyn.length || 0 ?
			MemberDyn.map((MemberItem, index) => {
				var src = MemberItem && MemberItem.thumb? MemberItem.thumb : require('../images/no_img.jpg');
				return <li>
					<Link to={`/inforDel/会员动态/${MemberItem.id}`} >
						<div className={styles.dynamic_item}>
							<div className={styles.dynamic_img}>
								<img src={src} />
							</div>
							<div className={styles.dynamic_infor}>
								<h3>{MemberItem.title}</h3>
								<p>{MemberItem.description}</p>
								<span>{MemberItem.inputtime}</span>
							</div>
						</div>
					</Link>
				</li>  
			}) :
		<p className = {styles.loding} > 没有加载到任何会员动态 </p>;

		let viewDate = Interview && Interview.length || 0 ?
			Interview.map((viewItem, index) => {
				var src = viewItem && viewItem.thumb? viewItem.thumb : require('../images/no_img.jpg');
				return <li>
					<Link to={`/inforDel/企业专访/${viewItem.id}`}  id={viewItem.id}>
						<div className={styles.dynamic_item}>
							<div className={styles.dynamic_img}>
								<img src={src} />
							</div>
							<div className={styles.dynamic_infor}>
								<h3>{viewItem.title}</h3>
								<p>{viewItem.description}</p>
								<span>{viewItem.inputtime}</span>
							</div>
						</div>
					</Link>
				</li>  
			}) :
		<p className = {styles.loding} > 没有加载到任何企业专访 </p>;

		let selectDate = selectionAct && selectionAct.length || 0 ?
			selectionAct.map((selectItem, index) => {
				var src = selectItem && selectItem.thumb? selectItem.thumb : require('../images/no_img.jpg');
				return <li>
					<Link to={`/inforDel/评选活动/${selectItem.id}`} >
						<div className={styles.dynamic_item}>
							<div className={styles.dynamic_img}>
								<img src={src} />
							</div>
							<div className={styles.dynamic_infor}>
								<h3>{selectItem.title}</h3>
								<p>{selectItem.description}</p>
								<span>{selectItem.inputtime}</span>
							</div>
						</div>
					</Link>
				</li>  
			}) :
		<p className = {styles.loding} > 没有加载到任何评选活动 </p>;

		let trainingDate = trainingCen && trainingCen.length || 0 ?
			trainingCen.map((trainItem, index) => {
				var src = trainItem && trainItem.thumb? trainItem.thumb : require('../images/no_img.jpg');
				return <li>
					<Link to={`/inforDel/培训中心/${trainItem.id}`}>
						<div className={styles.dynamic_item}>
							<div className={styles.dynamic_img}>
								<img src={src} />
							</div>
							<div className={styles.dynamic_infor}>
								<h3>{trainItem.title}</h3>
								<p>{trainItem.description}</p>
								<span>{trainItem.inputtime}</span>
							</div>
						</div>
					</Link>
				</li>  
			}) :
		<p className = {styles.loding} > 没有加载到任何培训中心 </p>;

		let regulatDate = regulatPol && regulatPol.length || 0 ?
			regulatPol.map((regulatItem, index) => {
				var src = regulatItem && regulatItem.thumb? regulatItem.thumb : require('../images/no_img.jpg');
				return <li>
					<Link to={`/inforDel/政策法规/${regulatItem.id}`} >
						<div className={styles.dynamic_item}>
							<div className={styles.dynamic_img}>
								<img src={src} />
							</div>
							<div className={styles.dynamic_infor}>
								<h3>{regulatItem.title}</h3>
								<p>{regulatItem.description}</p>
								<span>{regulatItem.inputtime}</span>
							</div>
						</div>
					</Link>
				</li>  
			}) :
		<p className = {styles.loding} > 没有加载到任何政策法规 </p>;

		let acceptanDate = acceptan && acceptan.length || 0 ?
			acceptan.map((acceptItem, index) => {
				var src = acceptItem && acceptItem.thumb? acceptItem.thumb : require('../images/no_img.jpg');
				return <li>
					<Link to={`/inforDel/工程验收/${acceptItem.id}`}>
						<div className={styles.dynamic_item}>
							<div className={styles.dynamic_img}>
								<img src={src} />
							</div>
							<div className={styles.dynamic_infor}>
								<h3>{acceptItem.title}</h3>
								<p>{acceptItem.description}</p>
								<span>{acceptItem.inputtime}</span>
							</div>
						</div>
					</Link>
				</li>  
			}) :
		<p className = {styles.loding} > 没有加载到任何工程验收 </p>;

		let committeDate = committe && committe.length || 0 ?
			committe.map((commitItem, index) => {
				var src = commitItem && commitItem.thumb? commitItem.thumb : require('../images/no_logo.jpg');
				return <li>
					<Link to={`/inforDel/专家委员会/${commitItem.id}`} >
						<div className={styles.commitImg}>
							<img src={src} />
						</div>
						<div className={styles.commitInfor}>
							<h4>{commitItem.title1}</h4>
							<p>{commitItem.title2}</p>
							<span>{commitItem.name}</span>
						</div>
					</Link>
				</li>
			}) :
		<p className = {styles.loding} > 没有加载到任何专家委员会 </p>;

		let adviserDate = adviser && adviser.length || 0 ?
			adviser.map((adviserItem, index) => {
				var src = adviserItem && adviserItem.thumb? adviserItem.thumb : require('../images/no_logo.jpg');
				return <li>
					<Link to={`/inforDel/法律顾问/${adviserItem.id}`}  >
						<div className={styles.commitImg}>
							<img src={src} />
						</div>
						<div className={styles.commitInfor}>
							<h4>{adviserItem.title1}</h4>
							<p>{adviserItem.title2}</p>
							<span>{adviserItem.name}</span>
						</div>
					</Link>
				</li>  
			}) :
		<p className = {styles.loding} > 没有加载到任何法律顾问 </p>;

		let exhibitDate = exhibitRec && exhibitRec.length || 0 ?
			exhibitRec.map((exhibitItem, index) => {
				var src = exhibitItem && exhibitItem.thumb? exhibitItem.thumb : require('../images/no_img.jpg');
				return <li>
					<Link to={`/inforDel/展会推荐/${exhibitItem.id}`} >
						<img src={src} />
						<h3>{exhibitItem.description}</h3>
						<p>{exhibitItem.inputtime}一{exhibitItem.updatetime}</p>
					</Link>
				</li>
			}) :
		<p className = {styles.loding} > 没有加载到任何展会推荐 </p>;

		let advertDate = advertRec && advertRec.length || 0 ?
			advertRec.map((advertItem, index) => {
				var src = advertItem && advertItem.thumb? advertItem.thumb : require('../images/no_img.jpg');
				return <li>
					<Link to={`/inforDel/协会公告/${advertItem.id}`} >
						<div className={styles.advertIcon}><Icon type="double-right" /></div>
						<div className={styles.advert_infor}>{advertItem.title}</div>
						<div className={styles.advert_time}>{advertItem.inputtime}</div>
					</Link>
				</li>
			}) :
		<p className = {styles.loding} > 没有加载到任何协会公告 </p>;

		

		let unionpage = count && count.length || 0 ?
			count.map((i, index) => (
				<ul><ProductAdd p={i} /></ul>    
			)) :
		<p className = {styles.loding} > 没有加载到任何推荐产品 </p>;

		let brandDate = brandCount && brandCount.length || 0 ?
			brandCount.map((i, index) => (
				<ul><BrandAdd p={i} /></ul>    
			)) :
		<p className = {styles.loding} > 没有加载到任何推荐品牌 </p>;
		
		
		
		return(
			<div>
				<div className={headerCss.pcHeader}>
					<div className={headerCss.header_width}>
						<div className={headerCss.logo}>
							<img src={require('../images/logo.png')}/>
						</div>
						<div className={headerCss.headerNav}>
							<Link to={'/'} className={headerCss.current} >首页</Link>
							<Dropdown overlay={menu} placement="bottomCenter" size='Large'>
								<span  className="ant-dropdown-link" >
									协会概况 <Icon type="down" />
								</span>
							</Dropdown>
							<Dropdown overlay={menu1} placement="bottomCenter">
								<span className="ant-dropdown-link">
									资讯中心 <Icon type="down" />
								</span>
							</Dropdown>
							<Link to={'/memCenter'} >会员中心</Link>
							<Dropdown overlay={menu2} placement="bottomCenter">
								<span className="ant-dropdown-link">
									服务机构 <Icon type="down" />
								</span>
							</Dropdown>
							<Dropdown overlay={menu3} placement="bottomCenter">
								<span className="ant-dropdown-link">
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
				<div className={styles.index_wrapper}>
					<div className={styles.child_width}>
						<Advert position="1" limit="2"/>
							
						<div className={styles.work_wrapper}>
							<div className={styles.window_left}>
								<div className={styles.carousel}>
									<Carousel ref={c => this.slider_banner = c } {...settings}>
										{bannerList}
									</Carousel>
									<div className={styles.banner_right} onClick={this.banner_next}>
										<Icon type="right" />
									</div>
									<div className={styles.banner_left} onClick={this.banner_prev}>
										<Icon type="left" />
									</div>
								</div>
							</div>
							<div className={styles.window_right}>
								<div className={styles.serviceWin}>
									<div className={styles.title}>
										<h3>办事窗口</h3>
									</div>
									<div className={styles.serviceItem}>
										<ul>
											<li>
												<Link to={'/inforList/入会须知/20'} >
													<img src={require('../images/instruct_icon.png')} />
													<p>入会须知</p>
												</Link>
											</li>
											<li>
												<Link to={'/inforList/申请入会/21'} >
													<img src={require('../images/apply.png')} />
													<p>申请入会</p>
												</Link>
											</li>
											<li>
												<Link to={'/inforList/能力认证/22'} >
													<img src={require('../images/authent.png')} />
													<p>能力认证</p>
												</Link>
											</li>
											<li>
												<Link to={'/inforList/产品检测/23'} >
													<img src={require('../images/testing.png')} />
													<p>产品检测</p>
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className={styles.associat_advert}>
									<div className={styles.title}>
										<h3>协会公告</h3>
									</div>
									<div className={styles.advert_associat}>
										<ul>
											{advertDate}
										</ul>
									</div>
								</div>
							</div>
						</div>
						<Advert position="2" limit="1"/>
						<div className={styles.dynamic_wrapper}>
							<div className={styles.dynamic_left}>
								<Tabs type="card">
									<TabPane tab="协会动态" key="1">
										<div className={styles.dynamic_wrapper}>
											<ul>
												{associatDate}
												
											</ul>
											<div className={styles.more_dynamic}>
												<Link to={'/inforList/协会动态/6'} >查看更多协会动态</Link>
											</div>
										</div>
									</TabPane>
									<TabPane tab="会员动态" key="2">
									<div className={styles.dynamic_wrapper}>
											<ul>
												{MemberDate}
											</ul>
											<div className={styles.more_dynamic}>
												<Link to={'/inforList/会员动态/8'} >查看更多会员动态</Link>
											</div>
										</div>
									</TabPane>
									<TabPane tab="企业专访" key="3">
									<div className={styles.dynamic_wrapper}>
											<ul>
												{viewDate}
											</ul>
											<div className={styles.more_dynamic}>
												<Link to={'/inforList/企业专访/25'} >查看更多企业专访</Link>
											</div>
										</div>
									</TabPane>
									<TabPane tab="评选活动" key="4">
									<div className={styles.dynamic_wrapper}>
											<ul>
												{selectDate}
											</ul>
											<div className={styles.more_dynamic}>
												<Link to={'/inforList/评选活动/31'} >查看更多评选活动</Link>
											</div>
										</div>
									</TabPane>
									{/* <TabPane tab="培训中心" key="5">
									<div className={styles.dynamic_wrapper}>
											<ul>
												{trainingDate}
											</ul>
											<div className={styles.more_dynamic}>
												<Link to={'/inforList/培训中心/14'} >查看更多培训中心</Link>
											</div>
										</div>
									</TabPane> */}
									<TabPane tab="政策法规" key="6">
									<div className={styles.dynamic_wrapper}>
											<ul>
												{regulatDate}
											</ul>
											<div className={styles.more_dynamic}>
												<Link to={'/inforList/政策法规/9'} >查看更多政策法规</Link>
											</div>
										</div>
									</TabPane>
									{/* <TabPane tab="工程验收" key="7">
									<div className={styles.dynamic_wrapper}>
											<ul>
												{acceptanDate}
											</ul>
											<div className={styles.more_dynamic}>
												<Link to={'/inforList/工程验收/13'} >查看更多工程验收</Link>
											</div>
										</div>
									</TabPane> */}
								</Tabs>
							</div>
							<div className={styles.dynamic_right}>
								<Newest />
								<div className={styles.expert_tab}>
									<Tabs type="card" >
										<TabPane tab="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专家委员会&nbsp;&nbsp;&nbsp;&nbsp; " key="1" >
											<div className={styles.commit_wrpaper}>
												<ul>
													{committeDate}
												</ul>
											</div>
										</TabPane>
										<TabPane tab="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法律顾问&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " key="2">
										<div className={styles.commit_wrpaper}>
												<ul>
													{adviserDate}
												</ul>
											</div>
										</TabPane>
									</Tabs>
								</div>
							</div>
						</div>
						<div className={styles.recomm_product}>
							<div className={styles.title}>
								<h3>推荐产品</h3>
							</div>
							<div className={styles.product_list}>
								<div className={styles.productItem}>
									<Carousel ref={c => this.slider = c } {...allianSets}>
										{unionpage}
									</Carousel>
								</div>
								<div className={styles.direct_left} onClick={this.previous}>
									<Icon type="left" />
								</div>
								<div className={styles.direct_right} onClick={this.next}>
									<Icon type="right" />
								</div>
							</div>
						</div>
						<div className={styles.recomm_product}>
							<div className={styles.title}>
								<h3 className={styles.brandTit}>推荐品牌</h3>
							</div>
							<div className={styles.product_list}>
								<div className={styles.brandItem}>
									
									<Carousel ref={c => this.sliders = c } {...allianSets}>
										{brandDate}
									</Carousel>	
								</div>
								<div className={styles.direct_left} onClick={this.brand_prev}>
									<Icon type="left" />
								</div>
								<div className={styles.direct_right} onClick={this.brand_next}>
									<Icon type="right" />
								</div>
							</div>
						</div>
						<div className={styles.recomm_product}>
							<div className={styles.title}>
								<h3 className={styles.actionTit}>活动&展会推荐</h3>
							</div>
							<div className={styles.exhibit_wrapper}>
								<ul>
									{exhibitDate}
								</ul>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}

  

export default Apps;
