import React from 'react';

import  "../../assets/css/home/demand.css";

import location from "../../assets/images/home/location.png";

class Demand extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:1,
            title:"超级管理系统满足商家联盟多角色需求",
            describe:"跨界整合、异业联盟,线上线下融合一立足本地,圈住未来",
            localList:[
                "LBS定位","商品搜索","服务选择","拼图","分销","促销活动","评价晒单","会员中心","推荐有奖","新人礼包","在线咨询","预约上门"
            ],
            introduction:[
                "一号通全城,无需办理各和会员卡支持徹信会员电子拟卡和实体卡,云员凭一个会员号即可在全械雨家通用,无需办理各种商家的会员卡,为钱包负,轻松消员",
                "费返利首钱又钱会员到联盟雨家可享受折扣优惠,直接钱:同时每次消员都可以获得定的返利,消省钱又钱,",
                "联盟雨家各种优惠活动不,将省钱进行到底联盟会员可快速在记信查淘用近商家,快速决簧,导直达雨家;同时也可在家办公室线上下单,先下单再到店消员等多种使用场景需求真正实现上线下闭环消要"
            ]
        }
    }
    selectNav(num){
        this.setState({
            current:num
        })
    }
    render(){
        return(
            <div className="demand">
                <div className="container">
                    <h2>{this.state.title}</h2>
                    <h3>{this.state.describe}</h3>
                    <div className="demand-nav">
                        <span className={this.state.current===1?"active":""} onClick={this.selectNav.bind(this,1)}>消费者</span>
                        <span className={this.state.current===2?"active":""} onClick={this.selectNav.bind(this,2)}>企业</span>
                        <span className={this.state.current===3?"active":""} onClick={this.selectNav.bind(this,3)}>投资者</span>
                    </div>
                    <div className="w50">
                       <div className="localList">
                           {
                               this.state.localList.map((item,i)=>{
                                  return(
                                      <div key={i} className="w25 fl">
                                          <img src={location} alt="标识"/>
                                          <p>{item}</p>
                                      </div>
                                  )
                               })
                           }
                           {/*<span>包含小程序、微信、PC端等；</span>*/}
                           {/*<span>方便用户手机浏览商品、在线咨询、下单、支付等操作</span>*/}
                       </div>
                    </div>
                    <div className="w50">
                        {
                            this.state.introduction.map((item,i)=>{
                                return(
                                    <p key={i}>
                                        {i+1}，{item}
                                    </p>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}
export default Demand;