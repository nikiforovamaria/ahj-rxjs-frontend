export default class Layout {
  constructor() {
    this.body = document.body;
  }

  init() {
    this.container = document.createElement('div');
    this.container.className = 'container';
    this.container.append(this.renderMessages());
    this.body.append(this.container);
  }

  renderMessages() {
    this.messagesEl = document.createElement('div');
    this.messagesEl.className = 'messages';
    this.incomingEl = document.createElement('p');
    this.incomingEl.className = 'messages__incoming';
    this.incomingEl.textContent = 'Incoming';
    this.incomingMsgs = document.createElement('div');
    this.incomingMsgs.className = 'messages__incoming';
    this.messagesEl.append(this.incomingEl);
    this.messagesEl.append(this.incomingMsgs);
    return this.messagesEl;
  }

  renderMessage(email, text, timestamp) {
    this.text = text.length <= 15 ? text : `${text.substr(0, 15)}...`;
    this.email = email.length <= 20 ? email : `${email.substr(0, 20)}...`;
    this.messageEl = document.createElement('div');
    this.messageEl.className = 'message';
    this.contactEl = document.createElement('div');
    this.contactEl.className = 'message__contact';
    this.contactEl.textContent = this.email;
    this.textEl = document.createElement('div');
    this.textEl.className = 'message__text';
    this.textEl.textContent = this.text;
    this.timestampEl = document.createElement('div');
    this.timestampEl.className = 'message__timestamp';
    this.timestampEl.textContent = timestamp;
    this.messageEl.append(this.contactEl, this.textEl, this.timestampEl);
    this.incomingMsgs.insertAdjacentElement('afterbegin', this.messageEl);
  }
}
