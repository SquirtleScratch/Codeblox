export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-48 h-12 mx-auto flex items-center justify-center font-mono text-lg rounded-lg bg-blue-500 text-white hover:bg-blue-600">
        <button type="button"><a href="api/auth/signin/google">Login</a></button>
      </div>
    </main>
  );
}
