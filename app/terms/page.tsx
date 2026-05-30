export default function TermsPage() {
  const notIntendedFor = [
    "Human consumption",
    "Medical use",
    "Diagnostic use",
    "Therapeutic use",
    "Veterinary use",
    "Cosmetic use",
    "Food use",
    "Drug use",
    "Any use prohibited by law",
  ];

  const sections = [
    {
      number: "1",
      title: "Age Requirement",
      text: "Purchasers must be at least 21 years of age. By placing an order, you certify that you are legally permitted to purchase and possess these products in your jurisdiction.",
    },
    {
      number: "2",
      title: "Customer Responsibility",
      text: "Customers assume full responsibility for product handling, storage, transportation, testing, disposal, and compliance with all applicable laws and regulations.",
    },
    {
      number: "3",
      title: "Product Information",
      text: "Apexx Biolabs strives to provide accurate product descriptions and information. However, website content may contain errors and product images may not exactly represent the final product.",
    },
    {
      number: "4",
      title: "Laboratory Testing",
      text: "Where available, Certificates of Analysis and testing information are provided for informational purposes only and apply only to the tested batch.",
    },
    {
      number: "5",
      title: "Order Acceptance",
      text: "All orders are subject to review and acceptance. Apexx Biolabs reserves the right to refuse service, limit quantities, cancel orders, or restrict sales by location.",
    },
    {
      number: "6",
      title: "Pricing",
      text: "Prices are subject to change without notice. Apexx Biolabs reserves the right to correct pricing errors and modify product availability.",
    },
    {
      number: "7",
      title: "Shipping",
      text: "Customers are responsible for ensuring products may legally be shipped to their location. Risk of loss transfers to the customer once the package is delivered to the carrier.",
    },
    {
      number: "8",
      title: "Returns and Refunds",
      text: "Due to the nature of research materials, all sales are generally final. Refunds or replacements may be considered for incorrect, damaged, or missing items at Apexx Biolabs’ discretion.",
    },
    {
      number: "9",
      title: "Limitation of Liability",
      text: "To the maximum extent permitted by law, Apexx Biolabs shall not be liable for direct, indirect, incidental, consequential, or other damages arising from purchase, possession, handling, storage, resale, or use of any product.",
    },
    {
      number: "10",
      title: "Indemnification",
      text: "Customers agree to indemnify and hold harmless Apexx Biolabs from claims, losses, liabilities, damages, or expenses resulting from violation of these terms, applicable laws, improper use, or resale of products.",
    },
    {
      number: "11",
      title: "Intellectual Property",
      text: "All website content, including logos, images, branding, graphics, and product descriptions, is the property of Apexx Biolabs and may not be copied or redistributed without written permission.",
    },
    {
      number: "12",
      title: "Privacy",
      text: "Use of this website is also governed by our Privacy Policy. By using this website, you consent to the collection and use of information as described therein.",
    },
    {
      number: "13",
      title: "Governing Law",
      text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New York, without regard to conflict-of-law principles.",
    },
    {
      number: "14",
      title: "Changes to Terms",
      text: "Apexx Biolabs reserves the right to modify these Terms and Conditions at any time. Continued use of the website constitutes acceptance of any changes.",
    },
    {
      number: "15",
      title: "General",
      text: "If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain in effect. These Terms constitute the entire agreement between you and Apexx Biolabs.",
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

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.35em] text-blue-500 text-sm mb-6">
                Legal Documentation
              </p>

              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-blue-200 to-blue-600 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>

              <div className="h-[2px] w-72 bg-blue-600 mt-8 mb-8" />

              <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-4">
                Last Updated: June 2026
              </p>

              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Welcome to Apexx Biolabs. By accessing our website, purchasing
                products, or using our services, you agree to be bound by these
                Terms and Conditions.
              </p>
            </div>

            <div className="border border-blue-900 rounded-3xl p-10 bg-[#050505] shadow-[0_0_50px_rgba(37,99,235,0.18)]">
              <p className="uppercase tracking-[0.3em] text-blue-500 text-sm mb-6">
                Important Notice
              </p>

              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Research Use Only
              </h2>

              <p className="text-gray-400 leading-relaxed">
                All products sold by Apexx Biolabs are intended solely for
                lawful laboratory research, analytical, and educational purposes.
                Products have not been approved by the U.S. Food and Drug
                Administration for human use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="border border-blue-300 rounded-3xl p-8 bg-blue-50/60 mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-extrabold text-blue-700 uppercase mb-4">
                  Important Notice
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All products sold by Apexx Biolabs are intended solely for
                  lawful laboratory research, analytical, and educational
                  purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-blue-700 uppercase mb-4">
                  Products Are Not Intended For:
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {notIntendedFor.map((item) => (
                    <p key={item} className="text-gray-700 text-sm">
                      <span className="text-blue-600 font-bold mr-2">×</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">
            {sections.map((section) => (
              <div
                key={section.number}
                className="border-l border-blue-200 pl-6 py-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-extrabold text-xl mb-5">
                  {section.number}
                </div>

                <h3 className="text-xl font-extrabold text-blue-700 uppercase mb-4 leading-tight">
                  {section.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {section.text}
                </p>

                {section.title === "Privacy" && (
                  <a
                    href="/privacy"
                    className="inline-block mt-6 bg-blue-700 hover:bg-blue-600 text-white px-5 py-3 rounded-lg uppercase tracking-widest text-xs font-bold transition-all"
                  >
                    View Privacy Policy
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 border border-blue-200 rounded-3xl p-8 bg-blue-50">
            <h2 className="text-2xl font-extrabold text-blue-700 uppercase mb-6">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <p className="font-bold text-blue-700 uppercase mb-2">
                  Email Us
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
                  Questions?
                </p>
                <p className="text-gray-700">
                  Contact our support team for questions regarding these Terms
                  and Conditions.
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