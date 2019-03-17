import React, { Component } from 'react'

export default class TabContentItem extends Component {
    render() {        
      
        const {title,text,image} = this.props.item;
        return (

            <div className='col-md-4' >
                <img className='card-img-top' src={image} alt="NoImage" height='390px' />
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text' > {text}</p>
                </div>
            </div>

        )
    }
}
