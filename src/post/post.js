import React from 'react'
import './post.css'
import Images from './image/image'
import Icon from './icon/icon'
import Like from '../like/like'

const Post = ({content, date,image, author}) => {
    const {name, nickname,photo} = author
    console.log(image)
    return (
        <div className='post'>
            <div className='postHeader'> 
                <Icon source={author.photo}/>
                <p className='authorName'>{author.name}<img className='verifiedIcon' src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"/></p>
                <p>{author.nickname}</p>
                <p>{date}</p>
            </div>
            <div className='postBody'>
                <p className='content'>{content}</p>
                <Images source={image}/>
            </div>
            <div className='userDesk'>
                <img src='https://cdn-icons.flaticon.com/svg/3917/3917567.svg?token=exp=1677165234~hmac=5111fc3491d268ded985603d0aeeeb90'></img>
                <img src='https://cdn-icons.flaticon.com/svg/3916/3916599.svg?token=exp=1677165234~hmac=7853260fd783891583053ece9158f3db'></img>
                <Like/>
            </div>
            
        </div>       
    )
}
export default Post
