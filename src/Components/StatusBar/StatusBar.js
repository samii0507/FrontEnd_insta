import React, { Component } from 'react';
import "./StatusBar.css";
import { Avatar } from '@material-ui/core';
import statusimg from "../../images/pp1.png";

import uploadimage from "../../images/statusadd.png";


class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statusList: []
         }
    }
    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        let data=[
            {
                "username":"anindya_bunny",
                "imageURL":"https://darresne.com/img/female-avatar.png"
             },
             {
                "username":"abcs",
                "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU"
             },
             {
                "username":"qwe",
                "imageURL":"https://www.w3schools.com/w3css/img_avatar3.png"
             },
             {
                "username":"jyjj",
                "imageURL":"https://darresne.com/img/female-avatar.png"
             },
             {
                "username":"jyjj",
                "imageURL":"https://www.w3schools.com/w3css/img_avatar3.png"
             },
             {
                "username":"jyjj",
                "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGonDgYzVXUcaKSWbvyH_ICVD23aI4zlRMJQ&usqp=CAU"
             },
             {
                "username":"jyjj",
                "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxr247w5ckIok4oLED58Lm7koT7pj4225A&usqp=CAU"
             },
             {
                "username":"jyjj",
                "imageURL":"../../images/pp1.png"
             }
        ]
        this.state=({statusList: data});
    }

       
    render()  {
        return ( 
        <div>
            <div className="statusbar_container">
                <img src={uploadimage} width="55px" height="55px"/>
                {
                    this.state.statusList.map((item,index)=>(
                        <div className="status">
                            <Avatar className="statusbar__status" src={statusimg} />
                            <div className="statusbar__text">{item.username}</div>
                        </div>
                    ))
                }
            </div>
        </div>
         );
    }
}
 
export default StatusBar;