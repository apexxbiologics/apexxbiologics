export default function RefundPolicyPage() {
  const policies = [
    {
      number: "01",
      title: "All Sales Final",
      text: "All sales are final once an order has been processed and shipped. We do not accept returns of opened, used, or partially used products.",
    },
    {
      number: "02",
      title: "Order Cancellations",
      text: "Orders may only be canceled before shipment. Once an order has been packaged, processed, or shipped, it cannot be canceled.",
    },
    {
      number: "03",
      title: "Damaged or Incorrect Orders",
      text: "If you receive a damaged, incorrect, or missing item, contact us within 48 hours of delivery with your order number, photos of the package, photos of the product received, and a description of the issue.",
    },
    {
      number: "04",
      title: "Lost or Stolen Packages",
      text: "Once a shipment has been transferred to the carrier, ownership and responsibility transfer to the customer. Apexx Biolabs is not responsible for lost packages, stolen packages, carrier delays, or incorrect addresses provided by customers.",
    },
    {
      number: "05",
      title: "Refused or Returned Shipments",
      text: "Orders returned due to incorrect address information, refusal of delivery, failure to retrieve the package, or carrier return to sender may be subject to restocking, reshipping, and administrative fees.",
    },
    {
      number: "06",
      title: "Product Quality Concerns",
      text: "All products are manufactured and sold for laboratory research purposes only. Certificates of Analysis, when available, apply only to the specific batch tested. Experimental outcomes are not guaranteed.",
    },
    {
      number: "07",
      title: "Chargeback Policy",
      text: "By placing an order, the customer agrees to contact Apexx Biolabs first regarding any dispute. Fraudulent chargebacks, false claims, or abuse of the payment dispute process may result in account termination, order cancellation, collection activity, or legal action where permitted by law.",
    },
    {
      number: "08",
      title: "Refund Exceptions",
      text: "At our sole discretion, Apexx Biolabs may issue store credit, product replacement, or partial refund for verified shipping errors or product issues. These decisions are made case by case and do not establish a precedent for future claims.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <a
        href="/"
        className="text-blue-400 uppercase tracking-widest text-sm hover:text-blue-300 transition-all"
      >
        ← Back to Home
      </a>

      <section className="max-w-7xl mx-auto mt-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-blue-500 text-sm mb-6">
            Legal Documentation
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-700 bg-clip-text text-transparent mb-8">
            Refund Policy
          </h1>

          <p className="text-gray-500 uppercase tracking-widest text-sm">
            Last Updated: June 2026
          </p>
        </div>

        <div className="border border-red-700 rounded-3xl p-8 md:p-12 bg-red-950/20 shadow-[0_0_45px_rgba(239,68,68,0.15)] mb-12">
          <h2 className="text-3xl font-bold text-red-400 mb-6">
            All Sales Are Final
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Due to the nature of laboratory research products, contamination
            risks, and quality control requirements, all sales are final once an
            order has been processed and shipped. We do not accept returns of
            opened, used, or partially used products under any circumstances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {policies.map((policy) => (
            <div
              key={policy.number}
              className="border border-blue-900 rounded-3xl p-8 bg-[#050505] hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.2)] transition-all"
            >
              <div className="w-14 h-14 rounded-2xl border border-blue-700 bg-blue-950/30 flex items-center justify-center text-blue-400 font-bold mb-6">
                {policy.number}
              </div>

              <h2 className="text-2xl font-bold text-blue-400 mb-5 uppercase tracking-wide">
                {policy.title}
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {policy.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border border-blue-900 rounded-3xl p-8 bg-[#050505]">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Need Help?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="uppercase tracking-widest text-blue-500 text-sm mb-2">
                Email
              </p>
              <p className="text-gray-400">support@apexxbiolabs.com</p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-blue-500 text-sm mb-2">
                Website
              </p>
              <p className="text-gray-400">apexxbiolabs.com</p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-blue-500 text-sm mb-2">
                Response Time
              </p>
              <p className="text-gray-400">24–48 business hours</p>
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