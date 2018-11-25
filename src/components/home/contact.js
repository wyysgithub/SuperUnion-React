import React from 'react';

import "../../assets/css/home/contact.css";


class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"联系我们",
            describe:"每一个时代都是一次革命。每一个革命都成就一批创富英雄",

        }
    }
    render(){
        return(
            <div className="contact">
                <div className="container">
                    <h2>{this.state.title}</h2>
                    <h3>{this.state.describe}</h3>
                    <button>申请免费使用 > </button>
                </div>
            </div>
        )
    }
}
export default Contact;