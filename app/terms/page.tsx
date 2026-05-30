export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <a
        href="/"
        className="text-blue-400 uppercase tracking-widest text-sm hover:text-blue-300 transition-all"
      >
        ← Back to Home
      </a>

      <section className="max-w-5xl mx-auto mt-16">
        <p className="uppercase tracking-[0.4em] text-blue-500 text-sm mb-6">
          Legal
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-700 bg-clip-text text-transparent">
          Terms & Conditions
        </h1>

        <p className="text-gray-500 mb-14">
          Last Updated: January 2026
        </p>

        <div className="border border-blue-900 rounded-3xl p-8 md:p-12 bg-[#050505] shadow-[0_0_45px_rgba(37,99,235,0.12)] space-y-10">
          {[
            {
              title: "1. Research Use Only",
              text: "All products offered by Apexx Biolabs are sold strictly for laboratory research purposes only. Products are not intended for human consumption, veterinary use, medical use, diagnostic use, therapeutic use, or treatment or prevention of disease.",
            },
            {
              title: "2. Age Requirement",
              text: "By accessing this website or placing an order, you confirm that you are at least 21 years of age.",
            },
            {
              title: "3. Customer Responsibility",
              text: "Customers are solely responsible for understanding the products purchased, complying with all applicable laws, and ensuring proper handling, storage, and use in lawful laboratory research settings.",
            },
            {
              title: "4. Product Information",
              text: "Information on this website is provided for educational and research-reference purposes only and should not be interpreted as medical, pharmaceutical, or legal advice.",
            },
            {
              title: "5. Orders",
              text: "Apexx Biolabs reserves the right to refuse service, cancel orders, limit quantities, or restrict purchases at its sole discretion.",
            },
            {
              title: "6. Shipping",
              text: "Shipping times are estimates only. Apexx Biolabs is not responsible for carrier delays, weather delays, incorrect customer information, or other delays outside our control.",
            },
            {
              title: "7. Refunds and Returns",
              text: "Due to the nature of research products, all sales are final unless otherwise stated. Damaged or incorrect orders should be reported promptly after delivery.",
            },
            {
              title: "8. Limitation of Liability",
              text: "To the maximum extent permitted by law, Apexx Biolabs shall not be liable for damages arising from the purchase, handling, storage, misuse, or use of any products.",
            },
            {
              title: "9. Disclaimer of Warranties",
              text: "All products and services are provided as-is and as-available without warranties of any kind, express or implied.",
            },
            {
              title: "10. Intellectual Property",
              text: "All website content, including text, branding, graphics, logos, images, and designs, is the property of Apexx Biolabs and may not be copied or reproduced without permission.",
            },
            {
              title: "11. Changes to Terms",
              text: "Apexx Biolabs reserves the right to update or modify these Terms & Conditions at any time. Continued use of this website constitutes acceptance of revised terms.",
            },
            {
              title: "12. Contact",
              text: "Questions regarding these Terms & Conditions may be directed to support@apexxbiolabs.com.",
            },
          ].map((section) => (
            <div
              key={section.title}
              className="border-b border-blue-950 pb-8 last:border-b-0 last:pb-0"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
                {section.title}
              </h2>

              <p className="text-gray-400 leading-relaxed text-lg">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-gray-600 uppercase tracking-widest leading-relaxed">
          For laboratory research use only. Not for human consumption.
        </p>
      </section>
    </main>
  );
}