import datafetcher from "./datafetcher.js";

export default class results {
    constructor() {
        const myDataFetcher = new datafetcher();
        this.init();
    }

    async init() {
        const departments = await this.myDataFetcher.getInfo("https://collectionapi.metmuseum.org/public/collection/v1/departments");
        this.displaydepartments(departments);
    }


    displaydepartments(list) {
        console.log("displaying departments...")
    }
}