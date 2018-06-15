<template>
    <div>
        {{ title }}
        <ul>
            <li v-for="(page, index) in pages" v-bind:key="index">
                <router-link :to="page.route">{{ page.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Home',
                pages: [
                    {
                        name: 'World',
                        route: '/world'
                    },
                    {
                        name: 'Characters',
                        route: '/characters'
                    }
                ]
            }
        }
    }
</script>