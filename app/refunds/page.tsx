import {
  Ban,
  XCircle,
  PackageX,
  Truck,
  RotateCcw,
  FlaskConical,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

export default function RefundPolicyPage() {
  const policies = [
    {
      icon: Ban,
      title: "All Sales Final",
      text: "All sales are final once an order has been processed and shipped. We do not accept returns of opened, used, or partially used products.",
    },
    {
      icon: XCircle,
      title: "Order Cancellations",
      text: "Orders may only be canceled before shipment. Once an order has been packaged, processed, or shipped, it cannot be canceled.",
    },
    {
      icon: PackageX,
      title: "Damaged or Incorrect Orders",
      text: "If you receive a damaged, incorrect, or missing item, contact us within 48 hours of delivery with your order number, clear photos, and a description of the issue.",
    },
    {
      icon: Truck,
      title: "Lost or Stolen Packages",
      text: "Once a shipment has been transferred to the carrier, responsibility transfers to the customer. Apexx Biolabs is not responsible for lost, stolen, or delayed packages.",
    },
    {
      icon: RotateCcw,
      title: "Returned Shipments",
      text: "Orders returned due to incorrect address information, refusal of delivery, or carrier return-to-sender may be subject to reshipping or administrative fees.",
    },
    {
      icon: FlaskConical,
      title: "Product Quality",
      text: "All products are sold for laboratory research purposes only. Certificates of Analysis, when available, apply only to the specific batch tested.",
    },
    {
      icon: CreditCard,
      title: "Chargeback Policy",
      text: "Customers agree to contact Apexx Biolabs before initiating a dispute or chargeback. Fraudulent disputes may result in account restrictions or legal action where permitted.",
    },
    {
      icon: ShieldCheck,
      title: "Refund Exceptions",
      text: "At our sole discretion, store credit, replacement products, or partial refunds may be issued for verified order issues on a case-by-case basis.",
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
            risks, and quality-control requirements, all sales are final once an
            order has been processed and shipped. We do not accept returns of
            opened, used, or partially used products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {policies.map((policy) => {
            const Icon = policy.icon;

            return (
              <div
                key={policy.title}
                className="border border-blue-900 rounded-3xl p-8 bg-[#050505] hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.2)] transition-all"
              >
                <div className="w-16 h-16 rounded-2xl border border-blue-700 bg-blue-950/30 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_20px_rgba(37,99,235,0.25)]">
                  <Icon size={32} strokeWidth={2} />
                </div>

                <h2 className="text-2xl font-bold text-blue-400 mb-5 uppercase tracking-wide">
                  {policy.title}
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  {policy.text}
                </p>
              </div>
            );
          })}
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
            FOR LABORATORY RESEARCH USE ONLY. NOT FOR HUMAN CONSUMPTION. NOT FOR
            MEDICAL, DIAGNOSTIC, THERAPEUTIC, OR VETERINARY USE.
          </p>
        </div>
      </section>
    </main>
  );
}