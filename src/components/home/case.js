import React from 'react';

import "../../assets/css/home/case.css";

import todo from "../../assets/images/home/todu.png"

class Case extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:1,
            title:"客户用的好,才是真的好",
            describe:"每一个时代都是一次革命。每一个革命都成就一批创富英雄",
            // opportunityList:[
            //     {imgSrc:op1,modeName:"开启未来本地生活新模式",describe:"快速搭属于您本地的O20商盟平台,基于微信公众号的本地电子务平台真正让联盟商家,消老和平台运商实现三方共"},
            //     {imgSrc:op2,modeName:"立足本地  圈住未来",describe:"合本地商家,出住本地粉丝,成为本地独树一的新体门户。远営场最:丰富多样,本地玩乐购,夜禽住行游,一围草招"},
            //     {imgSrc:op3,modeName:"精准定位",describe:"从产品到供服务的转变。集了全国众多商盟运营者的真实需求,959%以上的商家不会运自己的网站。商盟平台只문题势而为"},
            //     {imgSrc:op4,modeName:"本地020巨大的市场空间",describe:"全国大部分二三线城市的本地020市场,述是一块等待开发的处女地。网购只占到个人消的5%,余的95%为本地消费。国内的O20将会迎来更加飞速的发属。"},
            // ]
        }
    }
    render(){
        return(
            <div className="case">
                <div className="container">
                    <h2>{this.state.title}</h2>
                    <h3>{this.state.describe}</h3>
                    <img src={todo} alt=""/>
                        {/*<div className="opportunityList">*/}
                            {/*{*/}
                                {/*this.state.opportunityList.map((item,i)=>{*/}
                                    {/*return(*/}
                                        {/*<div key={i} className="w25 fl">*/}
                                            {/*<div>*/}
                                                {/*<div>*/}
                                                    {/*<img src={item.imgSrc} alt="图标"/>*/}
                                                {/*</div>*/}
                                                {/*<p>{item.modeName}</p>*/}
                                            {/*</div>*/}
                                            {/*<span>{item.describe}</span>*/}
                                        {/*</div>*/}
                                    {/*)*/}
                                {/*})*/}
                            {/*}*/}
                        {/*</div>*/}
                </div>
            </div>
        )
    }
}
export default Case;