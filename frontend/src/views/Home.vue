<!--求人情報【一覧】-->

<template>
  <div>
    <!--コンテナ要素-->
    <v-container>
      <h1>Job Board</h1>

      <!--求人情報一覧-->
      <div v-for="job in jobs" :key="job.pk">
        <h2>
          <!--名前付きルート（index.jsにnameを指定）-->
          <!--forの中のため、 paramにtask.idを渡すことで、それぞれのtaskへのリンクを生成出来る-->
          <router-link
            :to="{  name: 'job', params: { id: job.id }}"
            class="job-link"
          >{{ job.company_name }}
          </router-link>
        </h2>

        <p>{{ job.job_title }}</p>
  
        <hr>
      </div>

      <!--ローディング中-->
      <div class="my-4">
        <p v-show="loadingJobs">...loading...</p>

        <v-btn
          v-show="next"
          @click="getJobs"
          color='success'
        >Load More
        </v-btn>

      </div>
    </v-container>
  </div>
</template>

<script>

import { apiService } from '../common/api.service.js'

export default {
  name: "home",
  data() {
    return {
      jobs: [],
      next: null,
      loadingJobs: false
    }
  },
  methods: {
    getJobs() {
      let endpoint = '/api/jobs/'
      if (this.next) {
        endpoint = this.next;
      }
      this.loadingJobs = true;
      apiService(endpoint).then(data => {
        this.jobs.push(...data.results)
        this.loadingJobs = false;
        if (data.next) {
          this.next = data.next;
        } else {
          this.next = null;
        }
      })
    }
  },
  created() {
    this.getJobs()
    document.title = 'Job Board';
  }
};

</script>

<style scoped>

.job-link {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.job-link:hover {
  color: #41B883;
}

</style>
