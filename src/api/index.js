import { dummyData } from './dummy-data.js';

class Api {
    fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(dummyData);
            }, 200);
        });
    }
}

export default new Api();
