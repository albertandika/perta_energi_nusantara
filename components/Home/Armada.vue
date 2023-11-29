<template>
    <div class="project-area area-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section-headline text-center">
                        <h3>Armada Transportasi</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="project-carousel">
                    <div class="col-md-3 col-sm-3 col-xs-12 transform-x-20">
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/armada/kapal-1.jpeg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/armada/kapal-1.jpeg"
                                    >
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12 transform-x-20">
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/armada/kapal-2.jpeg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/armada/kapal-2.jpeg"
                                    >
                                        <!-- <i class="port-icon ti-zoom-in"></i> -->
                                    </a>
                                </div>
                            </div>
                            <!-- <div class="project-dec">
                                <h4>Product design</h4>
                                <p>
                                    Our development opt in to the projects they
                                    genuinely want to work on, committing
                                    wholeheartedly to delivering.
                                </p>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12 transform-x-20">
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/armada/kapal-3.jpeg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/armada/kapal-3.jpeg"
                                    >
                                        <!-- <i class="port-icon ti-zoom-in"></i> -->
                                    </a>
                                </div>
                            </div>
                            <!-- <div class="project-dec">
                                <h4>Server security</h4>
                                <p>
                                    Our development opt in to the projects they
                                    genuinely want to work on, committing
                                    wholeheartedly to delivering.
                                </p>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12 transform-x-20">
                        <!-- single-awesome-project start -->
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/armada/kapal-4.jpeg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/armada/kapal-4.jpeg"
                                    >
                                        <!-- <i class="port-icon ti-zoom-in"></i> -->
                                    </a>
                                </div>
                            </div>
                            <!-- <div class="project-dec">
                                <h4>Industry support</h4>
                                <p>
                                    Our development opt in to the projects they
                                    genuinely want to work on, committing
                                    wholeheartedly to delivering.
                                </p>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12 transform-x-20">
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/armada/kapal-5.jpeg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/armada/kapal-5.jpeg"
                                    >
                                        <!-- <i class="port-icon ti-zoom-in"></i> -->
                                    </a>
                                </div>
                            </div>
                            <!-- <div class="project-dec">
                                <h4>Technical solution</h4>
                                <p>
                                    Our development opt in to the projects they
                                    genuinely want to work on, committing
                                    wholeheartedly to delivering.
                                </p>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-12 transform-x-20">
                        <div class="single-awesome-project">
                            <div class="awesome-img">
                                <a href="#">
                                    <img src="/img/armada/kapal-6.jpeg" alt="" />
                                </a>
                                <div class="add-actions text-center">
                                    <a
                                        class="venobox"
                                        data-gall="myGallery"
                                        href="/img/armada/kapal-6.jpeg"
                                    >
                                        <!-- <i class="port-icon ti-zoom-in"></i> -->
                                    </a>
                                </div>
                            </div>
                            <!-- <div class="project-dec">
                                <h4>Technical solution</h4>
                                <p>
                                    Our development opt in to the projects they
                                    genuinely want to work on, committing
                                    wholeheartedly to delivering.
                                </p>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Armada",
    mounted() {
        var Project_carousel = $(".project-carousel");
        Project_carousel.owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 3000,
            dots: false,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                300: {
                    items: 2,
                },
                7000: {
                    items: 3,
                },
                1000: {
                    items: 4,
                },
            },
        });
    },
};
</script>

<style scoped>
</style>
