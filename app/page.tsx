import { syne } from "./fonts";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> 
      <h1 className="text-4xl font-bold mb-6">Welcome to My Next.js App</h1>

      <p className={`text-lg ${syne.className}`}> Trial font usage with Syne </p>
    </div>
  );
}
