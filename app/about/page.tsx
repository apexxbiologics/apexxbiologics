export default function AboutPage() {
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
            About
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-700 bg-clip-text text-transparent mb-8">
            Apexx Biolabs
          </h1>

          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Apexx Biolabs supplies laboratory research compounds intended
            strictly for scientific, educational, and analytical research
            purposes only.
          </p>
        </div>

        <div className="border border-blue-900 rounded-3xl p-8 md:p-12 bg-[#050505] shadow-[0_0_45px_rgba(37,99,235,0.15)] mb-10">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Apexx Biolabs is committed to supplying professionally packaged
            laboratory research materials with an emphasis on consistency,
            traceability, transparent labeling, and dependable customer support.
            Our goal is to support scientific, analytical, and educational
            laboratory applications while maintaining a strict research-use-only
            business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="border border-blue-900 rounded-3xl p-8 bg-[#050505]">
            <h2 className="text-2xl font-bold text-blue-400 mb-5">
              Quality & Traceability
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our products are manufactured, labeled, and packaged with an
              emphasis on consistency, batch traceability, and professional
              presentation. Product information, batch records, and supporting
              documentation are maintained to promote transparency and
              accountability throughout the fulfillment process.
            </p>
          </div>

          <div className="border border-blue-900 rounded-3xl p-8 bg-[#050505]">
            <h2 className="text-2xl font-bold text-blue-400 mb-5">
              Research Compliance
            </h2>

            <p className="text-gray-400 leading-relaxed">
              All products sold by Apexx Biolabs are intended exclusively for
              in-vitro laboratory research and are not intended for human
              consumption, medical use, veterinary use, diagnosis, treatment,
              cure, or prevention of any disease or condition.
            </p>
          </div>

          <div className="border border-blue-900 rounded-3xl p-8 bg-[#050505]">
            <h2 className="text-2xl font-bold text-blue-400 mb-5">
              Customer Responsibility
            </h2>

            <p className="text-gray-400 leading-relaxed">
              By purchasing from Apexx Biolabs, customers acknowledge that all
              materials are being obtained solely for lawful research purposes.
              Customers are responsible for ensuring compliance with applicable
              federal, state, and local laws regarding the purchase, possession,
              handling, and use of laboratory research materials.
            </p>
          </div>

          <div className="border border-blue-900 rounded-3xl p-8 bg-[#050505]">
            <h2 className="text-2xl font-bold text-blue-400 mb-5">
              No Human-Use Guidance
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Apexx Biolabs does not provide dosing instructions, treatment
              recommendations, medical advice, or guidance regarding human use of
              any product. All website content is provided solely for educational
              and laboratory research reference purposes.
            </p>
          </div>
        </div>

        <div className="border border-blue-900 rounded-3xl p-8 md:p-10 bg-[#050505] mb-10">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Our Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-blue-950 rounded-2xl p-6">
              <h3 className="text-blue-400 font-bold mb-3">
                Quality Controlled
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Products are handled with internal quality-control standards and
                professional review.
              </p>
            </div>

            <div className="border border-blue-950 rounded-2xl p-6">
              <h3 className="text-blue-400 font-bold mb-3">
                Research Use Only
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Products are intended solely for lawful laboratory research
                applications.
              </p>
            </div>

            <div className="border border-blue-950 rounded-2xl p-6">
              <h3 className="text-blue-400 font-bold mb-3">
                Secure Packaging
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Orders are prepared with secure, discreet, and professional
                packaging.
              </p>
            </div>

            <div className="border border-blue-950 rounded-2xl p-6">
              <h3 className="text-blue-400 font-bold mb-3">
                Batch Traceability
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Batch records and supporting documentation are maintained to
                support transparency.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-blue-900 rounded-3xl p-8 bg-[#050505] text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Contact Apexx Biolabs
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-400">
            <a
              href="mailto:support@apexxbiolabs.com"
              className="hover:text-blue-400 transition-all"
            >
              support@apexxbiolabs.com
            </a>

            <a
              href="https://www.instagram.com/apexxbiolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all"
            >
              @apexxbiolabs
            </a>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-gray-600 uppercase tracking-widest leading-relaxed">
          FOR LABORATORY RESEARCH USE ONLY. NOT FOR HUMAN CONSUMPTION. NOT FOR
          MEDICAL, DIAGNOSTIC, THERAPEUTIC, OR VETERINARY USE.
        </p>
      </section>
    </main>
  );
}