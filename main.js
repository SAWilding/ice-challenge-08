import datafetcher from "./datafetcher.js";
import results from "./results.js";

const data = new datafetcher();

document.querySelector("#search").addEventListener("click", () => {
    
    const depId = document.querySelector("#department-select").selectedOptions[0].value;
    console.log(depId);
    data.displayResults(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${depId}`)
})
