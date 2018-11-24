import React from 'react';

import "../../assets/css/home/footer.css";


class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"联系我们",
            describe:"每一个时代都是一次革命。每一个革命都成就一批创富英雄",
        }
    }
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <p>Copyright ©2012-2018 WangYangYang. 某某某公司 备案号 11000000</p>
                </div>
            </div>
        )
    }
}
export default Footer;