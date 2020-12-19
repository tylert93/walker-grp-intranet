import React from 'react';
import AspectRatio from 'react-aspect-ratio';
import 'react-aspect-ratio/aspect-ratio.css';

const AvatarContainer = (props) => {

    return(
        <AspectRatio
            ratio={1}
            style={{
                backgroundImage: `url(${props.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className="rounded-circle"
        />
    )

}

export default AvatarContainer

