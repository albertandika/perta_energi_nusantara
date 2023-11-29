<template>
    <header class="header-one">

        <div id="sticker" class="header-area hidden-xs">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="logo">
                            <nuxt-link
                                class="navbar-brand page-scroll black-logo"
                                to="/"
                            >
                            <div class="d-flex flex-row">
                                <img src="/img/logo/logo_petra.png" alt="" class="width-45"/>
                                <div>
                                    <div class="fs-28 mb-8 fw-700">PT PERTA ENERGI NUSANTARA</div>
                                    <div class="fs-16">AGEN BBM SOLAR INDUSTRI DAN TRANSPORTIR</div>
                                </div>
                            </div>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <nav class="navbar navbar-default">
                            <div
                                class="collapse navbar-collapse"
                                id="navbar-example"
                            >
                                <div class="main-menu">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li :class="isClass.home ? 'active': ''">
                                            <nuxt-link to="/">HOME</nuxt-link>
                                        </li>
                                        <li :class="isClass.profile ? 'active': ''">
                                            <nuxt-link to="/profile">PROFILE</nuxt-link>
                                        </li>
                                        <li :class="isClass.produk ? 'active': ''">
                                            <nuxt-link to="/gallery">GALLERY</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
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
                                <nuxt-link to="/"
                                    ><img src="/img/logo/logo_petra.png" class="width-45"
                                /></nuxt-link>
                            </div>
                            <nav id="dropdown">
                                <ul>
                                    <li>
                                        <nuxt-link to="/">HOME</nuxt-link>
                                        </li>
                                        <li >
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
    name: "Header",
    data () {
        return {
            isClass: {
                home: false,
                profile: false,
                produk: false
            }
        }
    },
    mounted() {
        if(this.$route.name == 'index') {
            this.isClass.home = true
            this.isClass.profile = false
            this.isClass.produk = false
        } else if(this.$route.name == 'profile'){
            this.isClass.home = false
            this.isClass.profile = true
            this.isClass.produk = false
        } else {
            this.isClass.home = false
            this.isClass.profile = false
            this.isClass.produk = true
        }
       

        setTimeout(() => {
            var windows = $(window);
            var sticky = $("#sticker");
    
            windows.on("scroll", function () {
                var scroll = windows.scrollTop();
                if (scroll < 300) {
                    sticky.removeClass("stick");
                } else {
                    sticky.addClass("stick");
                }
            });
            var mean_menu = $("nav#dropdown");
            mean_menu.meanmenu();
            $(".search-option").hide();
            $(".main-search").on("click", function () {
                $(".search-option").animate({
                    height: "toggle",
                });
            });
        }, 500)
    },
};
</script>

<style scoped>
</style>
