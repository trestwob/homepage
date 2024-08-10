export function dateTime(element: HTMLTimeElement) {
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        element.innerText = `Time now: ${clockStr}`;
    }

    updateTime()
    setInterval(updateTime, 1000);
} 
