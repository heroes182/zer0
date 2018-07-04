<template>
    <div id="container">
        <div id="sidebar">
            Turn: {{turn}}
            <ul>
                <li>
                    <router-link :to="{'name': 'World'}">
                        World
                    </router-link>
                </li>
                <li v-for="(item, key) in $Grimoire" v-bind:key="key">
                    <router-link :to="{'name': 'List', 'params': { 'id': key, 'list': item }}">
                        {{key}}
                    </router-link>
                    <ul>
                        <li v-for="(item, key) in item" v-bind:key="key">
                            <router-link :to="{'name': 'Detail', 'params': { 'id': key, 'details': item }}">
                                {{key}}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    body {
        margin: 0;
        font-family: sans-serif;
    }
    #container {
        display: flex;
        &>* {
            flex-grow: 1;
            padding: 16px;
            min-height: calc(100vh - 32px);
        }
        #sidebar {
            flex-grow: 0;
            background-color: #dedede;
        }
    }
</style>

<script>
    export default {
        data () {
            return {
                'title': 'Zer0',
                'turn': 0
            }
        },
        created() {
            // const self = this;
            // setInterval(function() {
            //     self.turn++;
            // }, 200);
        }
    }
</script>