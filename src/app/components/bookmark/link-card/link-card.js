import React, {Fragment} from "react";

const LinkCard = props => {
    const linkImageStyle = {
        backgroundImage: "url(https://upload.wikimedia.org/wikipedia/comons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)"
    }
    const mappedData = props.cards.map((card, i) => {
        return(
            <div key= {i} className="linkCard">
                <div className="linkCardImage" style={linkImageStyle}></div>
                <div className="linkCardLink">
                    <h2><a href={card.linkHref}>{card.linkName}</a></h2>
                </div>
            </div>
        );
    })
    return(
        <Fragment>
            {mappedData}
        </Fragment>
    )
}

export default LinkCard;
