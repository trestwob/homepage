const VERSES = [
  `JER 29:11`,
  `PSA 23`,
  `1COR+4:4-8`,
  `PHP 4:13`,
  `JHN 3:16`,
  `ROM 8:28`,
  `ISA 41:10`,
  `PSA 46:1`,
  `GAL+5:22-23`,
  `HEB 11:1`,
  `2TI 1:7`,
  `1COR 10:13`,
  `PRO 22:6`,
  `ISA 40:31`,
  `JOS 1:9`,
  `HEB 12:2`,
  `MAT 11:28`,
  `ROM+10:9-10`,
  `PHP+2:3-4`,
  `MAT+5:43-44`,
];
const verseIndex = Math.floor(Math.random() * VERSES.length);
const quote = {
    bookName: "",
    verse: "",


    fetchApi: async function () {
        const verseToday = VERSES[verseIndex];
        console.log(verseToday);
        const url = `https://bible-api.com/${verseToday}`
        try {
            const res = await fetch(url, {
                method: "GET", 
            });
            if (!res.ok) {
                throw new Error(`${res.status}`);
            }
            const data = await res.json();
            this.bookName = data.reference;
            this.verse = data.verses[0].text;
            console.log(this.bookName, this.verse);
        } catch (err) {
            console.log(err);
        }
    },
    
    quotes: async function (element: HTMLBodyElement) {
        await quote.fetchApi();
        element.innerHTML = `<span>Today's verse -> </span>${quote.bookName}</span> <p>${quote.verse}</p>`;
    }
}
export const {quotes} = quote;
