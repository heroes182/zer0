<template>
    <div>
        {{ title }}
        <ul>
            <li v-for="(region, index) in regions" v-bind:key="index">
                <router-link :to="'region/'+region.name">{{ region.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'World Regions',
                regions: [
                    {
                        name: 'Aerona'
                    },
                    {
                        name: 'Benalia'
                    },
                    {
                        name: 'Sarpadia'
                    }
                ]
            }
        }
    }
</script>