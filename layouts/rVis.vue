<template>
  <div>
    <!-- <main-header></main-header> -->
    <nuxt/>
    <!-- <my-footer/>-->
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
// import Header from '~/components/Header'

export default {
  components: {
    MyFooter,
    // 'main-header': Header
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
