document.addEventListener("DOMContentLoaded", () => {  
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const transBtn = document.getElementById("translate-button");
    
    transBtn.addEventListener("click", async () => {
        const url = "https://google-translate1.p.rapidapi.com/language/translate/v2/detect";
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "application/gzip",
                "X-RapidAPI-Key": "df627f54f0mshe7ff77655171d85p134661jsn632d82aee0da",
                "X-RapidAPI-Host": "google-translate1.p.rapidapi.com"
            },
            body: new URLSearchParams(
                {
                    q: input.innerText
                }
            )
        }

        const response = await fetch(url, options);
        const result = await response.text();
        output.innerText = result;
    });
});