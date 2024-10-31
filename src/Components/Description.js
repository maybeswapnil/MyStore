import React, { useEffect } from 'react';
import './Description.css';

const Description = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css?family=Cabin+Sketch";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <>
            <div className="unique-description-container">
                <div className="unique-video-container">
                    <video
                        className="unique-video"
                        src="https://i.imgur.com/gFjVixe.mp4"
                        autoPlay
                        loop
                        muted
                    />
                </div>
                <div className="unique-text-container">
                    <h2 className="unique-title">Shot on High Resolution Cameras</h2>
                    <p className="unique-description-text">
                        These dye-based prints are created using a six-colour process which makes them exceptionally vibrant and
                        saturated. The inks are rated to look great for 40+ years when displayed in a frame.
                    </p>
                </div>
            </div>
            <div className="unique-description-container">
                <div className="unique-text-container-left">
                    <h2 className="unique-title-left">High Quality Frames</h2>
                    <p className="unique-description-text-left">
                        Elevate your collection with our exquisite high-quality frames, meticulously crafted to showcase your prints at their best. Each frame is designed with precision, ensuring a perfect fit and an elegant finish that complements any decor. Made from premium materials, they offer durability and style, providing your artwork with the protection it deserves while enhancing its visual appeal.
                    </p>
                </div>
                <div className="unique-video-container">
                    <video
                        className="unique-video"
                        src="https://i.imgur.com/j5jr7LG.mp4"
                        autoPlay
                        loop
                        muted
                    />
                </div>

            </div>
            <div className="unique-description-container">
                <div className="unique-video-container">
                    <video
                        className="unique-video"
                        src="https://i.imgur.com/9eQ0BtL.mp4"
                        autoPlay
                        loop
                        muted
                    />
                </div>
                <div className="unique-text-container">
                    <h2 className="unique-title">Quality Prints</h2>
                    <p className="unique-description-text">
                    Discover our exceptional quality prints, crafted with precision using advanced dye-based technology. Each print features a six-color process that ensures vibrant colors and stunning detail, bringing your artwork to life. With a longevity rating of over 40 years, these prints are not only visually striking but also designed to withstand the test of time. Perfect for collectors and enthusiasts alike, our quality prints are a valuable addition to any space, providing an investment in art that will be cherished for generations.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Description;
