<template>
    <div>
        {{ $route.params.id }} List
        <ul>
            <li v-for="(item, key) in list" v-bind:key="key">
                <router-link :to="routeLink(item)">
                    {{key}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['list'],
        data () {
            return {
                // data
            }
        },
        methods: {
            routeLink: function(item) {
                return {
                    'name': 'Detail',
                    'params': {
                        'id': item.name,
                        'details': item
                    }
                }
            }
        }
    }
</script>