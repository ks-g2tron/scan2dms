import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Connect a Scanner to SharePoint Online: The Modern Auth Guide",
  description: "The complete guide to connecting a document scanner to SharePoint Online using OAuth 2.0 — avoiding the basic auth issues that broke thousands of HP setups.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/connect-scanner-sharepoint-online-modern-auth" },
};

export default function ModernAuthScannerPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">How to Connect a Scanner to SharePoint Online: The Modern Auth Guide</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>This is part of our broader guide to <Link href="/guides/scan-to-dms-document-scanning-workflows" className="text-blue-600 hover:underline">scan documents to SharePoint</Link> workflows. This article focuses specifically on authentication — the technical layer that determines whether your scanner can actually connect to SharePoint Online, and why it matters more than ever after Microsoft&apos;s 2025 authentication changes.</p>

        <h2 className="text-2xl font-bold text-navy">Basic Auth vs Modern Auth — Why It Matters</h2>
        <p><strong>Basic authentication</strong> works by storing a Microsoft 365 username and password directly on the scanner device. Every time the scanner sends a document to SharePoint, it includes these credentials in the request. It&apos;s simple to set up and was the standard approach for device-to-cloud connections for years.</p>
        <p>The problem: basic auth is inherently insecure. Credentials stored on a device can be extracted. Requests can be intercepted. There&apos;s no MFA support — anyone with the stored credentials can access the SharePoint account from anywhere. Microsoft deprecated basic auth across all Microsoft 365 services in August 2025, immediately breaking every scanner that relied on it.</p>
        <p><strong>Modern authentication (OAuth 2.0)</strong> works differently. The scanner doesn&apos;t store credentials. Instead, it initiates a token exchange with Microsoft&apos;s identity platform. The user authenticates (including MFA if required) via a secure browser flow. Microsoft issues a time-limited access token. The scanner uses this token for SharePoint requests and refreshes it automatically before expiry. No password stored on the device, no vulnerability to credential theft, MFA-compatible.</p>

        <h2 className="text-2xl font-bold text-navy">The Three Ways Scanners Connect to SharePoint</h2>

        <h3 className="text-xl font-bold text-navy">1. Direct OAuth (native modern auth)</h3>
        <p>The scanner has built-in OAuth 2.0 support and authenticates directly with Microsoft&apos;s identity platform. No intermediary software required. This is how standalone PC-free network scanners like the Plustek eScan work. Setup: sign in on the scanner touchscreen, complete the OAuth browser flow on any device, done. The connection is persistent and self-refreshing.</p>

        <h3 className="text-xl font-bold text-navy">2. Via middleware (MFPs and legacy scanners)</h3>
        <p>Software like Kofax, AutoStore, or PaperStream Capture runs on a server or PC. The scanner sends documents to the middleware, which then authenticates with SharePoint using modern auth and forwards the documents. This preserves existing scanner hardware but introduces a middleware dependency, additional cost, and a single point of failure.</p>

        <h3 className="text-xl font-bold text-navy">3. Via Power Automate (workaround)</h3>
        <p>Scanner sends to email or network folder. A Power Automate flow picks up new files and moves them to SharePoint. Works around authentication requirements entirely but adds latency, loses metadata capability, and requires ongoing flow maintenance. Not recommended for production document workflows.</p>

        <h2 className="text-2xl font-bold text-navy">What You Need for a Direct OAuth Connection</h2>
        <ul>
          <li>A scanner with native OAuth 2.0 / modern auth support (confirm this explicitly with the vendor)</li>
          <li>A Microsoft 365 account with SharePoint included</li>
          <li>Network access from the scanner location (port 443 outbound to login.microsoftonline.com and your tenant&apos;s SharePoint URL)</li>
          <li>A device (phone or laptop) to complete the browser-based authentication flow on first setup</li>
          <li>Optional: a Microsoft 365 Global Admin to approve the scanner&apos;s app registration in Azure AD (required if your organisation uses admin consent for app permissions)</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Step-by-Step: Authenticating the eScan with SharePoint Online</h2>
        <ol>
          <li>On the eScan touchscreen: <strong>Settings → Cloud Services → Microsoft 365 → Sign In</strong></li>
          <li>The scanner displays a short code and the URL <code>microsoft.com/devicelogin</code></li>
          <li>On any browser (phone, laptop): navigate to that URL, enter the code</li>
          <li>Sign in with the Microsoft 365 account that the scanner will use to access SharePoint</li>
          <li>Review and grant the permissions requested (typically Sites.ReadWrite.All for SharePoint access)</li>
          <li>The scanner receives an OAuth token and confirms the connection</li>
          <li>Configure your SharePoint destinations and job buttons</li>
        </ol>
        <p>The token is stored securely on the scanner and refreshed automatically. You will not need to repeat this process unless you revoke the scanner&apos;s access in Azure AD or the user account is deleted.</p>

        <h2 className="text-2xl font-bold text-navy">Azure AD App Permissions — What to Expect</h2>
        <p>When the scanner authenticates for the first time, it registers as an app in your Azure Active Directory (now called Microsoft Entra ID). The scanner requests specific permissions — typically <code>Sites.ReadWrite.All</code> (to read from and write to SharePoint sites) and <code>Files.ReadWrite.All</code> (for OneDrive access if used).</p>
        <p>If your organisation has <strong>admin consent required</strong> enabled (common in mid-size and enterprise environments), a Global Administrator must approve these permissions before the scanner can authenticate. This is a one-time step: Azure AD → Enterprise Applications → find the scanner app → Grant Admin Consent.</p>
        <p>If you&apos;re not sure whether your organisation requires admin consent: try the authentication flow. If it completes successfully, consent isn&apos;t required. If you see &quot;Your organisation requires admin approval,&quot; it is — contact your Microsoft 365 admin.</p>

        <h2 className="text-2xl font-bold text-navy">Troubleshooting Common Connection Issues</h2>
        <ul>
          <li><strong>&quot;Cannot connect to SharePoint&quot;:</strong> Check port 443 outbound is open from the scanner&apos;s network location. Check DNS resolution. Check the scanner has a valid IP address.</li>
          <li><strong>Authentication completes but documents don&apos;t appear:</strong> Check the authenticated user has Contribute permissions on the target SharePoint library. Check conditional access policies aren&apos;t blocking the connection based on device compliance.</li>
          <li><strong>Admin consent error:</strong> Contact your Microsoft 365 Global Admin to approve the scanner&apos;s app registration.</li>
          <li><strong>Token expired after long period of inactivity:</strong> Re-authenticate via Settings → Cloud Services → Microsoft 365 → Sign In. Normal for devices not used for 90+ days.</li>
          <li><strong>MFA prompt on first setup:</strong> Expected — complete MFA on the device you&apos;re using for the browser flow. Subsequent scans don&apos;t require MFA re-authentication.</li>
        </ul>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Scanners that use modern auth natively</h2>
        <p className="text-gray-300 mb-6">OAuth 2.0 built-in. No basic auth, no middleware, no workarounds.</p>
        <Link href="/products/escan-a450-pro" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">View the eScan A450 Pro →</Link>
      </div>
    </main>
  );
}
