import React from 'react';

import "../../assets/css/home/banner.css"

import bl from "../../assets/images/banner/bl.png"


class BannerInfo extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div className="info">
                    <h1>全新O2O超级联盟系统</h1>
                    <p>整合资源 跨界营销 互利共赢 创造增值</p>
                    <span>国内优质的互联网创富项目</span>
                    <button>免费试用></button>
            </div>
        )
    }
}

class Banner extends React.Component{
    // props用于父子组建传值
    constructor(props){
        super(props);
        // 定义数据
        this.state={

        }
    }
    render(){
        return(
            <div className="banner">
                <div className="container">
                    <div className="banner-info">
                        <img className="bl" src={bl} alt=""/>
                        <BannerInfo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;