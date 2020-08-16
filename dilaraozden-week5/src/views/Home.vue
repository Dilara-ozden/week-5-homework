<template>
  <div>

    <b-card class="my-5 mx-5">
    
      <div class="my-3">
        <select v-model="selectedFilterValue">
            <template v-for="status in Object.keys(STATUSSES)">
                <option :value="STATUSSES[status].VALUE">
                    {{ STATUSSES[status].TEXT }}
                </option>
            </template>
        </select>
    </div>
      <table class="table">
        <thead>
        <tr>
          <td></td>
          <td>Resimler</td>
        </tr>
        </thead>
        <tbody>
         
           <tr v-for="item in filteredItems" :key="item.id">
            <td>
              <img :src="item.thumbnailUrl" width="200px" />
              <div>{{ item.albumId }}</div>
              <div class="showData" >
                <h3>Data gösterme yöntemleri</h3>
                Stora direk erişim: {{ count }}
                <hr>
              </div>
            </td>
            <td><button type="button" class="btn btn-info" @click="increment(item.id)"> Increment </button></td>
            <td><button type="button" class="btn btn-danger" @click="increment2(item.id)"> Increment 2 </button></td>
            <td><button type="button" class="btn btn-primary"@click="gotoDetail(item)"> Detay </button></td>
          </tr>
        </tbody>
      </table>
    </b-card>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import {STATUSSES} from '../statuses';
export default {
  name: 'Home',
  mounted () {
    this.$store.dispatch('loadCoins')
  },
  props: ['albumId', 'title', 'url'],
  data() {
      return {
          STATUSSES,
          selectedFilterValue: STATUSSES.ALL.VALUE,
          count: 0
      }
  },
  computed: {
            getTodoList() {
                return this.$store.getters.getTodoList;
            },
            filteredItems() {
                if (this.selectedFilterValue === STATUSSES.ALL.VALUE) {
                    return this.getTodoList;
                } else {
                    return this.getTodoList.filter((item) => item.albumId == this.selectedFilterValue);
                }
            }
        },
  methods: {
    increment(id) {
      this.$store.commit('increment',id);
    },
    increment2() {
      this.setData();
    },
    gotoDetail(item) {
                this.$router.push({
                    name: 'DetailPage',
                    params: {
                        id: item.id,
                        formData: {
                            albumId: item.albumId,
                            title: item.title,
                            url: item.url
                        }
                    }
                })
            }
  
  },
    
}
</script>
