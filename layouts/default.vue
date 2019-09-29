<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
export default {
  name: 'Default',
  components: {
    TheHeader,
    TheFooter: () => import('~/components/TheFooter')
  }
}
</script>
