import React, { Component } from 'react'
import { connect } from 'dva';
import indexCss from './index.less';
import { Switch, BackTop} from 'antd';
import Footer from './pc_footer';
import Header from './header/header';
import Window from './window';

import { Router, Route, Link, hashHistory } from 'dva/router'



class IndexPage extends React.Component {
  
  render () {
   
    return (
      <div className={indexCss.indexCont}>
         
          {this.props.children}
          <Footer />
          <Window /> 
          <BackTop />
    </div>
    )
    
  }
}

export default IndexPage;