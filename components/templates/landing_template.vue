<template>
  <div class="landing-template">
    <header>
      <slot name="header"></slot>
    </header>

    <nav class="section-navigation">
      <slot name="section-navigation"></slot>
    </nav>

    <section class="top-section">
      <slot name="top-section"></slot>
    </section>
    
    <section class="bottom-section">
      <slot name="bottom-section"></slot>
    </section>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

// -------------------- GRID LAYOUT CONTROL

.landing-template {
  @include normal-grid;
  grid-template-areas:
  "header header header header header header header header header header header header"
  "top-section top-section top-section top-section top-section top-section top-section top-section top-section top-section top-section top-section"
  "bottom-section bottom-section bottom-section bottom-section bottom-section bottom-section bottom-section bottom-section bottom-section bottom-section bottom-section bottom-section"
}

header {
  grid-area: header
}

.section-navigation {
  grid-area: section-navigation
}

.top-section {
  grid-area: top-section

}

.bottom-section {
  grid-area: bottom-section

}
</style>