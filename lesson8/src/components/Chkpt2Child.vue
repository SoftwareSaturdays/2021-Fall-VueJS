<template>
    <div>
        <h1>{{data.id}}</h1>
        <p v-for="(value, key) in data.data" v-bind:key="key"><b>{{key}}:</b> {{value}}<br></p>
    </div>
</template>

<script>
export default {
    name: 'C2Child',
    props: {
        data: Object
    }
}
</script>

<style>

</style>
