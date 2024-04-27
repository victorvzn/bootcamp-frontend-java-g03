export default function App() {
  return (
    <div className="flex flex-col items-center bg-[#CD8D7A] p-4">
      <h3 className="text-3xl">Counter with Zustand</h3>

      <div className="flex items-center gap-4 mt-4">
        <button className="p-3 bg-green-500 rounded-lg">-1</button>
        <span className="font-bold text-4xl">0</span>
        <button className="p-3 bg-green-500 rounded-lg">+1</button>
      </div>
    </div>
  )
}