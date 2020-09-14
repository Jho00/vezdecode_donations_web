import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    donations: [
      {
        id: '1',
        title: "Добряши помогают котикам",
        donationText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt est id ipsa iste libero mollitia neque pariatur possimus? Animi, doloribus in incidunt pariatur perferendis quasi voluptas! Ea quam, quidem?',
        author: 'Михаил Павлович',
        subTitle: "Помощь нужна каждый день",
        imgPath: "https://cdn.britannica.com/24/212324-050-076731DA/Persian-cat-sleeping.jpg",
        donationAll: 1000,
        donationReal: 875,
        progressTitle: 'В сентябре собрано: '
      },
      {
        id: '2',
        title: "Добряши помогают котикам",
        donationText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt est id ipsa iste libero mollitia neque pariatur possimus? Animi, doloribus in incidunt pariatur perferendis quasi voluptas! Ea quam, quidem?',
        author: 'Михаил Павлович',
        subTitle: "Помощь нужна каждый день",
        imgPath: "https://cdn.britannica.com/24/212324-050-076731DA/Persian-cat-sleeping.jpg",
        donationAll: 1000,
        donationReal: 875,
        progressTitle: 'В сентябре собрано: '
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
