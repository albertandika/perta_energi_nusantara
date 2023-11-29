<template>
    <div class="fixed-show-0 wow fadeInDown" data-wow-delay="0.5s" @click="sendWa()">
        <img src="/img/icon/whatsapp-logo.png" alt=""/>
    </div>
</template>
<script>
export default {
    methods: {
        sendWa() {
            const message = 'saya ingin bertanya mengenai \n'
            window.open( `https://wa.me/6281933164470?text=${message}`,
            "_blank")
        }
    }
}
</script>
