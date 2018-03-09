import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!  PC</h1>
      
      
	    <Switch defaultChecked={false} onChange={onChange} />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
