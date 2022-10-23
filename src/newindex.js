class EventsApi {
static BASEURL = 'https://pixabay.com/api/';
  static #API = "30706711-d5d2ff18b6ad5954982c3eaa0";
    page = 1;
    constructor(keyword = '', perPage) {
        this.keyword = keyword;
        this.perPage = perPage;

    }
    async fechEvents() {
        const params = new URLSearchParams({
            apikey: EventsApi.#API,
            page:this.page,
            keyword: this.keyword,
            perPage: 40,
       });

        const results = await fetch(`${EventsApi.BASEURL}?${params} `)
        return results.ok ? results.json() : Promise.reject(results.statusText)
    }
    
    resetPage() {
        this.page = 1;
    }
}