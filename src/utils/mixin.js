export default {
    data() {
        return {

        }
    },
    methods: {
        /**
         * 深拷贝
         * @param {Object} object 复制的对象
         * @returns 复制后的对象
         */
        deepCopy(object) {
            return JSON.parse(JSON.stringify(object));
        },
        /**
         * 过滤对象空值
         * @param {Object} object 处理的对象
         * @returns 处理后的对象
         */
        filterObjectNull(object) {
            let data = {};
            for (let i in object) {
                if (object[i] !== null && object[i] !== "") {
                    object[i] = object[i];
                }
            }
            return data;
        },
        /**
         * 比较对象修改的值
         * @param {*} newObject 新的对象
         * @param {*} oldObject 旧的对象
         * @returns 修改的值
         */
        compareDifferent(newObject, oldObject) {
            let data = {};
            for (let key in newObject) {
                if (typeof newObject[key] == "object") {
                    if (JSON.stringify(newObject[key]) != JSON.stringify(oldObject[key])) {
                        data[key] = newObject[key];
                    }
                } else {
                    if (newObject[key] != oldObject[key]) {
                        data[key] = newObject[key];
                    }
                }
            }
            return data;
        },
    },
    filters: {
        /**
         * 根据id从数组中筛选并返回另一个属性
         * @param {*} id 数据唯一标识
         * @param {*} list 数据列表
         * @param {*} key 其他属性
         * @returns 筛选对象的其他属性
         */
        findKey(id, list, key) {
            if (!id || !list.length) return "暂无";
            let find = list.find(i => id == i.id);
            return find ? find[key] : "暂无";
        },
    }
}