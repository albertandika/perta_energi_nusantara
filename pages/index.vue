<template>
    <div>
        <Header />
        <Slider />
        <ImageShip />
        <Welcome />
        <Whatsapp />
        <img src="/img/background/bg-indonesia-3.png" />
        <SectorIndusty />
        <Quote />
        <Footer />

    </div>
</template>

<script>
import Header from "~/components/Home/Header";
import Slider from "~/components/Home/SliderTwo";
import Welcome from "~/components/Home/Welcome";
import ImageShip from "~/components/Home/ImageShip";
import Quote from "~/components/Home/Quote";
import SectorIndusty from '~/components/Home/SectorIndustry.vue'
import Whatsapp from '~/components/Profile/Whatsapp.vue'
import Footer from "~/components/Home/Footer";

export default {
    components: {
        Footer,
        Quote,
        ImageShip,
        Whatsapp,
        Welcome,
        Slider,
        Header,
        SectorIndusty
    },
    head() {
        return {
            title: "PT PERTA ENERGI NUSANTARA",
        };
    },
};
</script>

<style>
</style>
