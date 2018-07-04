<template>
    <div>
        <ul>
            <li class="title">
                {{this.$route.name}}
            </li>
            <li v-for="(item, index) in list" v-bind:key="index">
                <router-link :to="routeLink(item)">
                    {{item.name}}
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
                if (this.$route.meta.child) {
                    return {
                        'name': this.$route.meta.child,
                        'params': {
                            'id': item.name,
                            'details': item
                        }
                    }
                }
                else {
                    return {
                        'name': item.name
                    }
                }
            }
        }
    }
</script>