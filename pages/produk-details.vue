<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="PRODUK KAMI" />
        <ProdukDetails />
        <Whatsapp />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Produk/PageHeader.vue";
import PageTitle from "~/components/Page/PageTitle";
import ProdukDetails from "~/components/Produk/ProdukDetails.vue";
import Footer from "~/components/Home/Footer";
import Whatsapp from '~/components/Profile/Whatsapp.vue'

export default {
    name: "produk-details",
    components: {
        Footer,
        ProdukDetails,
        PageTitle,
        PageHeader,
        Whatsapp
    },
    head() {
        return {
            title: "Produk Details Perta Energi Nusantara",
        };
    },
};
</script>

<style scoped>
</style>
