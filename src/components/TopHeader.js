import Mobile from "./Mobile";
import {ImMenu} from "react-icons/im"
import {MdClose} from "react-icons/md"
import "../Styles/Header.css";
import React, {useContext} from 'react'
import { AuthContext } from '../Context/Context';
function TopHeader() {

    const { showSide, toggleSide} = useContext(AuthContext)

  return (
    <div className="topHeader">
         <div className="header_extra_2">
            {!showSide ? (
              <div
                style={{
                  paddingLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
                onClick={toggleSide}
              >
                <ImMenu color="color: #a49588" fontSize="2em" />
              </div>
            ) : (
              <div
                style={{
                  paddingLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
                onClick={toggleSide}
              >
                <MdClose color="color: #a49588" fontSize="2em" />
              </div>
            )}
            <div></div>
          </div>
          {showSide && (
            <div  onClick={toggleSide}>
              <Mobile />
            </div>
          )}

    </div>
  );
}

export default TopHeader;