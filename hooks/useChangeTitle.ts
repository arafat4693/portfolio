import { useState, useEffect } from "react";

export function useChangeTitle(titleHidden: string = "Don't go, come back! 😢") {

    const [originalTitle, setOriginalTitle] = useState<string>('');

    const handleTabChange = () => {
        if(document.hidden) document.title = titleHidden;
        else document.title = originalTitle
    }

    useEffect(() => {

        if(!originalTitle) setOriginalTitle(document.title);

        window.addEventListener('visibilitychange', handleTabChange);

        return () => window.removeEventListener('visibilitychange', handleTabChange);
        
    },[originalTitle])

    return {
        originalTitle,
        setOriginalTitle
    }
}