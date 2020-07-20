<template>
  <div id="app">
    <full-page :options="options" id="fullpage">
      <div class="section">
        <firstpage/>
      </div>
      <div class="section">
        <secondpage/>
      </div>
    </full-page>
  </div>
</template>


<script>
import firstpage from '@/components/firstpage'
import secondpage from '@/components/secondpage'
export default {
  components: {
    firstpage,
    secondpage
  },
  data () {
  return {
    options: {
      licenseKey: 'YOUR_KEY_HERE',
      afterLoad: this.afterLoad,
      scrollOverflow: true,
      scrollBar: false,
      menu: '#menu',
      navigation: true,
      anchors: ['home', 'content'],
            }
          }
        }
      }
</script>

<style>
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/text.css';
@import 'https://use.fontawesome.com/releases/v5.7.2/css/all.css';

#app{
    height: 100vh;
}
.section{
  padding: 0 !important;
}
</style>
