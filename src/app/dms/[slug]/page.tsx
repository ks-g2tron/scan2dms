import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { dmsSystems } from "@/data/dms-systems";

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

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return dmsSystems.map((dms) => ({ slug: dms.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const dms = dmsSystems.find((d) => d.slug === params.slug);
  if (!dms) return {};
  return {
    title: `${dms.name} — DMS Review`,
    description: dms.shortDescription,
  };
}

export default function DMSDetailPage({ params }: PageProps) {
  const dms = dmsSystems.find((d) => d.slug === params.slug);
  if (!dms) notFound();

  return (
    <>
      <section className="bg-navy text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/dms"
            className="text-gray-400 hover:text-white text-sm mb-4 inline-block transition-colors"
          >
            ← Back to DMS Directory
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{dms.emoji}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold">{dms.name}</h1>
          </div>
          <p className="text-lg text-gray-300">{dms.shortDescription}</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
              {pricingLabels[dms.pricingModel]}
            </span>
            <span className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
              {deploymentLabels[dms.deployment]}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed">{dms.fullDescription}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dms.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <span className="text-blue-accent mt-1 shrink-0">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-navy mb-3">Pricing</h3>
              <p className="text-sm font-medium text-blue-accent mb-2">
                {pricingLabels[dms.pricingModel]}
              </p>
              <p className="text-gray-600 text-sm">{dms.pricingNotes}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-navy mb-3">Deployment</h3>
              <p className="text-sm font-medium text-blue-accent mb-2">
                {deploymentLabels[dms.deployment]}
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Sectors</h2>
            <div className="flex flex-wrap gap-2">
              {dms.sectors.map((sector) => (
                <span
                  key={sector}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Integrations</h2>
            <div className="flex flex-wrap gap-2">
              {dms.integrations.map((integration) => (
                <span
                  key={integration}
                  className="bg-blue-50 text-blue-accent px-3 py-1 rounded-full text-sm"
                >
                  {integration}
                </span>
              ))}
            </div>
          </div>

          {dms.scanCompatible && (
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-3">
                Scanner Compatibility
              </h2>
              <p className="text-gray-300 mb-6">{dms.scanNotes}</p>
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-lg font-semibold mb-2">
                  Need a scanner that works with {dms.name}?
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  The Plustek eScan A450 Pro connects directly to SharePoint,
                  OneDrive, network folders, and more — no PC required.
                </p>
                <Link
                  href="/products/escan-a450-pro"
                  className="inline-block bg-blue-accent hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  View Plustek eScan →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
