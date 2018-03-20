import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./roomComponents/Room";
import Replay_list from "./components/playcomponents/replay_list";
import Replay_file from "./components/playcomponents/replay_file";
import Schedule from "./components/schedule";
import Frequency from "./components/frequency";
import Potcast from "./components/potcast";
import firebase from "firebase/firebase-browser";


//firebase 초기화하기
  var firebaseconFig = {
xxxx
  };
  firebase.initializeApp(firebaseconFig);

//Routing 정의하기
const appRouting=(
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="rooms" component={Rooms} >
        <Route path =":roomId" component={Room} />
      </Route>
      <Route path ="replay_list" component={Replay_list} >
        <Route path =":programId" component={Replay_file} />
      </Route>
      <Route path ="schedule" component={Schedule} />
      <Route path ="frequency" component={Frequency} />
      <Route path ="potcast" component={Potcast} />
    </Route>
  </Router>
);

//Routing 초기화 하기
if (!location.hash.length){
  location.hash = "#/login";
}



//application 렌더링하기
render(appRouting, document.getElementById("app"));
