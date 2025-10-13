"use client"

import { useActionState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
    async function formAction(prevState, formData) {
        const name = formData.get("name");
        const gmail = formData.get("gmail");
        const category = formData.get("category");
        const message = formData.get("message");

        const errors = {};
        if (!name) errors.name = "Your Name is Required";
        if (!gmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail)) errors.gmail = "Your Active GMAIL is Required";
        if (!category) errors.category = "The Service Category is Required";
        if (!message) errors.message = "The Specifics of your Requirements are Necessary";

        if (Object.keys(errors).length > 0) {
            return { success: false, errors };
        }

        formData.append("access_key", "ac298f92-0301-4d62-a719-a5850ae2822d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
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
                toast.success("Your Mail Was Sent Succesfully, I Will Get in Contact With You Soon");
                return { success: true };
            } else {
                toast.error("❌ Sorry, Your Mail Was Not Forwarded Successfully.");
                return { success: false, errors: { submit: "Something went wrong." } };
            }
        }
        catch (error) {
            toast.error("Sorry Your Mail Was Not Forwarded Succesfully")
            return { success: false, errors: { submit: "Something Went Wrong, Please Try Again" } };

        }
    }

    const [state, formActionDispatch] = useActionState(formAction, { success: false, errors: {} })

    return (
        <div className="flex flex-col bg-neutral-700 min-h-screen font-sans">
            <h1 className="flex justify-center text-3xl font-bold underline text-shadow-lg text-shadow-blue-500 animate-pulse">Get in Touch With Me!!!!</h1>
            <>
                <form action={formActionDispatch} className="bg-gray-900 flex flex-col rounded-lg w-140 items-center ml-77 mt-6 gap-4">
                    <div className="flex flex-col mt-5">
                        <h3 className="flex justify-center">Please Enter Your Name</h3>
                        <input type="text" name="name" className="border-2 border-blue-400 rounded-lg mt-3" ></input>
                        {state.errors?.name && <p className="pl-8 text-red-500 text-sm">{state.errors.name}</p>}
                    </div>
                    <div>
                        <h3 className="flex justify-center">Please Enter Your Active Gmail Address</h3>
                        <input type="text" name="gmail" className="border-2 border-blue-400 rounded-lg mt-3 ml-8"></input>
                        {state.errors?.gmail && <p className="pl-4 text-red-500 text-sm">{state.errors.gmail}</p>}
                    </div>
                    <div>
                        <h3 className="flex justify-center">Please Enter the Type of Service You Require</h3>
                        <select name="category" className="border-2 border-blue-400 ml-6 mt-3">
                            <option className="bg-slate-500"value="">Select a Service Type</option>
                            <option  className="bg-slate-500"value="FrontEnd Development"> Front End Development</option>
                            <option className="bg-slate-500" value="BackEnd Development"> Back End Development</option>
                            <option className="bg-slate-500" value="MERN Development"> MERN Development</option>
                            <option className="bg-slate-500" value="Full Stack Development"> Full Stack Development</option>
                            <option className="bg-slate-500" value="Mobile Application Development"> Mobile Application Development</option>
                            <option className="bg-slate-500" value="Other"> Other</option>
                        </select>
                        {state.errors?.category && <p className="text-red-500 text-sm">{state.errors.categpry}</p>}
                    </div>
                    <div>
                        <h3 className="flex justiyf-center">Please Enter the Specifics of You Requirement</h3>
                        <textarea name="message" className="border-2 border-blue-400 rounded-lg ml-15 h-35 mt-3"></textarea>
                        {state.errors?.message && <p className="text-red-500 text-sm">{state.errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={state.pending}
                        className="relative group overflow-hidden py-1 px-6 rounded text-white font-semibold transition-all duration-300 cursor-pointer mb-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="flex relative z-10 gap-2 pt-2 text-xl">
                            {state.pending ? "Submitting..." : "Submit Form"}
                        </span>
                    </button>
                </form>
            </>
        </div>
    );
} 