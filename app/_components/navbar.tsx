'use client';
import { useState, useEffect } from "react";

export default function Navbar() {
    const [nextSlide, setNextSlide] = useState(0);

    const dataSlide = [
        { id: 1, image: '/image/slide1.jpg' },
        { id: 2, image: '/image/slide2.jpg' },
        { id: 3, image: '/image/slide3.jpg' },
    ];

    const handleNextSlider = () => {
        setNextSlide((nextSlide + 1) % dataSlide.length);
    };

    // const handlePrevSlider = () => {
    //     setNextSlide((nextSlide - 1 + dataSlide.length) % dataSlide.length);
    // };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handleNextSlider();
        }, 6000);

        return () => clearTimeout(timeoutId);
    }, [nextSlide]);

    return (
        <div className="relative">
            <div className="w-full h-screen relative overflow-hidden">
                {dataSlide.map((el, index) => (
                    <img
                        key={el.id}
                        src={el.image}
                        alt={`/slide-${index + 1}`}
                        className="w-full h-full absolute top-0 left-0 transition-transform duration-300"
                        style={{
                            opacity: index !== nextSlide ? 1 : 0,
                            height: index !== nextSlide ? '100vh' : 0,
                            transition: "all 2.5s linear"
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
