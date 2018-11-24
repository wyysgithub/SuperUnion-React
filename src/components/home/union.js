import React from 'react';

import  "../../assets/css/home/union.css"

import circle from "../../assets/images/home/circle.png"

class Union extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"线上全类型商家入驻+线下全场景商家服务=真联盟",
            introduction:" 商家联盟又叫异业联盟,以微信会员为载体,超级联盟系统为杠杆,整合异业商家,打造多业态、跨行业等一站式线下实体门店及线上微信电商相结合的创新型服务新业态。让客户享受到消费便捷的同时,更能充分领略跨界营销带来的乐趣,并且能从中获取无限的回报!为商家带来流量的同时,为客户带来更丰富的附加值服务,从而达到整合资源、界营销、创造増值三方共的局面。本着会员资源共享、合作共幕为目进行的一种联盟合作。"
        }
    }
    render(){
        return(
            <div className="union">
                <div className="container">
                    <h2>{this.state.title}</h2>
                    <div className="w50">
                        <p>
                            {this.state.introduction}
                        </p>
                    </div>
                    <div className="w50">
                        <img src={circle} alt="圆环"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Union;