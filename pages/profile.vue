<template>
    <div>
        <Header />
        <header-image />
        <SectorIndusty/>
        <produk />
        <Quote />
        <Whatsapp />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Home/Header";
import Quote from "~/components/Home/Quote";
import Footer from "~/components/Home/Footer";
import HeaderImage from '~/components/Profile/HeaderImage.vue';
import Produk from "~/components/Profile/Produk.vue";
import SectorIndusty from '~/components/Home/SectorIndustry.vue'
import Whatsapp from '~/components/Profile/Whatsapp.vue'

export default {
    name: "index-2",
    components: {
        Footer,
        Header,
        HeaderImage,
        Produk,
        Quote,
        SectorIndusty,
        Whatsapp
    },
    head() {
        return {
            title: "Profile Perta Energi Nusantara",
        };
    },
};
</script>

<style scoped>
</style>
