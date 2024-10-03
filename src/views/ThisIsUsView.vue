<template>
  <v-container>
    <h1 class="text-center">Nosotros</h1>

    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="text-center">History</v-card-title>
          <v-card-text>
            <p>
              Our company was founded in 2000 with the goal of providing top-notch services in the industry.
              Over the years, we have expanded our offerings and established a strong reputation for quality and reliability.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="text-center">Vision</v-card-title>
          <v-card-text>
            <p>
              Our vision is to be the leading provider in our field, known for innovation and excellence.
              We strive to create solutions that make a positive impact on our clients and communities.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="text-center">Mission</v-card-title>
          <v-card-text>
            <p>
              Our mission is to deliver high-quality products and services that meet the needs of our customers.
              We are committed to continuous improvement and sustainability in all our operations.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ThisIsUs',
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
