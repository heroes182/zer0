<template>
    <div>
        <div id="map">
            <div v-for="(n, key) in 256" v-bind:key="key" class="tile">{{n}}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #map {
        display: flex;
        flex-wrap: wrap;
        .tile {
            background-color: limegreen;
            border: 1px dashed #333;
            color: #fff;
            font-size: 64%;
            font-family: monospace;
            width: (1/16)*100%;
            height: 48px;
            padding: 4px;
            box-sizing: border-box;

        }
    }
</style>

<script>
    export default {
        data () {
            return {
                title: 'World'
            }
        }
    }
</script>