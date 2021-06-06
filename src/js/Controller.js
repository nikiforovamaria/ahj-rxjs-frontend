export default class Controller {
  constructor(layout, api) {
    this.layout = layout;
    this.api = api;
  }

  init() {
    this.layout.init();
    this.messagesEl = Array.from(document.querySelectorAll('.message'));
    this.initStream();
  }

  initStream() {
    this.stream$ = this.api.initStream();
    this.stream$.subscribe((messages) => {
      while (document.querySelector('.message') !== null) {
        document.querySelector('.message').remove();
      }
      messages.forEach((message) => {
        this.layout.renderMessage(message.from, message.subject, message.received);
      });
    });
  }
}
