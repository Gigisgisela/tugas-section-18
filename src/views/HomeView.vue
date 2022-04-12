<template>
  <div class="home">
    <v-app-bar tile dark elevation="2" color="pink darken-4">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <h3>News App</h3>
      <v-spacer></v-spacer>

      <div class="category">
        <v-btn class="mr-2" color="brown lighten-5" light rounded elevation="0" @click="setCategory('bitcoin')">bitcoin</v-btn>
        <v-btn class="mr-2" color="brown lighten-5" light rounded elevation="0" @click="setCategory('food')">food</v-btn>
        <v-btn class="mr-2" color="brown lighten-5" light rounded elevation="0" @click="setCategory('furniture')">furniture</v-btn>
      </div>
      
      <v-col cols="12" sm="6" md="4">
        <v-text-field class="mt-6 ml-2" filled rounded dense append-icon="mdi-magnify"/>
      </v-col>

       <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>


    <v-card
    class="mx-auto my-10"
    max-width="80%"
    v-for="(message, index) in messages" :key="index"
    >
    
      <v-img
        height="500"
        :src="message.urlToImage"
      ></v-img>

      <v-card-title>{{ message.title }}</v-card-title>

      <v-card-text>
        <div class="my-1 text-subtitle-2"
        v-if="messages[index].author === null">
          Author  : Anonymous
        </div>

        <div class="my-1 text-subtitle-2"
        v-else>
          Author  : {{ message.author }}
        </div>

        <div>{{ message.publishedAt }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-btn
          class="px-5"
          color="pink darken-3"
          dark large
          :to="'/detail/id' + index"
        >
          read this news          
          
        </v-btn>
      </v-card-actions>
    </v-card>


  </div>
</template>

<script>
export default {
  name: 'HomeView',
  
  computed: {
    messages() {
      return this.$store.state.newsList
    }
  },
  mounted() {
    this.$store.dispatch("fetchNews")
  },
  methods: {
    setCategory(keyword) {
      this.$store.dispatch("fetchNews", keyword)
    }
  }
}
</script>
