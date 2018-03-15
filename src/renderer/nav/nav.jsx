import React from "react";
import { Link,hashHistory } from "react-router";

const LINK_STYLE = {
  color: "inherit",
  textDecoration: "none"
};


export default function Navi() {

  return(
      <nav className="nav-group">
        <Link to="/rooms" style={LINK_STYLE}><h1 className="nav-group-title">Kong</h1></Link>
          <span className="nav-group-item">
            <span className="icon icon-video"/>
            <Link to="/replay_list" style={LINK_STYLE}>다시듣기</Link>
          </span>
          <span className="nav-group-item">
            <span className="icon icon-doc-text"/>
            <Link to="/schedule" style={LINK_STYLE}>전체 편성표</Link>
          </span>
          <span className="nav-group-item">
            <span className="icon icon-signal"/>
            <Link to="/frequency" style={LINK_STYLE}>주파수 안내</Link>
          </span>
          <span className="nav-group-item">
            <span className="icon icon-lamp"/>
            <Link to="/potcast" style={LINK_STYLE}>팟캐스트</Link>
          </span>
          <span className="nav-group-item">
            <span className="icon icon-megaphone"/>
            이벤트
          </span>
          <span className="nav-group-item">
            <span className="icon icon-cog"/>
            설정
          </span>
        
      </nav>
  );
}
