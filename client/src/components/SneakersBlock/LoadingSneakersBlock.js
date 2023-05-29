import React from "react";
import ContentLoader from "react-content-loader";

function LoadingSneakersBlock(){
    return (
        <ContentLoader
            speed={2}
            width={360}
            height={439}
            viewBox="0 0 360 439"
            backgroundColor="#f0f0f0"
            foregroundColor="#e6e6e6"
        >
            <rect x="57" y="0" rx="0" ry="0" width="231" height="160" />
            <rect x="73" y="179" rx="0" ry="0" width="201" height="23" />
            <rect x="0" y="217" rx="19" ry="19" width="347" height="144" />
            <rect x="74" y="380" rx="0" ry="0" width="205" height="38" />
        </ContentLoader>
    );
};

export default LoadingSneakersBlock;