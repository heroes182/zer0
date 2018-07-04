<template>
    <div>
        {{ details.name }} Details
        <pre>
            {{ details }}
        </pre>
    </div>
</template>

<script>
    export default {
        props: ['details'],
        data () {
            return {
                // data
            }
        }
    }
</script>