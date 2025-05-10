class TextSplitter {
  constructor(element, options = {}) {
    this.element = element;
    this.originalText = element.innerText;
    this.chars = this.split();
  }

  split() {
    const chars = this.originalText.split('');
    this.element.innerHTML = chars.map(char =>
      `<span class="char">${char}</span>`
    ).join('');
    return this.element.querySelectorAll('.char');
  }

  getChars() {
    return this.chars;
  }
}

class BlurScrollEffect {
  constructor(textElement) {
    console.log()
    if (!textElement) {
      throw new Error('Invalid text element provided.');
    }
    this.textElement = textElement;
    this.splitter = new TextSplitter(textElement);
    this.initialize();
  }

  initialize() {
    const chars = this.splitter.getChars();
    gsap.set(chars, {
      opacity: 0,
      filter: 'blur(10px)',
      y: 20
    });
    return chars;
  }
}