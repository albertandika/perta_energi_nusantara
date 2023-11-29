
import BlogDetailsVue from '../Page/BlogDetails.vue';
<template>
    <div class="single-services-page area-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="page-head-left">
                        <div class="single-page-head">
                            <div class="left-menu">
                                <ul class="pointer">
                                    <li @click="detail('hsfo')" :class="page == 'hsfo' ? 'active' : ''">
                                        <a>HSFO</a>
                                    </li>
                                    <li @click="detail('lsfo')" :class="page == 'lsfo' ? 'active' : ''"><a >LSFO</a></li>
                                    <li @click="detail('mdf')" :class="page == 'mdf' ? 'active' : ''"><a>MDF</a></li>
                                    <li @click="detail('bio')" :class="page == 'bio' ? 'active' : ''"><a>Bio Solar</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-8 col-sm-8 col-xs-12">
                    <div class="row">
                        <produk-1 v-if="page == 'hsfo'"/>
                        <produk-2 v-else-if="page == 'lsfo'"/>
                        <produk-3 v-else-if="page == 'mdf'"/>
                        <produk-4 v-else-if="page == 'bio'"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Produk1 from './Produk1.vue';
import Produk2 from './Produk2.vue'
import Produk3 from './Produk3.vue'
import Produk4 from './Produk4.vue'

export default {
  components: { 
    Produk1,
    Produk2,
    Produk3,
    Produk4
 },
    name: "ProdukDetails",
    data () {
        return {
            page: 'lsfo'
        }
    },
    mounted () {

    },
    methods: {
        detail (id) {
            this.page = id
        }
    }
};
</script>

<style scoped>
</style>
