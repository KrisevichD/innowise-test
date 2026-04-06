export default class ThemeManager {
  storageName = "theme";

  selectors = {
    button: "[data-js-theme-button]",
  };

  themes = {
    light: "light",
    dark: "dark",
  };

  defaultTheme = this.themes.light;

  constructor() {
    this.buttonElement = document.querySelector(this.selectors.button);
    this.theme = this.initTheme();
    this.bindEvents();
  }

  initTheme() {
    const theme = localStorage.getItem(this.storageName);
    switch (theme) {
      case this.themes.light: {
        return this.themes.light;
      }
      case this.themes.dark: {
        document.body.classList.toggle("is-dark-theme");
        return this.themes.dark;
      }
      default: {
        localStorage.setItem(this.storageName, this.defaultTheme);
        return this.defaultTheme;
      }
    }
  }

  bindEvents() {
    this.buttonElement.addEventListener("click", () => {
      document.body.classList.toggle("is-dark-theme");
      if (this.theme === this.themes.light) {
        this.theme = this.themes.dark;
      } else {
        this.theme = this.themes.light;
      }
      localStorage.setItem(this.storageName, this.theme);
    });
  }
}
