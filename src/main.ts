import './index.css'
import { dateTime } from './datetime'
import { quotes } from './quotes'
import { todoList } from './todoList'
import { weather } from './weather'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="grid grid grid-cols-12 grid-rows-12 gap-3 h-screen m-5">
        <div id="time" class="row-span-2 col-span-6 text-4xl font-bold p-5 text-center text-orange-300 bg-cyan-800/95 border-4 border-orange-300 rounded-lg"></div>
        <div id="weather" class="row-span-2 col-span-6 text-4xl font-bold p-5 text-orange-300 bg-cyan-800/95 border-4 border-orange-300 rounded-lg"></div>
        
        <div id="todo" class="row-span-6 col-span-4 float-end text-4xl font-bold p-10"></div>
        <div class="row-span-6 col-span-8 place-items-center">
            <h1 class="text-4xl italic font-bold py-10 text-sky-500 text-left">Ny Search</h1>
            <form action="https://www.google.com/search" method="get" class="font-bold text-5xl">
                
                <input type="text" name="q" placeholder="Search cat video" class="border-4 rounded-lg border-cyan-950 hover:border-cyan-400 bg-cyan-800 
                placeholder:text-slate-100 text-slate-100 focus:outline focus:outline-0 transition-colors ease-in duration:300">

                <input type="submit" value="Search" class=" text-5xl text-slate-100 bg-cyan-800 border-4 border-cyan-950 hover:bg-cyan-600 hover:border-cyan-400 
                rounded-lg transition-colors ease-in duration-300 pointer p-1">
            </form>
        </div>

        <div id="quotes" class="row-span-2 col-span-12 text-4xl font-bold p-5 bg-cyan-800/95 text-orange-300 border-4 border-orange-300 rounded-lg"></div>
    </div>
`
quotes(document.querySelector<HTMLBodyElement>('#quotes')!);
dateTime(document.querySelector<HTMLTimeElement>('#time')!);
weather(document.querySelector<HTMLDivElement>('#weather')!);
todoList(document.querySelector<HTMLDataListElement>('#todo')!);
