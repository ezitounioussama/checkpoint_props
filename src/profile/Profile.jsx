import React from "react";

function Profile({ fullName, bio, profession, children, handleName }) {
  handleName = () => {
    alert("WoooooooooooooW Magic!!");
  };
  return (
    <div className="relative block overflow-hidden rounded-lg border shadow-lg border-gray-100 p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {fullName}
          </h3>
          <p class="mt-1 text-xs font-medium text-gray-600">{profession}</p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt="Oussama-Ezitouni"
            src={children}
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="max-w-[40ch] text-sm text-gray-500">{bio}</p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">19st Sep, 2001</dt>
          <dd className="text-xs text-gray-500">Bio</dd>
        </div>

        <div className="flex ml-36">
          <button
            onClick={handleName}
            class="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          >
            <span class="sr-only"> Download </span>

            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </dl>
    </div>
  );
}

export default Profile;
