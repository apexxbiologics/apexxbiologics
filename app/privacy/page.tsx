export default function PrivacyPage() {
  const sections = [
    [
      "1",
      "Information We Collect",
      "We may collect information you provide directly to us, including your name, email address, shipping information, billing information, communications, and account information. Technical information such as IP addresses, browser type, device information, and cookies may also be collected.",
    ],
    [
      "2",
      "How We Use Information",
      "Information may be used to process orders, communicate with customers, provide support, improve our website and services, maintain security, prevent fraud, and comply with legal obligations.",
    ],
    [
      "3",
      "Information Sharing",
      "We do not sell personal information. Information may be shared with payment processors, shipping providers, website service providers, and legal authorities when required by law.",
    ],
    [
      "4",
      "Cookies & Tracking",
      "Our website may use cookies and similar technologies to improve functionality, analyze traffic, and enhance user experience. Browser settings may be used to manage cookie preferences.",
    ],
    [
      "5",
      "Data Security",
      "Reasonable technical and organizational safeguards are used to help protect personal information. However, no electronic transmission or storage system can be guaranteed to be completely secure.",
    ],
    [
      "6",
      "Your Rights",
      "Depending on your jurisdiction, you may have rights regarding access, correction, deletion, portability, or restriction of personal information. Requests may be submitted through our contact information.",
    ],
    [
      "7",
      "International Users",
      "Information may be transferred to and processed in jurisdictions where our service providers operate. By using this website, you consent to such transfers where permitted by law.",
    ],
    [
      "8",
      "Children's Privacy",
      "This website is not intended for individuals under the age of 21. We do not knowingly collect information from individuals under 21 years of age.",
    ],
    [
      "9",
      "Changes To This Policy",
      "We may update this Privacy Policy periodically. Updated versions will be reflected by revising the Last Updated date displayed on this page.",
    ],
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <a
        href="/"
        className="text-blue-400 uppercase tracking-widest text-sm hover:text-blue-300 transition-all"
      >
        ← Back to Home
      </a>

      <section className="max-w-6xl mx-auto mt-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-blue-500 text-sm mb-6">
            Legal Documentation
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-700 bg-clip-text text-transparent mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-500 uppercase tracking-widest text-sm">
            Last Updated: June 2026
          </p>
        </div>

        <div className="border border-blue-900 rounded-3xl p-8 md:p-12 bg-[#050505] shadow-[0_0_50px_rgba(37,99,235,0.15)] mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Privacy Commitment
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Apexx Biolabs is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website,
            interact with our services, or make a purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map(([number, title, text]) => (
            <div
              key={number}
              className="border border-blue-900 rounded-2xl p-8 bg-[#050505] hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.20)] transition-all"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl border border-blue-700 bg-blue-950/30 flex items-center justify-center text-blue-400 font-bold">
                  {number}
                </div>

                <h2 className="text-2xl font-bold text-blue-400">
                  {title}
                </h2>
              </div>

              <p className="text-gray-400 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-blue-900 rounded-3xl p-8 bg-[#050505]">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">
            Contact Information
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="uppercase tracking-widest text-blue-500 text-sm mb-2">
                Email
              </p>

              <p className="text-gray-400">
                support@apexxbiolabs.com
              </p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-blue-500 text-sm mb-2">
                Website
              </p>

              <p className="text-gray-400">
                www.apexxbiolabs.com
              </p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-blue-500 text-sm mb-2">
                Questions
              </p>

              <p className="text-gray-400">
                Contact our support team regarding privacy questions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border border-blue-900 rounded-3xl p-8 bg-[#050505] text-center">
          <p className="text-xs text-gray-600 uppercase tracking-widest leading-relaxed">
            FOR LABORATORY RESEARCH USE ONLY. NOT FOR HUMAN CONSUMPTION.
            NOT FOR MEDICAL, DIAGNOSTIC, THERAPEUTIC, OR VETERINARY USE.
          </p>
        </div>
      </section>
    </main>
  );
}