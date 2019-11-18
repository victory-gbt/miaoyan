<template>
  <div>
    <div class="hoting">
      <movie-list v-for="(h_item,index) in hotList" :key="index" :mitem="h_item"></movie-list>
    </div>
  </div>
</template>

<script>
import movieList from './movieList';
import axios from 'axios';

export default {
  name: 'hoting',
  data() {
    return {
      hotList: []
    };
  },
  created() {
    axios
      .get('http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList')
      .then(res => {
        this.hotList = res.data.movieList;
      });
  },
  components: {
    movieList
  }
};

</script>

<style scoped>
</style>
