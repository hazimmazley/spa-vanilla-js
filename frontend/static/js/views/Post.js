import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Post')
    }

    async getHtml() {
        return `<h1>This is post</h1>`;
    }
} 