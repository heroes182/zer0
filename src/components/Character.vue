<template>
    <div>
        {{ title }}
        {{ character }}
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Character Sheet',
                character: {
                    name: this.$route.params.id
                }
            }
        }
    }
</script>