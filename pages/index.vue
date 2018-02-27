<template>
  <section class="main">
    <h1 class="f2 code title">Coderoom.io</h1>
    
    <div class="avenir pa5 ma2" style="max-width: 950px; margin: 0px auto">
      <p> 데이터 시각화, 분석, 파이프라인 및 프로토타입 전문회사 </p>
    </div>

    <article class="cf avenir">
      <div style="" class="fl w-100 bg-near-white">
        <div class="bg-near-white pa5 ma2" style="max-width: 950px; margin: 0px auto">
          <h3> 데이터사이언스 in R </h3>
          <ul class="ma2">
            <li> 기본 통계 </li>
            <li> Regression </li>
            <li> Clustering 군집화 </li>
          </ul>
          
        </div>
        <div class="bg-near-white pa5 ma2" style="max-width: 950px; margin: 0px auto">
          <h3>데이터사이언스 in Python</h3>
          <ul class="ma2">
            <li> 기본 통계 </li>
            <li> Regression </li>
            <li> Clustering 군집화 </li>
          </ul>
        </div>
        <div class="bg-near-white pa5 ma2" style="max-width: 950px; margin: 0px auto">
          <h3>데이터 Visualization in D3js</h3>
          <ul class="ma2">
            <li> 기본 통계 </li>
            <li> Regression </li>
            <li> Clustering 군집화 </li>
          </ul>
        </div>
        
        <div class="bg-near-white pa5 ma2" style="max-width: 950px; margin: 0px auto">
          <h3>다커라이제이션 in Docker</h3>
          <ul class="ma2">
            <li> 앱의 컨테이너화 </li>
            <li> 컨테이너 관리 </li>
            <li> 컨테이너 스케일 업 </li>
          </ul>
        </div>
        <div class="bg-near-white pa5 ma2" style="max-width: 950px; margin: 0px auto">
          <h3>Job 다커라이제이션 in Docker Cotainer</h3>
          <ul class="ma2">
            <li> Job의 컨테이너화 </li>
            <li> 컨테이너 서비스화 </li>
            <li>  </li>
          </ul>
        </div>
      </div>
    </article>

    <article class="cf avenir">
      <div class=" pa5 ma2" style="max-width: 950px; margin: 0px auto"><p> 경쟁력 있는 개발론 배우기 </p></div>
      <div class="pa5 ma2" style="max-width: 950px; margin: 0px auto"><p> 최고급 주제를 위한 소수정예 그룹 </p></div>
    </article>
    
  </section>
</template>

<script>

import axios from '~/plugins/axios'
import Header from '~/components/Header'

export default {
  components: {
    'main-header': Header
  },
  async asyncData () {
    // let dockerData = await axios.get('api/listContainers')
    // return { containers: dockerData.data}
  },
  mounted(){
  },
  head () {
    return {
      title: '코드룸.io - Home'
    }
  },
  data() {
    return{ }
  },
  methods: {
    async listContainers(){
      console.log("Start List")
      var vm = this 
      await axios.get('/api/listContainers').then(function (response) {
        vm.containers = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.main{
  /* padding:8px; */
}
.title
{
  margin: 30px 0;
  text-align: center;
  font-weight: 400;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
