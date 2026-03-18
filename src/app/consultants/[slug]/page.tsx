import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { consultants } from "@/data/consultants";

const typeBadgeColors: Record<string, string> = {
  Individual: "bg-green-50 text-green-700",
  Consultancy: "bg-blue-50 text-blue-700",
  Reseller: "bg-purple-50 text-purple-700",
};

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return consultants.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const c = consultants.find((c) => c.slug === params.slug);
  if (!c) return {};
  return {
    title: `${c.name} — ${c.company}`,
    description: c.description,
  };
}

export default function ConsultantDetailPage({ params }: PageProps) {
  const consultant = consultants.find((c) => c.slug === params.slug);
  if (!consultant) notFound();

  return (
    <>
      <section className="bg-navy text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/consultants"
            className="text-gray-400 hover:text-white text-sm mb-4 inline-block transition-colors"
          >
            ← Back to Consultant Directory
          </Link>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-1">
                {consultant.name}
              </h1>
              <p className="text-lg text-gray-300">{consultant.company}</p>
            </div>
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${typeBadgeColors[consultant.type]}`}
            >
              {consultant.type}
            </span>
          </div>
          <p className="text-gray-400 mt-3">
            📍 {consultant.city}, {consultant.region}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">
              {consultant.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-bold text-navy mb-3">Specialisms</h3>
              <div className="flex flex-wrap gap-2">
                {consultant.specialisms.map((s) => (
                  <span
                    key={s}
                    className="bg-blue-50 text-blue-accent px-3 py-1 rounded-full text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-3">Sectors</h3>
              <div className="flex flex-wrap gap-2">
                {consultant.sectors.map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h3 className="font-bold text-navy mb-4">Contact Details</h3>
            <div className="space-y-3">
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href={`mailto:${consultant.email}`}
                  className="text-blue-accent hover:underline"
                >
                  {consultant.email}
                </a>
              </p>
              {consultant.phone && (
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href={`tel:${consultant.phone}`}
                    className="text-blue-accent hover:underline"
                  >
                    {consultant.phone}
                  </a>
                </p>
              )}
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Website:</span>{" "}
                <a
                  href={consultant.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-accent hover:underline"
                >
                  {consultant.website}
                </a>
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">LinkedIn:</span>{" "}
                <a
                  href={consultant.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-accent hover:underline"
                >
                  View Profile
                </a>
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/consultants"
              className="text-blue-accent hover:underline text-sm font-semibold"
            >
              ← Browse all consultants
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
