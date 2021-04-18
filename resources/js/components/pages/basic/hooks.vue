<template>
    <div>
        <h2 ref="myref">Hello ref</h2>
        <h1>Hooks {{name}} </h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: 'Macky'
        }
    },
    created(){

    },
    mounted(){
        console.log(this.$refs.myref)
    }
}

</script>


