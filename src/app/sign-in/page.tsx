"use client";
export default function SignInPage() {
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("E: ", e);
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-red-400 flex flex-col w-full max-w-md p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>
        <div>
          <form onSubmit={handleSignIn}>
            <label htmlFor="username" className="text-lg mb-2">
              Username:
            </label>
            <input
              type="text"
              placeholder="email"
              className="mb-4 p-2 rounded border w-full text-lg"
            />

            <label htmlFor="password" className="text-lg mb-2">
              Password:
            </label>
            <input
              type="text"
              placeholder="password"
              className="mb-6 p-2 rounded border w-full text-lg"
            />

            <button
              type="submit"
              className="bg-white text-sky-800 border rounded-xl px-6 py-2 text-lg font-semibold hover:cursor-pointer hover:bg-slate-400">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
