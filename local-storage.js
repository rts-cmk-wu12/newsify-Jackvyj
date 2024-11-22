export default class localStorageHelper {

    constructor() {

        var topics = ["europe", "sport", "business", "travel", "health"];

        topics.forEach((topic) => {
            if(!localStorage.getItem(topic)) {
                localStorage.setItem(topic, "1");
            }
        });
        
        if(!localStorage.getItem("bookmarks")) {
            localStorage.setItem("bookmarks", "[]");
        }

        if(!localStorage.getItem("dark-mode")) {
            localStorage.setItem("dark-mode", "0");
        }
    }

    get(elementName) {
        var element = localStorage.getItem(elementName) || {};

        return JSON.parse(element);
    }

    set(elementName, value) {
        var valueAsJson = JSON.stringify(value);

        localStorage.setItem(elementName, valueAsJson);
    }
}