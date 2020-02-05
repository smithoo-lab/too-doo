const validUrlRegex = /((https?):\/\/)([-가-힣]|\w)+(?:[/.:@]([-가-힣]|\w)+)+\/?([^\n]*)$/i;
const protocolRegex = /^((http|https|ftp|mailto|tel):(?:\/\/)?)/;

export const urlUtil = {
    isValidURL(url) {
        return validUrlRegex.test(url);
    },
    isDataURIImage(src) {
        return /data:image\/(jpeg|png|gif)/.test(src);
    },
    refineUrl(url) {
        let result = url.trim();

        if (result && protocolRegex.test(result) === false) {
            result = 'http://' + result;
        }

        if (this.isValidURL(result) === false) {
            return url;
        }

        return result;
    },
};

export default urlUtil;
