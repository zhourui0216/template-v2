<template>
    <div>
        <p>首页</p>
    </div>
</template>

<script>
import request from "@/api/home.js"
export default {
    data() {
        return {

        }
    },
    mounted() {
        request.getData({
            page: 2
        }).then(res => {
            console.log(res);
        })
    }
}
</script>

<style scoped lang="scss">
</style>