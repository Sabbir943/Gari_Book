import { useState } from "react";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";

export default function BookingForm() {
  const [tripType, setTripType] = useState("one-way");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only interaction state (no page reload)
    setStatus(
      `Searching cars for ${tripType.replace("-", " ")} trip from "${pickup}" to "${dropoff}" on ${date} at ${time}.`
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
        {/* Trip Type Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-4 mb-6">
          {["one-way", "round-trip", "hourly"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                setTripType(type);
                setStatus("");
              }}
              aria-pressed={tripType === type}
              className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                tripType === type
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {type.replace("-", " ")}
            </button>
          ))}
        </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Pickup */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-emerald-500">
          <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
          <input
            type="text"
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full text-sm outline-none bg-transparent"
            required
          />
        </div>

        {/* Drop-off */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-emerald-500">
          <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Drop-off Location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full text-sm outline-none bg-transparent"
            required
          />
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 focus-within:ring-2 focus-within:ring-emerald-500">
          <Calendar className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full min-w-0 text-sm outline-none bg-transparent text-gray-700"
            required
          />
          <Clock className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full min-w-0 text-sm outline-none bg-transparent text-gray-700"
            required
          />
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl px-4 py-3 flex items-center justify-center gap-2 transition-colors shadow-md"
        >
          <span>Find Cars</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Non-blocking submit feedback (QA: no alerts, no reload) */}
      <div role="status" aria-live="polite" className="min-h-6 mt-3">
        {status && (
          <p className="text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 inline-block">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}