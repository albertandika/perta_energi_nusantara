<template>
  <div class="welcome-area fix area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="all-wel-services">
          <div class="well-services wow fadeInUp w-100" data-wow-delay="0.3s">
            <div class="main-wel">
              <div class="wel-content">
                <p>
                    Kami berkomitmen memberi pelayanan terbaik dengan menjaga Kualitas BBM yang terjamin  dan Konsisten dalam Penyediaan dan Pelayanan, Harga yang kompetitif dan proses pembayaran yang mudah, Armada kami menyediakan transportasi darat dengan kapasitas  dan transportasi Laut 
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="services-img ">
                <div class="company-image">
                    <div class="img-left" :class="[isUpper ? 'upZindex' : 'opactiy-show', isChange ? 'left-image-trans': '']" @click="setImage(1)">
                        <img :src="img1" alt="Company Image" style="display: block">
                    </div>
                    <div class="img-right" :class="[!isUpper ? 'upZindex' : 'opactiy-show', isChange ? 'right-image-trans': '']" @click="setImage(2)">
                        <img :src="img2" alt="Company Image" style="display: block;">
                    </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            img1: '/img/armada/kapal-2.jpeg',
            img2: '/img/armada/mobil-2.png',
            isUpper: true,
            isChange: false,
            position: 1
        }
    },
    methods: {
        setImage(val) {
            if (this.position != val) {
                this.isChange = true
                this.position = val
            }
            if (val == 1) {
                this.isUpper = true
            } else {
                this.isUpper = false
            }
            setTimeout(() => {
                this.isChange = false
            }, 1000)            
        }
    }
};
</script>

<style></style>
