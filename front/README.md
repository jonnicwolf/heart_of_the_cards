
# Heart of the Cards

Heart of the Cards is a tarot reading app that offers users the ability to select up to five cards. These cards are sourced from an API and presented alongside a personalized reading.

## API Reference

#### Get all cards
```http
  GET https://tarotapi.dev/api/v1/cards
```

#### Get random card
**Replace $n with desired amount (number)
```http
  GET https://tarotapi.dev/api/v1/cards/random
```

#### Get n random cards
```http
    GET https://tarotapi.dev/api/v1/cards/random?n=$n
```

#### Get all card scans
```http
    GET http://data.totl.net/tarot-rwcs-images/
```

#### Ace of Cups
```http
    GET http://data.totl.net/tarot-rwcs-images/c01.jpg
```


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| <span style="color:#e1c4ca">Example Color</span> | `#e1c4ca` |
| <span style="color:#a57fa0">Example Color</span> | `#a57fa0` |
| <span style="color:#db8aae">Example Color</span> | `#db8aae` |
| <span style="color:#b25385">Example Color</span> | `#b25385` |
| <span style="color:#699897">Example Color</span> | `#699897` |



## Run Locally
#### Clone this project
```bash
    git clone https://github.com/jonnicwolf/heart_of_the_cards.git
```
#### then
```bash
    cd heart_of_the_cards/
```
#### Start localhost
```bash
  npm run dev
```
#### Build
```bash
    npm run build
```


## Fonts
#### Headers
- Bagnard [https://www.1001fonts.com/bagnard-font.html#waterfalls_bagnard_regular_otf]
#### Titles
- Amatic SC Bold [https://fonts.google.com/specimen/Amatic+SC?query=amat]
#### Normal Text
- Amatic SC Regular [https://fonts.google.com/specimen/Amatic+SC?query=amat]





## Features

- User authenticated
- AI voiceover actor
- AI card interpreter
- Cross platform


![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


## Tech Stack

**Client:** React, Styled-Components, React Motion, p5.js

**Server:** Node, Express, Axios, Firebase
