export const colorUtil = {
    getRandomBrightColor() {
        const letters = 'ABCDEF';
        const lettersLength = letters.length;
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * lettersLength)];
        }
        return color;
    },
};

export default colorUtil;
