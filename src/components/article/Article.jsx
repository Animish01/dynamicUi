import React from 'react'
import './article.css'

const Article = ({ imgUrl, date, title }) => {
    return (
        <div className="encrypzion__blog-container_Article">
            <div className="encrypzion__blog-container_Article-img">
                <img src={imgUrl} alt="Blog Image" />
            </div>
            <div className="encrypzion__blog-container_Article-container">
                <div>
                    <p> {date}</p>
                    <h3> {title}</h3>
                </div>
                <p>Read full article</p>
            </div>
        </div>
    )
}

export default Article