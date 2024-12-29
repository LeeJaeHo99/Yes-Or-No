'use client';

import { useSelector } from "react-redux";

export default function SpeechBubble({mainText}) {
    const result = useSelector(state => state.result);
    const speechText = useSelector(state => state.speechText);

    return (
        <div id="speech-bubble">
            <div id="bub-part-a"></div>
            <div id="bub-part-b"></div>
            <div id="bub-part-c"></div>
            <div id="speech-txt">{mainText ? mainText : speechText}</div>
            <div id="bub-part-c"></div>
            <div id="bub-part-b"></div>
            <div id="bub-part-a"></div>
            <div id="speech-arrow">
                <div className="absolute left-1/2 bottom-[14px] translate-x-[-50%] w-3 h-[2px] bg-white"></div>
                <div id="arrow-w"></div>
                <div id="arrow-x"></div>
                <div id="arrow-y"></div>
                <div id="arrow-z"></div>
            </div>
        </div>
    );
}
