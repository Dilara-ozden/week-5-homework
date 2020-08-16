<template>
  <div id="app">
    <Navbar />
    <router-view/>
    </div>
</template>

<script>
 /* import Vue from 'vue';
  import Navbar from "./components/Navbar";

  export default {
    components: { Navbar },
    created() {
      window.vueInstance = this;
    }
  }*/
 import Vue from 'vue';
 import Navbar from "./components/Navbar";
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 export default {
   name: 'app',
   components: {
     Navbar
   }
 }

</script>
