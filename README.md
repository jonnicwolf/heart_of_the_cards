# heart_of_the_cards

#### [Live Site](https://cartomancerssecrets.netlify.app)

# Client
Heart of the Cards is a tarot reading app that offers users the ability to select up to five cards. These cards are sourced from an API and presented alongside a personalized reading.

## API Reference
### Cards
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

### OpenAI
```
  openai.chat.completetions.create
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
- Bebas Neue [https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap]


## Features
- User authenticated
- AI card interpreter
- Cross platform

## Tech Stack

**Client:** React, Styled-Components, React Motion, p5.js, OpenAI, Firebase Auth

**Server:** Node, Express, Axios, Firebase Store
