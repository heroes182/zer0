<template>
    <div>
        <h3>
            <button :disabled="$route.name === 'Home'" @click="$router.go(-1)">&larr;</button>
            {{$route.name}}
        </h3>
        <router-view v-bind:list="lists[$route.meta.list]"></router-view>
    </div>
</template>

<script>
    import pagesList from './assets/pages.json';
    import regionsList from './assets/regions.json';
    import charactersList from './assets/characters.json';
    let parcel = 'die'; // TODO: Parcel wont build without it o.0

    export default {
        data () {
            return {
                'title': 'Zer0',
                'lists': {
                    pagesList,
                    regionsList,
                    charactersList
                }
            }
        }
    }
</script>