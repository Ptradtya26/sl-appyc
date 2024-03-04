// SL-App/index.js

const SLDbMaria = require('sl-dbmaria');

class SLApp {
  constructor(url) {
    this.scraper = new SLDbMaria(url);
  }

  async run() {
    try {
      const htmlData = await this.scraper.fetchData();
      const title = this.scraper.parseHTML(htmlData);

      console.log(`Title: ${title}`);
      console.log(`Current Time: ${this.scraper.getCurrentTime()}`);
      console.log(`Unique ID: ${this.scraper.generateUniqueId()}`);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}

module.exports = SLApp;
