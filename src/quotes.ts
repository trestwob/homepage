const quote = {
    bookName: "",
    verse: "",

    fetchApi: async function () {
        const url = "https://bible-api.com/john 3:16"
        try {
            const res = await fetch(url, {method: "GET"});
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
