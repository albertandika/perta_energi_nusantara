<template>
    <div class="service-area bg-color area-padding-2">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section-headline text-center">
                        <h3>Produk Kami</h3>
                        <p>
                            Kami siap Membantu
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- <div class="all-service"> -->
                    <div class="col-md-6">
                        <div
                            class="single-service wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div class="service-icon">
                                <img src="/img/brand/hsfo-180-380.png"/>
                                <!-- <span class="flaticon-052-project-plan"></span> -->
                            </div>
                            <div class="service-inner">
                                <div class="service-content">
                                    <h4>HSFO</h4>
                                    <p>
                                        Biasa disebut dengan minyak bakar, fuel oil, bahan bakar ini..
                                    </p>
                                    <a class="service-btn" @click="nextTo()"
                                        ><i class="ti-arrow-right"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div
                            class="single-service wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div class="service-icon">
                                <img src="/img/brand/lsfo-180-380.png"/>
                            </div>
                            <div class="service-inner">
                                <div class="service-content">
                                    <h4>LSFO</h4>
                                    <p>
                                        Biasa disebut minyak bakar, fuel oil. Bahan bakar ini
                                    </p>
                                    <a class="service-btn" @click="nextTo()"
                                        ><i class="ti-arrow-right"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="row">
                    <div class="col-md-6">
                        <div
                            class="single-service wow fadeInUp"
                            data-wow-delay="0.7s"
                        >
                            <div class="service-icon">
                                <img src="/img/brand/mdf-pertamina.png"/>
                            </div>
                            <div class="service-inner">
                                <div class="service-content">
                                    <h4>Marine Diesel Fuel</h4>
                                    <p>
                                        Marine Diesel Fuel (MDF), Industrial Diesel Oil (IDO), Marine Diesel Oil (MDO)
                                    </p>
                                    <a class="service-btn" @click="nextTo()"
                                        ><i class="ti-arrow-right"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div
                            class="single-service wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div class="service-icon">
                                <img src="/img/brand/bio-solar.png"/>
                            </div>
                            <div class="service-inner">
                                <div class="service-content">
                                    <h4>Bio Solar</h4>
                                    <p>
                                        Merupakan bahan bakar destilasi yang mengandung minyak nabati
                                    </p>
                                    <a class="service-btn" @click="nextTo()"
                                        ><i class="ti-arrow-right"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Produk",
    methods: {
        nextTo () {
            this.$router.push('/produk-details')
        }
    }
};
</script>

<style scoped>
</style>
