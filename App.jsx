import { useState } from "react";

export default function App() {
  const [platform, setPlatform] = useState("Instagram");
  const [reach, setReach] = useState(10000);
  const [followers, setFollowers] = useState(5000);
  const [length, setLength] = useState(7);
  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    const baseCPM = platform === "TikTok" ? 8 : platform === "Instagram" ? 10 : 12;
    const deliverables = Math.ceil(reach / (followers * 0.5));
    const cost = ((reach / 1000) * baseCPM).toFixed(2);

    setResults({
      deliverables,
      cost,
      explanation: `Using a base CPM of $${baseCPM}, the cost to reach ${reach} people is estimated at $${cost} with approximately ${deliverables} deliverables.`
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Pharos Paid Social Calculator</h1>

      <div className="bg-white shadow rounded p-4 space-y-4">
        <div>
          <label className="block font-semibold">Platform</label>
          <select
            className="w-full border rounded p-2"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="Instagram">Instagram</option>
            <option value="TikTok">TikTok</option>
            <option value="Meta">Meta</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Target Reach</label>
          <input type="number" className="w-full border rounded p-2" value={reach} onChange={(e) => setReach(Number(e.target.value))} />
        </div>

        <div>
          <label className="block font-semibold">Follower Size</label>
          <input type="number" className="w-full border rounded p-2" value={followers} onChange={(e) => setFollowers(Number(e.target.value))} />
        </div>

        <div>
          <label className="block font-semibold">Campaign Length (days)</label>
          <input type="number" className="w-full border rounded p-2" value={length} onChange={(e) => setLength(Number(e.target.value))} />
        </div>

        <button className="bg-blue-600 text-white w-full py-2 rounded" onClick={handleCalculate}>Calculate</button>
      </div>

      {results && (
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Your Estimate</h2>
          <p><strong>Estimated Cost:</strong> ${results.cost}</p>
          <p><strong>Deliverables:</strong> {results.deliverables}</p>
          <p className="text-gray-600 text-sm mt-2">{results.explanation}</p>
        </div>
      )}
    </div>
  );
}
