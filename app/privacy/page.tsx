import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | RecycleRight SG",
  description: "Privacy policy for RecycleRight SG",
}

export default function PrivacyPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Privacy Policy</h1>

        <div className="prose prose-green max-w-none">
          <p className="text-lg text-muted-foreground mb-8">Last updated: April 5, 2025</p>

          <h2>Introduction</h2>
          <p>
            RecycleRight SG ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and share information about you when you use our website.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you:</p>
          <ul>
            <li>Use our search functionality</li>
            <li>Share your location for finding nearby recycling points</li>
            <li>Contact us through our contact form</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Show you relevant recycling locations based on your search queries and location</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
          </ul>

          <h2>Location Information</h2>
          <p>
            When you use our location-based features, we collect information about your precise location. You can
            disable location services through your browser settings.
          </p>

          <h2>Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar technologies to collect information about your browsing activities and to
            distinguish you from other users of our website.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the
            date at the top of the policy.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@recyclerightsg.com.</p>
        </div>
      </div>
    </div>
  )
}

