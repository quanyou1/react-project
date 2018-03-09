import React from 'react';
import MediaQuery from 'react-responsive';
import PCIndex from './routes/PC/index';
import PCildren from './routes/PC/container/index_children';
import InforDel from './routes/PC/container/details/inforDel';
import PartyDel from './routes/PC/container/details/partyDel';
import MemberDel from './routes/PC/container/details/memberDel';
import InforList from './routes/PC/container/inforList';
import Associat_introd from './routes/PC/container/associat_introd';
import Associat_leader from './routes/PC/container/associat_leader';
import Service_organ from './routes/PC/container/service_organ';
import Exhibit from './routes/PC/container/exhibit';
import mobIndex from './routes/mobile/IndexPage';
import MemCenter from './routes/PC/container/memCenter';
import Partybuild from './routes/PC/container/party_build';
import Security_party from './routes/PC/container/Security_party';
import Infor_search from './routes/PC/container/infor_search';
import Member_search from './routes/PC/container/member_search';
import JournalDown from './routes/PC/container/JournalDown';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'

const AppRouter = () => {
  const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter
  return (
    
    <div className="router">
      {/* <MediaQuery query='(min-device-width: 1224px)'> */}
      
        <Router history={history}>
          <Switch>
          
            <Route path='/' exact render={props =><PCIndex {...props}><PCildren /></PCIndex>} />
            {/* <Route path='/aboutAll' exact render={props =><PCIndex {...props}><PcAbout /></PCIndex>} /> */}
            <Route path='/inforDel/:title/:id' exact render={props =><PCIndex {...props}><InforDel {...props}/></PCIndex>} />
            <Route path='/partyDel/:title/:id' exact render={props =><PCIndex {...props}><PartyDel {...props}/></PCIndex>} />
            <Route path='/memCenter' exact render={props =><PCIndex {...props}><MemCenter {...props}/></PCIndex>} />
            <Route path='/memberDel/:title/:id' exact render={props =><PCIndex {...props}><MemberDel {...props}/></PCIndex>} />
            <Route path='/journalDown' exact render={props =><PCIndex {...props}><JournalDown {...props}/></PCIndex>} />
            <Route path='/party_build/:title/:id' exact render={props =><PCIndex {...props}><Partybuild {...props}/></PCIndex>} />
            <Route path='/security_party' exact render={props =><PCIndex {...props}><Security_party {...props}/></PCIndex>} />
            <Route path='/inforList/:title/:newsid' exact render={props =><PCIndex {...props}><InforList {...props}/></PCIndex>} />
            <Route path='/service_organ/:title/:newsid' exact render={props =><PCIndex {...props}><Service_organ {...props}/></PCIndex>} />
            <Route path='/associat_introd/:title/:newsid' exact render={props =><PCIndex {...props}><Associat_introd {...props}/></PCIndex>} />
            <Route path='/associat_leader/:title/:newsid' exact render={props =><PCIndex {...props}><Associat_leader {...props}/></PCIndex>} />
            <Route path='/exhibit/:title/:newsid' exact render={props =><PCIndex {...props}><Exhibit {...props}/></PCIndex>} />
            <Route path='/infor_search/1/:dataSource' exact render={props =><PCIndex {...props}><Infor_search {...props} /></PCIndex>} />
            <Route path='/infor_search/1/' exact render={props =><PCIndex {...props}><Infor_search {...props} /></PCIndex>} />
            <Route path='/infor_search/2/:dataSource' exact render={props =><PCIndex {...props}><Member_search {...props} /></PCIndex>} />
            <Route path='/infor_search/2/' exact render={props =><PCIndex {...props}><Member_search {...props} /></PCIndex>} />
            <Route path='/pc' exact component={PCIndex}/>
          </Switch>
        </Router>
      {/* </MediaQuery> */}
      {/* <MediaQuery query='(max-device-width: 1224px)'>
           <Router history={history}>
            <Switch>
              <Route path='/' exact render={props => <IndexPage {...props}><Repos /></IndexPage>} />
              <Route path='/about' render={props => <IndexPage {...props}><Loadabout /></IndexPage>} />
              <Route path='/' exact component={mobIndex}/>
            </Switch>
          </Router>
      </MediaQuery> */}
    </div>
    
  )
}

export default AppRouter
