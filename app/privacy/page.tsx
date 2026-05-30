export default function PrivacyPage() {
  const sections = [
    {
      number: "1",
      title: "Information We Collect",
      text: "We may collect information you provide directly to us, including your name, email address, shipping information, billing information, payment details, communications, and account information. We may also collect technical information such as IP address, browser type, device information, pages visited, and cookies.",
    },
    {
      number: "2",
      title: "How We Use Your Information",
      text: "We may use information to process orders, communicate with customers, provide support, improve our website, prevent fraud, enhance security, and comply with legal obligations.",
    },
    {
      number: "3",
      title: "How We Share Information",
      text: "We do not sell personal information. We may share information with service providers, payment processors, shipping carriers, website providers, and legal authorities when required by law.",
    },
    {
      number: "4",
      title: "Cookies and Tracking",
      text: "We may use cookies and similar technologies to improve functionality, analyze website traffic, and enhance the user experience. You may control cookie preferences through your browser settings.",
    },
    {
      number: "5",
      title: "Data Security",
      text: "We use reasonable technical and organizational measures to help protect personal information. However, no method of transmission or storage is completely secure.",
    },
    {
      number: "6",
      title: "Your Rights",
      text: "Depending on your location, you may have rights to access, correct, delete, or restrict certain personal information. Requests may be submitted through our contact information.",
    },
    {
      number: "7",
      title: "International Users",
      text: "If you access this website from outside the United States, your information may be transferred to, stored, and processed in the United States or other locations where service providers operate.",
    },
    {
      number: "8",
      title: "Children's Privacy",
      text: "This website is not intended for individuals under 21 years of age. We do not knowingly collect personal information from individuals under 21.",
    },
    {
      number: "9",
      title: "Changes to This Privacy Policy",
      text: "We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised Last Updated date.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 border-b border-blue-900 bg-gradient-to-b from-[#020617] to-black">
        <div className="max-w-7xl mx-auto">
          <a
            href="/"
            className="text-blue-400 uppercase tracking-widest text-sm hover:text-blue-300 transition-all"
          >
            ← Back to Home
          </a>

          <div className="mt-16">
            <p className="uppercase tracking-[0.35em] text-blue-500 text-sm mb-6">
              Legal Documentation
            </p>

            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-blue-200 to-blue-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>

            <div className="h-[2px] w-72 bg-blue-600 mt-8 mb-8" />

            <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-4">
              Last Updated: June 2026
            </p>

            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              Apexx Biolabs is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or make a purchase.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {sections.map((section) => (
                <div
                  key={section.number}
                  className="border-b border-gray-200 pb-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">
                      {section.number}
                    </div>

                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-3 uppercase">
                        {section.title}
                      </h2>

                      <p className="text-gray-700 leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="space-y-8">
              <div className="border border-blue-200 rounded-3xl p-8 bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  Our Commitment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. We aim to be transparent
                  about how information is collected, used, and protected.
                </p>
              </div>

              <div className="border border-blue-200 rounded-3xl p-8 bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  Marketing Communications
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With your consent, we may send product updates or promotional
                  communications. You may opt out at any time.
                </p>
              </div>

              <div className="border border-blue-200 rounded-3xl p-8 bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  Data Retention
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Information is retained only as long as necessary for legal,
                  operational, security, and customer service purposes.
                </p>
              </div>

              <div className="border border-blue-200 rounded-3xl p-8 bg-white">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  Questions?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Contact us with questions regarding this Privacy Policy.
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-16 border border-blue-200 rounded-3xl p-8 bg-blue-50">
            <h2 className="text-2xl font-extrabold text-blue-700 uppercase mb-6">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-bold text-blue-700 uppercase mb-2">
                  Email
                </p>
                <p className="text-gray-700">support@apexxbiolabs.com</p>
              </div>

              <div>
                <p className="font-bold text-blue-700 uppercase mb-2">
                  Website
                </p>
                <p className="text-gray-700">www.apexxbiolabs.com</p>
              </div>

              <div>
                <p className="font-bold text-blue-700 uppercase mb-2">
                  Questions
                </p>
                <p className="text-gray-700">
                  Contact our support team regarding privacy questions.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-xs text-gray-500 uppercase tracking-widest">
            For laboratory research use only. Not for human consumption.
          </p>
        </div>
      </section>
    </main>
  );
}