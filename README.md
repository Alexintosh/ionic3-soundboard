# Soundboard
A soundboard app made in Ionic 3


 ## Running
 * Clone this repository: `https://github.com/Alexintosh/ionic3-soundboard.git`.
 * Run `npm install` from the project root.
 * If you do not install the ionic CLI (`npm install -g ionic`)
 * Run `ionic serve` in a terminal from the project root.
 
 
 ## App Preview
 <img src="gif-here" alt="Preview">

 ## File Structure
 
```markdown
 - __ionic3-soundboard__
  - [config.xml](ionic3-soundboard/config.xml)
  - __resources__    
  - __src__
    - __app__
      - [app.component.ts](ionic3-soundboard/src/app/app.component.ts)
      - [app.html](ionic3-soundboard/src/app/app.html)
      - [app.module.ts](ionic3-soundboard/src/app/app.module.ts)
      - [app.scss](ionic3-soundboard/src/app/app.scss)
      - [main.ts](ionic3-soundboard/src/app/main.ts)
    - __assets__
      - __animals__
        - [bird-icon.png](ionic3-soundboard/src/assets/animals/bird-icon.png)
        - [black-cat-icon.png](ionic3-soundboard/src/assets/animals/black-cat-icon.png)
        - [cow-icon.png](ionic3-soundboard/src/assets/animals/cow-icon.png)
        - [dolphin-icon.png](ionic3-soundboard/src/assets/animals/dolphin-icon.png)
        - [frog-icon.png](ionic3-soundboard/src/assets/animals/frog-icon.png)
        - [mouse-icon.png](ionic3-soundboard/src/assets/animals/mouse-icon.png)
        - [pig-icon.png](ionic3-soundboard/src/assets/animals/pig-icon.png)
        - [puppy-icon.png](ionic3-soundboard/src/assets/animals/puppy-icon.png)
      - __icon__
        - [favicon.ico](ionic3-soundboard/src/assets/icon/favicon.ico)
      - __sounds__
        - [cat.mp3](ionic3-soundboard/src/assets/sounds/cat.mp3)
        - [bird.mp3](ionic3-soundboard/src/assets/sounds/bird.mp3)
        - [cow.mp3](ionic3-soundboard/src/assets/sounds/cow.mp3)
        - [dog.mp3](ionic3-soundboard/src/assets/sounds/dog.mp3)
        - [dolphin.mp3](ionic3-soundboard/src/assets/sounds/dolphin.mp3)
        - [frog.mp3](ionic3-soundboard/src/assets/sounds/frog.mp3)
        - [pig.mp3](ionic3-soundboard/src/assets/sounds/pig.mp3)
    - [declarations.d.ts](ionic3-soundboard/src/declarations.d.ts)
    - [index.html](ionic3-soundboard/src/index.html)
    - [manifest.json](ionic3-soundboard/src/manifest.json)
    - __pages__
      - __about__
        - [about.html](ionic3-soundboard/src/pages/about/about.html)
        - [about.scss](ionic3-soundboard/src/pages/about/about.scss)
        - [about.ts](ionic3-soundboard/src/pages/about/about.ts)
      - __contact__
        - [contact.html](ionic3-soundboard/src/pages/contact/contact.html)
        - [contact.scss](ionic3-soundboard/src/pages/contact/contact.scss)
        - [contact.ts](ionic3-soundboard/src/pages/contact/contact.ts)
      - __home__
        - [home.html](ionic3-soundboard/src/pages/home/home.html)
        - [home.scss](ionic3-soundboard/src/pages/home/home.scss)
        - [home.ts](ionic3-soundboard/src/pages/home/home.ts)
      - __tabs__
        - [tabs.html](ionic3-soundboard/src/pages/tabs/tabs.html)
        - [tabs.ts](ionic3-soundboard/src/pages/tabs/tabs.ts)
    - [service-worker.js](ionic3-soundboard/src/service-worker.js)
    - __theme__
      - [variables.scss](ionic3-soundboard/src/theme/variables.scss)
  - [tsconfig.json](ionic3-soundboard/tsconfig.json)
  - [tslint.json](ionic3-soundboard/tslint.json)
  - __typings__
    - [cordova-typings.d.ts](ionic3-soundboard/typings/cordova-typings.d.ts)
  - __www__
    - __build__
      - [main.css](ionic3-soundboard/www/build/main.css)
      - [main.css.map](ionic3-soundboard/www/build/main.css.map)
      - [main.js](ionic3-soundboard/www/build/main.js)
      - [main.js.map](ionic3-soundboard/www/build/main.js.map)
      - [polyfills.js](ionic3-soundboard/www/build/polyfills.js)
      - [sw-toolbox.js](ionic3-soundboard/www/build/sw-toolbox.js)
    - [service-worker.js](ionic3-soundboard/www/service-worker.js)
    - [index.html](ionic3-soundboard/www/index.html)
    - [manifest.json](ionic3-soundboard/www/manifest.json)
```

 ## Environment
 ```
 cordova CLI: 6.4.0
 Ionic Framework Version: 3.1.1
 Ionic CLI Version: 2.2.3
 Ionic App Lib Version: 3.1.1
 Ionic App Scripts Version: 1.3.7
 OS: macOS Sierra 10.12.3
 Node Version: v6.2.0
 Xcode version: Xcode 8.3 Build version 8E162
 ```
