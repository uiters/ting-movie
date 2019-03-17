import React, { Component } from 'react'
import TabContentItem from './TabContentItem'
const mockupData = [
    {
        title: 'Captain Marvel',
        text: '120 phút - 7.8 IMDb',
        image: 'https://s3img.vcdn.vn/mobile/123phim/2018/12/dai-uy-marvel-captain-marvel-15439001420153_370x490.jpg'
    },
    {
        title: 'Yêu Nhầm Bạn Thân',
        text: '100 phút',
        image: 'https://s3img.vcdn.vn/123phim/2019/02/yeu-nham-ban-than-friendzone-15512553703287.jpg'
    },
    {
        title: 'Zombie Đại Hạ Gía',
        text: '100 phút',
        image: 'https://s3img.vcdn.vn/123phim/2019/03/zombie-dai-ha-gia-15516736313809.jpg'
    }
]

export default class TabContent extends Component {

    render() {
        let ItemElm = mockupData.map(
            (item, index) => {
                return <TabContentItem
                item={item}
                    key={index}
                />
            }
        )
        return (

            <div>
                <div className='container'>
                    <div className='row'>
                        {ItemElm}
                    </div>
                </div>
            </div>

        )
    }
}
