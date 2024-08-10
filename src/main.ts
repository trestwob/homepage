import './index.css'
import { dateTime } from './datetime'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container">
        <h1 class="text-4xl italic font-bold py-10">Ny Search</h1>
        <div class="card">
            <form action="https://www.google.com/search" method="get" class="font-bold text-5xl">
                <input type="text" name="q" placeholder="Search cat video" class="border-8 rounded-lg">
                <input type="submit" value="Search">
            </form>
        </div>
        <h1 id="time" class="text-4xl font-bold p-10"></h1>
    </div>
`
dateTime(document.querySelector<HTMLTimeElement>('#time')!);
