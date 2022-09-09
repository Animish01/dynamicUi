import React from 'react'
import './whatencrypzion.css'
import Feature from '../../components/feature/Feature'

const WhatEncrypzion = () => {
    return (
        <div className="whatencrypzion section__margin" id='wencryp'>

            <div className="whatencrypzion-feature">

                <Feature
                    title="What is encrypzion"
                    text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </div>

            <div className="whatencrypzion-heading">
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
                <p>
                    Explore The Library
                </p>
            </div>

            <div className="whatencrypzion-container">
                <div className="whatencrypzion-container__feature">

                    <Feature
                        title="Chatbots"
                        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                    <Feature
                        title="Knowledgebase"
                        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                    <Feature
                        title="Education"
                        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                </div>
            </div>
        </div>
    )
}

export default WhatEncrypzion