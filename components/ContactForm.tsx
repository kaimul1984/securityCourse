import React from "react";

export default function ContactForm() {
  return (
    <div className="flex-1 p-8 bg-bermuda rounded-lg">
      <h1 className="text-3xl font-extrabold mb-2">Enquire now</h1>
      <p className="mb-4">Please write to us if you Have any Questions?</p>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="pl-4 py-2 rounded-lg "
        />
        <input
          type="text"
          placeholder="Last Name"
          className="pl-4 py-2 rounded-lg "
        />
        <input
          type="email"
          placeholder="Enter your Email"
          className="pl-4 py-2 rounded-lg "
        />
        <input
          type="text"
          placeholder="Subject"
          className="pl-4 py-2 rounded-lg "
        />
        <textarea
          placeholder="Write Your Enquire Here"
          rows={6}
          className="rounded-lg p-4"
        ></textarea>
        <button
          type="submit"
          className="border-2 px-12 py-2 bg-midnight text-white text-lg font-bold w-max rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
