<template>
    <div>
        <h3>
            <span v-if="$route.path != '/'" @click="$router.go(-1)">&larr;</span>
            {{title}}
        </h3>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Zer0'
            }
        }
    }
</script>

<style lang="scss">
    h3 {
        color: turquoise;
    }
</style>