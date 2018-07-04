<template>
    <div>
        {{ title }}
        <br />
        props: {{details}}
    </div>
</template>

<script>
    export default {
        props: ['details'],
        data () {
            return {
                'title': this.details.name+' Details'
            }
        }
    }
</script>