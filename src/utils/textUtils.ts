export interface TextStats {
    words: number;
    characters: number;
    charactersWithoutSpaces: number;
    sentences: number;
    paragraphs: number;
    readingTime: number;
}

export const calculateTextStats = (text: string): TextStats => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const characters = text.length;
    const charactersWithoutSpaces = text.replace(/\s/g, '').length;

    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    const paragraphs = text.split(/\n+/).filter(para => para.trim().length > 0).length;

    const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words per minute

    return {
        words,
        characters,
        charactersWithoutSpaces,
        sentences,
        paragraphs,
        readingTime
    };
};

export const clearText = (): string => {
    return '';
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
    }
};