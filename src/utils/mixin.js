export default {
    data() {
        return {

        }
    },
    methods: {
        /**
         * 深拷贝
         * @param {object} obj 复制的对象
         * @returns {object} 复制后的对象
         */
        deepCopy(obj) {
            return JSON.parse(JSON.stringify(obj));
        },
        /**
         * 过滤对象空值
         * @param {object} obj 处理的对象
         * @returns {object} 处理后的对象
         */
        filterObjectNull(obj) {
            let data = {};
            for (let i in obj) {
                if (obj[i] !== null && obj[i] !== "") {
                    obj[i] = obj[i];
                }
            }
            return data;
        },
        /**
         * 比较对象修改的值
         * @param {object} newObj 新的对象
         * @param {object} oldObj 旧的对象
         * @returns {object} 修改的值
         */
        compareDifferent(newObj, oldObj) {
            let data = {};
            for (let key in newObj) {
                if (typeof newObj[key] == "object") {
                    if (JSON.stringify(newObj[key]) != JSON.stringify(oldObj[key])) {
                        data[key] = newObj[key];
                    }
                } else {
                    if (newObj[key] != oldObj[key]) {
                        data[key] = newObj[key];
                    }
                }
            }
            return data;
        },
    },
    filters: {
        /**
         * 根据id从数组中筛选并返回另一个属性
         * @param {number} id 数据唯一标识
         * @param {array} list 数据列表
         * @param {string} key 其他属性
         * @returns {string|number} 筛选对象的其他属性值
         */
        findKey(id, list, key) {
            if (!id || !list.length) return "暂无";
            let find = list.find(i => id == i.id);
            return find ? find[key] : "暂无";
        },
    }
}