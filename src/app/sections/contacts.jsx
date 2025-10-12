"use client"

export default function ContactPage() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ac298f92-0301-4d62-a719-a5850ae2822d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method : "POST",
            headers : {
                "content-type" : "application/json",
                Accept : "application/json" 
            },
            body: json
            });

            const result = await response.json();
            if (result.success) {
                console.log(result);
            }
        }
    

    return (
        <div className="flex flex-col bg-neutral-700 min-h-screen font-sans">
            <h1 className="flex justify-center text-3xl font-bold underline text-shadow-lg text-shadow-blue-500 animate-pulse">Get in Touch With Me!!!!</h1>
            <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" ></input>
                <input type="text" name="email"></input>
                <input type="text" name="message"></input>
                <button type="submit">Submit Form</button>
            </form>
            </>
        </div>
    );
} 