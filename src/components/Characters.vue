<template>
    <div>
        {{ title }}
        <ul>
            <li v-for="(character, index) in characters" v-bind:key="index">
                <router-link :to="'character/'+character.name">{{ character.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Character List',
                characters: [
                    {
                        name: 'Joe'
                    },
                    {
                        name: 'Jack'
                    },
                    {
                        name: 'Sam'
                    }
                ]
            }
        }
    }
</script>