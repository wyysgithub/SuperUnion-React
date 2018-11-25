import React from 'react';

import "../../assets/css/home/footer.css";


class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
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