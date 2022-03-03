import React from 'react'

export const About = (props) => {
    const detail=props.location.state;
    console.log(detail)
    return (
        <div>
            <h2>About page</h2>
            <span>
                {detail.id}
            </span>
            <span>
                {detail.name}
            </span>
            <span>
                {detail.price}
            </span>
            <img src={detail.image} alt="ll"/>
        </div>
    )
}
