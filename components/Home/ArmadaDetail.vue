<template>
  <div class="container-sky">
    <p class="text-armada-font">Moda Darat</p>
    <div class="flex-armada">
        <div class="margin-20px">
            <img src="/img/armada/mobil-2.png" alt="">
        </div>
        <div>
            <img src="/img/armada/mobil-3.png" alt="">
        </div>
        <div>
            <img src="/img/armada/mobil-1.png" alt="">
        </div>
    </div>
    <div class="text-center">
        <span>Mobil Tanki Kapasitas 8.000 Liter</span>
    </div>
    <div class="font-position-data">
        Kami dari PT Perta Energi Nusantara adalah spesialis perdagangan minyak yang terutama berfokus pada bahan bakar untuk keperluan industri berdasarkan Spesifikasi Pemeritah Indonesia dengan standart Internasional dengan harga yang kompetitif
    </div>
    <div>
        <p class="text-armada-font">Moda Laut</p>
        <Armada />

    </div>
  </div>
</template>

<script>
import Armada from "~/components/Home/Armada";

export default {
    components: {
        Armada
    }
}
</script>

<style>

</style>