export class Popup {
  
  constructor(popupSelector) {

    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close-btn');
    
  };

  _closeByEsc(evt) {

    if (evt.key === 'Escape') {
      this.close();
    }
  
  }

  open() {

    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeByEsc.bind(this));
  
  }
  
  close() {

    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeByEsc.bind(this));
  
  }

  setEventListeners() {

    this._popup.addEventListener('mousedown', (evt) => {

      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }

      this._popupCloseButton.addEventListener('click', () => {
        this.close();
      })
    
    })

  }

}