"use client";

import Link from "next/link";
import { useState } from "react";
import { dmsSystems } from "@/data/dms-systems";
import { DirectoryIllustration } from "@/components/illustrations";

const allSectors = Array.from(
  new Set(dmsSystems.flatMap((d) => d.sectors))
).sort();

const deploymentLabels: Record<string, string> = {
  cloud: "Cloud",
  on_premise: "On-Premise",
  hybrid: "Hybrid",
};

const pricingLabels: Record<string, string> = {
  per_user: "Per User",
  flat: "Flat Rate",
  custom: "Custom",
  free_tier: "Free Tier",
};

export default function DMSDirectoryPage() {
  const [sectorFilter, setSectorFilter] = useState("");
  const [deploymentFilter, setDeploymentFilter] = useState("");
  const [pricingFilter, setPricingFilter] = useState("");

  const filtered = dmsSystems.filter((dms) => {
    if (sectorFilter && !dms.sectors.includes(sectorFilter)) return false;
    if (deploymentFilter && dms.deployment !== deploymentFilter) return false;
    if (pricingFilter && dms.pricingModel !== pricingFilter) return false;
    return true;
  });

  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                Compare Document Management Systems
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                Browse {dmsSystems.length} DMS platforms — filter by sector,
                deployment type, or pricing model.
              </p>
            </div>
            <div className="hidden md:block shrink-0">
              <DirectoryIllustration className="w-[200px] h-[150px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
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
            <select
              value={deploymentFilter}
              onChange={(e) => setDeploymentFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent"
            >
              <option value="">All Deployments</option>
              <option value="cloud">Cloud</option>
              <option value="on_premise">On-Premise</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <select
              value={pricingFilter}
              onChange={(e) => setPricingFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent"
            >
              <option value="">All Pricing</option>
              <option value="per_user">Per User</option>
              <option value="flat">Flat Rate</option>
              <option value="custom">Custom</option>
              <option value="free_tier">Free Tier</option>
            </select>
            {(sectorFilter || deploymentFilter || pricingFilter) && (
              <button
                onClick={() => {
                  setSectorFilter("");
                  setDeploymentFilter("");
                  setPricingFilter("");
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
              No DMS systems match your filters. Try adjusting your criteria.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((dms) => (
                <Link
                  key={dms.slug}
                  href={`/dms/${dms.slug}`}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-accent transition-all group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{dms.emoji}</span>
                    <div>
                      <h3 className="text-lg font-bold text-navy group-hover:text-blue-accent transition-colors">
                        {dms.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-1">
                    {dms.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {dms.sectors.slice(0, 3).map((sector) => (
                      <span
                        key={sector}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {sector}
                      </span>
                    ))}
                    {dms.sectors.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{dms.sectors.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs font-medium bg-blue-50 text-blue-accent px-2 py-1 rounded-full">
                      {pricingLabels[dms.pricingModel]}
                    </span>
                    <span className="text-xs font-medium bg-gray-50 text-gray-600 px-2 py-1 rounded-full">
                      {deploymentLabels[dms.deployment]}
                    </span>
                  </div>
                  <p className="text-blue-accent text-sm font-semibold mt-4 group-hover:underline">
                    View Details →
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
