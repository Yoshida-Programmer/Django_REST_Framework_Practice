<!--求人情報【ベース】-->

<template>
  <!--v-app = Vuetifyの導入に必須となるタグ（これがない状態で設定すると処理に不備が生じる）-->
  <v-app>
    <!---v-app-bar = 常にアプリケーションの最上部に配置されます(darkで背景が黒、文字が白くなる)-->
    <v-app-bar color='success' dark app>
      <v-toolbar-title>求人情報</v-toolbar-title>
      <!--間をいい感じに空けてくれる-->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to='/'>ホーム</v-btn>
        <v-btn text to='/editor'>仕事追加</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer color='success' dark app class="justify-center">
      Your Name
    </v-footer>

  </v-app>
</template>