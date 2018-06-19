<template>
    <div id="bd">
        <input v-model="policyId" placeholder="Policy ID">
        <button v-on:click="getCoi()" value="Fetch">Fetch COI</button>
        <hr />
        <div class="bordered">
            {{someData}}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .bordered {
        border: 1px solid #000;
        border-radius: 4px;
        padding: 8px;
        background-color: #333;
        color: lightgreen;
        font-family: monospace;
    }
</style>

<script>
    export default {
        data () {
            return {
                title: 'coi',
                policyId: 'CC2MA',
                someData: ''
            }
        },
        methods: {
            getCoi(resource) {
                // GET /someUrl
                this.$http.post('https://daman.democrance.com/api/v0.1/coi/', {'policy_number': this.policyId}).then(response => {

                    // get body data
                    this.someData = response.body;
                    console.log(response.body);
                    

                }, response => {
                    // error callback

                    this.someData = response.body;
                    console.log(response.body);
                });
            }
        }
    }
</script>