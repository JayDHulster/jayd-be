<script>
  export default {
    name: 'App',
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
      copyToClipboard (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
      },
    },
  }
</script>

<template>
  <v-app>
    <v-app-bar color="#2f3149">
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-avatar
              rounded="0"
              class="mr-3"
              image="https://sfyri.netlify.app/src/icon-256.png"
            />

            jayd.be
          </div>
        </v-app-bar-title>
      </v-container>
      <v-btn color="white" prepend-icon="mdi-account-box-multiple-outline">
        Socials
        <v-dialog
        v-model="dialog"
        activator="parent"
      >
        <v-card class="text-center">
          <v-card-text>
          <v-chip @click="copyToClipboard('sfyri#2946')"
      prepend-icon="mdi-discord"
      class="ma-2"
      color="#5865F2"
      label
      text-color="white"
    >
      sfyri#2946
    </v-chip>
    <v-chip @click="copyToClipboard('jaydhulster@gmail.com')"
      prepend-icon="mdi-email"
      class="ma-2"
      color="white"
      label
      text-color="white"
    >
      jaydhulster@gmail.com
    </v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-btn>
    </v-app-bar>

    <v-main>
      <section id="hero">
        <v-sheet
          class="d-flex align-center pb-16"
          color="white"
        >
          <v-container class="text-center">
            <v-responsive class="mx-auto" width="500">
              <v-img
                src="https://sfyri.netlify.app/src/icon-256.png"
                height="400"
              />

              <h3 class="text-h3">
                Welcome to jayd.be!
              </h3>

              <p class="mt-4">
              I will show you what I have so far!
              </p>
            </v-responsive>
          </v-container>
        </v-sheet>
      </section>

      <v-sheet class="py-16" color="#4d4f61">
        <section id="filter">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">
                    <v-icon icon="mdi-account-hard-hat"></v-icon>
                    UNDER CONSTRUCTION <v-icon icon="mdi-wrench"></v-icon>
                  </h2>

                  <p class="text-success mt-3">
                    Visit <a href="https://sfyri.netlify.app" target="_blank" rel="noopener noreferrer">sfyri.netlify.app</a>
                    for a little demo.
                  </p>

                  <strong class="mt-3">
                    Version 3 Only
                  </strong>

                  <p class="mt-8">
                    Vuetify 3 has an unprecedented level of customization options that make implementing any design system easy.
                  </p>

                  <p class="mt-8">
                    Assign default values for all components in the library, including nested support.
                  </p>

                  <v-btn
                    class="mt-6"
                    href="https://next.vuetifyjs.com/features/global-configuration/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Information
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="https://cdn.vuetifyjs.com/store/themes/vite-free/chips-bar.png"
              />
            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="controls">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">
                    Rebuilt from the ground up
                  </h2>

                  <p class="text-success mt-3">
                    Composition API
                  </p>

                  <p class="mt-3">
                    Vuetify 3 uses the Vue composition API to build easy-to-use and feature rich components that work out of the box.
                  </p>

                  <p class="mt-8">
                    <strong>How to use:</strong>

                    Services are now accessed through <strong>use functions</strong> that follow the Vue 3 nomenclature and code styling.
                  </p>

                  <v-btn
                    class="mt-6"
                    href="https://next.vuetifyjs.com/introduction/why-vuetify/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Information
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="https://cdn.vuetifyjs.com/store/themes/vite-free/slider.png"
              />
            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">
                    The most complete version yet
                  </h2>

                  <p class="text-success mt-3">
                    Available now!
                  </p>

                  <p class="mt-3">
                    The latest version is almost here. Use one of our free themes to get a head start!
                  </p>

                  <p class="mt-8">
                    This theme is designed to demonstrate a basic single page application using Vuetify 3.
                  </p>

                  <v-btn class="mt-6">
                    More Information
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="https://cdn.vuetifyjs.com/store/themes/vite-free/layout.png"
              />
            </v-row>
          </v-container>
        </section>
      </v-sheet>

      <v-sheet
        class="py-16"
        color="#181818"
      >
        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive
                  class="overflow-visible"
                  width="350"
                >
                  <h2 class="text-h4">
                    Shape the future of Vuetify
                  </h2>

                  <p class="text-success mt-3">
                    Support Development
                  </p>

                  <strong>Become a sponsor</strong>

                  <p class="mt-8">
                    Vuetify is free to use software under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT</a> License and requires an extensive amount of time to maintain. Supporting development ensures Vuetify will be actively maintained.
                  </p>

                  <v-btn-alt
                    class="mt-6 "
                    href="https://github.com/sponsors/johnleider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support now
                  </v-btn-alt>
                </v-responsive>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </v-sheet>
    </v-main>

    <v-footer>
      <v-container class="text-overline d-flex align-center justify-space-between">
        <div>
          Copyright &copy; 2022 jayd.be
        </div>

        <v-icon icon="mdi-vuetify" size="x-large" />
      </v-container>
    </v-footer>
  </v-app>
</template>
