import React, { Fragment, useState } from "react";
import LinkCard from "./link-card/link-card";
import "./bookmark.css";

const Bookmark = props => {

    const [cardData, setCardData] = useState([{ linkName: "my link", linkHref: "https://github.com" }]);

    const [newCard, setNewCard] = useState({ linkName: props.data.name, linkHref: window.location.href });

    const dispatchCardSet = (payload) => {
        let oldArray = cardData;
        let newArray = [...oldArray, payload];
        setCardData(newArray);
        setNewCard({ linkHref: "", linkName: "" })
    }

    return (
        <Fragment>
            <nav className="navigation">
                <main>
                    <div className="leftContent">
                        <form onSubmit={e => e.preventDefault()}>
                            <h2 className="formTitle">Add a bookmark</h2>
                            <div>
                                <label htmlFor="linkTitle" className="formLabel">Enter a bookmark name</label>
                                <input
                                    type="text"
                                    name="linkTitle"
                                    value={newCard.linkName || ''}
                                    onChange={e => setNewCard({ ...newCard, linkName: e.currentTarget.value })}
                                    minLength="1"
                                    maxLength="25"
                                    placeholder={props.data.name} />
                            </div>
                            <div>
                                <label htmlFor="linkHref" className="formLabel">Enter a bookmark link</label>
                                <input
                                    type="text"
                                    name="linkHref"
                                    value={newCard.linkHref || ''}
                                    onChange={e => setNewCard({ ...newCard, linkHref: e.currentTarget.value })}
                                    minLength="7"
                                    placeholder={window.location.href} />
                            </div>
                            <button onClick={() => dispatchCardSet(newCard)}>Add a Bookmark</button>
                        </form>
                    </div>
                    <div className="rightContent">
                        <LinkCard cards={cardData} />
                    </div>
                </main>
            </nav>
        </Fragment>
    );
}

export default Bookmark;