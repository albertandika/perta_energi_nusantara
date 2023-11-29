<template>
  <header class="header-one">
    <div id="sticker" class="header-area hidden-xs">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="logo">
              <nuxt-link class="navbar-brand page-scroll black-logo" to="/">
                <div class="d-flex flex-row">
                  <img src="/img/logo/logo_petra.png" alt="" class="width-45" />
                  <div>
                    <div class="fs-28 mb-8 fw-700">
                      PT PERTA ENERGI NUSANTARA
                    </div>
                    <div class="fs-16">
                      AGEN BBM SOLAR INDUSTRI DAN TRANSPORTIR
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-menu-area hidden-lg hidden-md hidden-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="mobile-menu">
              <div class="logo">
                <nuxt-link to="/">
                  <div class="d-flex flex-row">
                    <img
                      src="/img/logo/logo_petra.png"
                      alt=""
                      class="width-45"
                    />
                    <div>
                      <div class="fs-28 mb-8 fw-700">
                        PT PERTA ENERGI NUSANTARA
                      </div>
                      <div class="fs-16">
                        AGEN BBM SOLAR INDUSTRI DAN TRANSPORTIR
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </div>
              <nav id="dropdown">
                <ul>
                  <li>
                    <nuxt-link to="/">HOME</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/profile">PROFILE</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/gallery">GALLERY</nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  mounted() {
    var sticky = $("#sticker");
    var windows = $(window);

    windows.on("scroll", function() {
      var scroll = windows.scrollTop();
      if (scroll < 300) {
        sticky.removeClass("stick");
      } else {
        sticky.addClass("stick");
      }
    });

    var mean_menu = $("nav#dropdown");
    mean_menu.meanmenu();
  }
};
</script>

<style scoped></style>
