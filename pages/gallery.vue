<template>
    <div>
        <Header />
        <SliderTwo />
        <ArmadaDetail />
        <Quote />
        <Whatsapp />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Home/Header";
import SliderTwo from "~/components/Home/SliderTwo";
import ArmadaDetail from "~/components/Home/ArmadaDetail";
import Footer from "~/components/Home/Footer";
import Quote from "~/components/Home/Quote";
import Whatsapp from '~/components/Profile/Whatsapp.vue'

export default {
    name: "gallery",
    components: {
        Footer,
        SliderTwo,
        Header,
        Quote,
        ArmadaDetail,
        Whatsapp
    },
    head() {
        return {
            title: "Gallery Perta Energi Nusantara",
        };
    },
};
</script>

<style scoped>
</style>
