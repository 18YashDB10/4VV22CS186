import React, { useState } from 'react';

function UrlForm() {
    const [url, setUrl] = useState("");
    const [shortURL, setShortUrl] = useState("");

    const shortenUrl = () => {
        const baseUrl = "https://vvce.ly/";
        const uniqueId = Math.random().toString(36).substring(2, 8);
        return baseUrl + uniqueId;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let shortURL = shortenUrl(url);
        setShortUrl(shortURL);
    };

    return (
        <form className='d-flex flex-column align-items-center' onSubmit={handleFormSubmit}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Enter the URL</span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </div>

            <button className='btn btn-primary' type='submit'>Generate short url</button>
            {shortURL && (
                <div className="mt-3">
                    <p>
                        Shortened URL: <a href={url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`} target="_blank" rel="noopener noreferrer">{shortURL}</a>
                    </p>
                </div>
            )}
        </form>
    );
}

export default UrlForm;