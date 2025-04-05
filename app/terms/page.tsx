import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | RecycleRight SG",
  description: "Terms of service for RecycleRight SG",
}

export default function TermsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Terms of Service</h1>

        <div className="prose prose-green max-w-none">
          <p className="text-lg text-muted-foreground mb-8">Last updated: April 5, 2025</p>

          <h2>Introduction</h2>
          <p>
            Welcome to RecycleRight SG. By accessing or using our website, you agree to be bound by these Terms of
            Service.
          </p>

          <h2>Use of Our Services</h2>
          <p>
            You may use our services only as permitted by these terms and any applicable laws. We may suspend or stop
            providing our services to you if you do not comply with our terms or policies or if we are investigating
            suspected misconduct.
          </p>

          <h2>Content Accuracy</h2>
          <p>
            While we strive to provide accurate and up-to-date information about recycling in Singapore, we cannot
            guarantee the accuracy, completeness, or reliability of any information on our website. The information is
            provided for general guidance only.
          </p>

          <h2>User-Generated Content</h2>
          <p>
            If you submit content to our website, you grant us a worldwide, royalty-free, non-exclusive license to use,
            reproduce, modify, and distribute that content for the purpose of providing our services.
          </p>

          <h2>Privacy</h2>
          <p>
            Our Privacy Policy explains how we treat your personal data and protect your privacy when you use our
            services. By using our services, you agree that we can use such data in accordance with our privacy policy.
          </p>

          <h2>Modifications</h2>
          <p>
            We may modify these Terms of Service at any time. If we make changes, we will post the modified terms on
            this page. Your continued use of our services after the changes have been posted constitutes your acceptance
            of the modified terms.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is" without any warranties, either express or implied. We do not warrant that
            our services will be error-free or uninterrupted.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits or revenues.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at info@recyclerightsg.com.</p>
        </div>
      </div>
    </div>
  )
}

