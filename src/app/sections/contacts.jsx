"use client"

export default function ContactPage() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ac298f92-0301-4d62-a719-a5850ae2822d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accept: "application/json"
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
                <form onSubmit={handleSubmit} className="bg-yellow-500 flex flex-col rounded-lg w-140 items-center ml-77 mt-6">
                    <div>
                        <h3>Please Enter Your Name</h3>
                        <input type="text" name="name" className="border-2 border-blue-400 rounded-lg" ></input>
                    </div>
                    <div>
                        <h3>Please Enter Your Name</h3>
                        <input type="text" name="email"  className="border-2 border-blue-400 rounded-lg"></input>
                    </div>
                    <div>
                        <h3>Please Enter the Type of Service You Require</h3>
                        <select name="category" className="border-2 border-blue-400 ml-10">
                            <option value="">Select a Service Type</option>
                            <option value="FrontEnd Development"> Front End Development</option>
                            <option value="BackEnd Development"> Back End Development</option>
                            <option value="MERN Development"> MERN Development</option>
                            <option value="Full Stack Development"> Full Stack Development</option>
                            <option value="Mobile Application Development"> Mobile Application Development</option>
                            <option value="Other"> Other</option>
                        </select>
                    </div>
                    <div>
                        <h3>Please Enter the Specifics of You Requirement</h3>
                        <input type="text" name="message"  className="border-2 border-blue-400 rounded-lg ml-15"></input>
                    </div>
                    <button type="submit">Submit Form</button>
                </form>
            </>
        </div>
    );
} 