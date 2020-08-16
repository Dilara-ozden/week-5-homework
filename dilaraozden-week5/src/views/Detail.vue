<template>
      <div class="card">
    <h5 class="card-header">{{ selectedData.title }}</h5>
    <div class="card-body">
        <h5 class="card-title">Album Numarası : {{selectedData.albumId}}</h5>
        <p class="card-text"><img :src="selectedData.url" width="200px" /></p>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        components: {
        },
        data() {
            return {
                selectedData: null
            }
        },
        methods: {
            
        },
        created() {
           
            if(this.$route.params.formData) {
                const { albumId, title, url } = this.$route.params.formData;
                this.selectedData = {
                    albumId,
                    title,
                    url,
                }
               
            } else {
                console.log(item.id);
                this.selectedData = this.$store.getters.getTodoList
                    .filter(item => item.id == this.$route.params.id)[0];
            }
        }
    }
</script>

<style scoped>

</style>
