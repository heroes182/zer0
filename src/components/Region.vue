<template>
    <div>
        {{ title }}
        {{ region }}
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'World Region',
                region: {
                    name: this.$route.params.id
                }
            }
        }
    }
</script>