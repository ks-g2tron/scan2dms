"use client";

import Link from "next/link";
import { useState } from "react";
import { consultants } from "@/data/consultants";
import { TeamIllustration } from "@/components/illustrations";

const allRegions = Array.from(new Set(consultants.map((c) => c.region))).sort();
const allSpecialisms = Array.from(
  new Set(consultants.flatMap((c) => c.specialisms))
).sort();
const allSectors = Array.from(
  new Set(consultants.flatMap((c) => c.sectors))
).sort();

const typeBadgeColors: Record<string, string> = {
  Individual: "bg-green-50 text-green-700",
  Consultancy: "bg-blue-50 text-blue-700",
  Reseller: "bg-purple-50 text-purple-700",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function ConsultantsDirectoryPage() {
  const [regionFilter, setRegionFilter] = useState("");
  const [specialismFilter, setSpecialismFilter] = useState("");
  const [sectorFilter, setSectorFilter] = useState("");

  const filtered = consultants.filter((c) => {
    if (regionFilter && c.region !== regionFilter) return false;
    if (specialismFilter && !c.specialisms.includes(specialismFilter))
      return false;
    if (sectorFilter && !c.sectors.includes(sectorFilter)) return false;
    return true;
  });

  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                Find a UK DMS Specialist
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                Browse document management consultants, resellers, and
                independent specialists across the UK.
              </p>
            </div>
            <div className="hidden md:block shrink-0">
              <TeamIllustration className="w-[200px] h-[150px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-accent/10 border-b border-blue-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-700">
              Are you a DMS consultant? List your practice for free.
            </p>
            <Link
              href="/list-your-practice"
              className="bg-blue-accent hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              List Your Practice →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent"
            >
              <option value="">All Regions</option>
              {allRegions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <select
              value={specialismFilter}
              onChange={(e) => setSpecialismFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent"
            >
              <option value="">All Specialisms</option>
              {allSpecialisms.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent"
            >
              <option value="">All Sectors</option>
              {allSectors.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {(regionFilter || specialismFilter || sectorFilter) && (
              <button
                onClick={() => {
                  setRegionFilter("");
                  setSpecialismFilter("");
                  setSectorFilter("");
                }}
                className="text-sm text-blue-accent hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No consultants match your filters. Try adjusting your criteria.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((consultant) => (
                <Link
                  key={consultant.slug}
                  href={`/consultants/${consultant.slug}`}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-accent transition-all group"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {getInitials(consultant.name)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-navy group-hover:text-blue-accent transition-colors">
                        {consultant.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {consultant.company}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${typeBadgeColors[consultant.type]}`}
                    >
                      {consultant.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    📍 {consultant.city}, {consultant.region}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {consultant.specialisms.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                    {consultant.specialisms.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{consultant.specialisms.length - 3}
                      </span>
                    )}
                  </div>
                  <p className="text-blue-accent text-sm font-semibold group-hover:underline">
                    View Profile →
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
