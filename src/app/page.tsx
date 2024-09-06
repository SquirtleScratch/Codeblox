import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center h-screen">
      <div className="absolute inset-0 z-0">
      <Image
          src='/background.webp'
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-black opacity-40"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full">

      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to Code Blox</h1>
        <p className="text-lg">Choose a game or log in to get started!</p>
      </header>

      <div className="space-y-6">
        {/* Centered Log In Button */}
        <a href="/api/auth/signin/google" className="block px-9 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mx-auto w-32">
          Log in
        </a>

        {/* Game Buttons */}
        <div className="flex space-x-6">
          <a href="/ifelse" className="inline-block px-8 py-4 bg-green-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
            Animal challenge
          </a>
          <a href="/challenge" className="inline-block px-8 py-4 bg-red-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
            Maze challenge
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}