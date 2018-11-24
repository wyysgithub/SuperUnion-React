import React from 'react';

import  "../../assets/css/home/profit.css";


class Profit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:1,
            title:"O20商家联盟运营如何盈利?",
            describe:"联盟运营如何盈利",
            modeList:[
                {modeName:"抽取交易佣金",describe:"联盟会员到商家消费产生交易平台佣金提成"},
                {modeName:"销售联盟产品",describe:"平台销售联盟产品得收益线上线下各同步销"},
                {modeName:"收取商家入驻费",describe:"平台为商家提供综合服务商家入驻的时候可根据实际情况收取入驻"},
                {modeName:"广告服务费",describe:"系统中预留多个广告位,广告收入品牌商家广告曝光"},
                {modeName:"提供营销增值服务",describe:"平台组织大型展会,收取展位费帮助商家群发信息提供精准数据营销"},
                {modeName:"会员系统服务费",describe:"为商家提供会员营销管理系统精细化管理商家自身会员"},
                {modeName:"城市合伙人",describe:"代理运营商可以招募城市运营合伙人快速向其他城市复制裂变"},
                {modeName:"赚取物料",describe:"商家提供宣传海报、展示牌等物料平台沉淀大量会员积分"},
                {modeName:"积分礼品收益",describe:"积赚取物料费取兑换价值和采购差"},
            ]
        }
    }
    render(){
        return(
            <div className="profit">
                <div className="container">
                    <h2>{this.state.title}</h2>
                    <h3>{this.state.describe}</h3>
                        <div className="modeList">
                            {
                                this.state.modeList.map((item,i)=>{
                                    return(
                                        <div key={i} className="w25 fl">
                                            <h1>{i+1}</h1>
                                            <p>{item.modeName}</p>
                                            <span>{item.describe}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
            </div>
        )
    }
}
export default Profit;