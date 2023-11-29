<template>
  <div class="area-padding" id="contact-center">
    <div class="container ">
      <div class="row">
        <div class="col-md-12 col-sm-12 ">
          <div class="row ">
            <div class="col-md-5 col-sm-4 col-xs-12">
              <div class="sub-head " style="color: blue;">
                <div class="position-label-quote" >
                  <img src="/img/logo/logo_petra.png" alt="" class="logo-in-front"/>
                  <div class="title-petra">PT. PERTA ENERGI NUSANTARA</div>
                  <div class="title-agent">AGEN BBM SOLAR INDUSTRI DAN TRANSPORTIR</div>
                </div>
                <p class="fs-12 sub-header-1">PT Perta Energi Nusantara sebagai perusahaaan lokal swasta berdiri dan berkembang di kota pekanbaru pada 2019 dan menjadi Agen resmi PT Pertamina BBM non subsidi pada tahun 2010.</p>
                <p class="fs-12 sub-header-2">Jl. Satria Nomor 118H Kelurahan Bambu kuning . Kecamatan Tenayan Raya Pekanbaru -Riau 282821 
                  <br>email: marketing@pertaenergi.com
                </p>
              </div>
            </div>
            <div class="col-md-7 col-sm-8 col-xs-12">
              <div class="row">
                <form id="contactForm"  class="contact-form"  @submit.prevent="sendEmail">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <input autocomplete="off" type="text" id="name" class="form-control" placeholder="Name" required data-error="Please enter your name" v-model="name">
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <input autocomplete="off" type="email" class="email form-control" id="email" placeholder="Email" required data-error="Please enter your email" v-model="email">
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <textarea id="message" rows="7" placeholder="Massage" class="form-control" required data-error="Write your message" v-model="message"></textarea>
                    <div class="help-block with-errors"></div>
                    <button type="submit" id="submit" class="quote-btn " style="float: right;">Kirim Pesan</button>
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryEmail from '~/repository/email.js'

    export default {
        name: "Quote",
        data () {
        return {
            email: '',
            name: '',
            message: ''
        }
    },
    methods: {
        sendEmail () {
            const body = {
                name: this.name,
                reply_to: this.email,
                message: this.message
            }
            RepositoryEmail.sendEmail(body)
            .then(() => {
                alert('Pesan Terkirim')
            })
            .catch(() => {
                alert('Pesan Gagal')
            })

        }
    }
    }
</script>

<style scoped>

</style>
