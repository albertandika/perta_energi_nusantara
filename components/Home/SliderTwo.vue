<template>
    <div class="intro-area-2">
      <div class="intro-carousel">
        <div class="intro-content-2">
          <div class="slider-images">
            <img src="/img/background/bg.jpg" alt="">
          </div>
          <div class="slider-content position-top-title">
            <div class="display-table">
              <div class="display-table-cell">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="layer-1 wow fadeInUp" data-wow-delay="0.3s">
                        <h2 class="title2">PT PERTA ENERGI NUSANTARA</h2>
                      </div>
                      <div class="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                        <p>Merupakan perusahaan yang bergerak di bidang pendistribusian BBM non Subsidi Minyak. Perusahaan kami didirkan berdasarkan akta Notaris no.19, 11 Oktober 2019 dengan pengesahan Kementrian Hukum dan Hak Asasi Manusia Indonesia No. AHU - 0053781.AH.01.01 dan Perubahan Undang - Undang Nomor 25 tanggal 23 April 2020 dengan pengesahan dari Kementrian Hukum dan Hak Asasi Manusia Repulik Indonesia No. AHUAH.01.03-0199255</p>
                      </div>
                      <div class="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                        <a @click="toService" class="ready-btn left-btn " >Our Services</a>
                        <a @click="toEnd" class="ready-btn right-btn">Contact us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-content-2 slide-2">
          <div class="slider-images">
            <img src="/img/background/h2.jpg" alt="">
          </div>
          <div class="slider-content">
            <div class="display-table">
              <div class="display-table-cell">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="layer-1 wow fadeInUp" data-wow-delay="0.3s">
                        <h2 class="title2">PT PERTA NIAGA NUSANTARA</h2>
                      </div>
                      <!-- layer 2 -->
                      <div class="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                        <p>PT Perta Energi Nusantara telah diangkat menjadi agen resmi PT Pertamina Patra Niaga pada tahun 2020. Sebagai agen resmi Pertamina, PT Perta Energi Nusantara dapat melayani seluruh industri yang membutuhkan BBM Industri Pertamina dalam jumlah kecil maupun besar dengan mekanisme keagenan.</p>
                      </div>
                      <!-- layer 3 -->
                      <div class="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                        <a href="#" class="ready-btn left-btn " >Our Services</a>
                        <a href="#" class="ready-btn right-btn">Contact us</a>
                      </div>
                    </div>
                  </div>
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
          name: "SliderTwo",
        mounted() {
          setTimeout(() => {
            var intro_carousel = $('.intro-carousel');
            intro_carousel.owlCarousel({
              loop:true,
              nav:true,
              autoplay:false,
              // autoplayTimeout: 6000,
              // autoplaySpeed: 3000,
              dots:false,
              navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
              responsive:{
                0:{
                  items:1
                },
                600:{
                  items:1
                },
                1000:{
                  items:1
                }
              }
            });
          }, 500)
        },
        methods: {
            toService () {
              var scrollDiv = document.getElementById("sector-industry").offsetTop;
                window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
            },
            toEnd () {
                var scrollDiv = document.getElementById("contact-center").offsetTop;
                window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
            }
        }
      }
  </script>
  
  <style scoped>
  
  </style>
  