import {
  MapPin,
  PackageCheck,
  EyeOff,
  AlertCircle,
  PackageX,
  Clock,
  ShieldAlert,
  Truck,
} from "lucide-react";

export default function ShippingPolicyPage() {
  const policies = [
    {
      icon: MapPin,
      title: "Shipping Destinations",
      text: "Apexx Biolabs currently ships to eligible addresses within the United States. We reserve the right to refuse shipment to any location where products cannot legally be delivered.",
    },
    {
      icon: PackageCheck,
      title: "Order Tracking",
      text: "Once your order ships, you will receive tracking information. Tracking updates may take up to 24 hours after label creation.",
    },
    {
      icon: EyeOff,
      title: "Discreet Packaging",
      text: "All orders are shipped in plain, discreet packaging. Package contents will not be visibly identified on the exterior packaging.",
    },
    {
      icon: AlertCircle,
      title: "Incorrect Information",
      text: "Customers are responsible for providing accurate shipping information. Apexx Biolabs is not responsible for delays, returned shipments, or delivery issues caused by incorrect addresses.",
    },
    {
      icon: PackageX,
      title: "Lost or Stolen Packages",
      text: "Once a shipment has been transferred to the carrier, ownership and responsibility transfer to the customer. Contact the shipping carrier directly regarding lost or stolen package disputes.",
    },
    {
      icon: Clock,
      title: "Shipping Delays",
      text: "Delivery estimates are not guaranteed. Delays may occur due to weather, holidays, carrier disruptions, high shipping volume, or events beyond our control.",
    },
    {
      icon: ShieldAlert,
      title: "Damaged Shipments",
      text: "If your order arrives damaged, contact us within 48 hours of delivery with your order number and clear photographs of the shipping box, label, and product.",
    },
    {
      icon: Truck,
      title: "Shipping Restrictions",
      text: "All products are intended solely for lawful laboratory research purposes. Customers are responsible for compliance with all applicable laws and regulations.",
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
            Shipping Policy
          </h1>

          <p className="text-gray-500 uppercase tracking-widest text-sm">
            Last Updated: June 2026
          </p>
        </div>

        <div className="border border-blue-900 rounded-3xl p-8 md:p-12 bg-[#050505] shadow-[0_0_45px_rgba(37,99,235,0.15)] mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Processing Times
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Orders are typically processed within 1–2 business days after
            payment has been received and approved. Orders placed after business
            hours, on weekends, or during holidays will be processed on the next
            business day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="border border-blue-900 rounded-3xl p-8 bg-[#050505] hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.2)] transition-all">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              Ground Shipping
            </h2>

            <p className="text-5xl font-extrabold text-white mb-4">
              $5.99
            </p>

            <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-6">
              Flat Rate
            </p>

            <ul className="space-y-3 text-gray-400">
              <li>✓ Estimated delivery: 3–7 business days</li>
              <li>✓ Available throughout eligible U.S. locations</li>
              <li>✓ Includes shipment tracking</li>
              <li>✓ Discreet packaging</li>
            </ul>
          </div>

          <div className="border border-blue-900 rounded-3xl p-8 bg-[#050505] hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.2)] transition-all">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              Express Shipping
            </h2>

            <p className="text-5xl font-extrabold text-white mb-4">
              $25.99
            </p>

            <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-6">
              Flat Rate
            </p>

            <ul className="space-y-3 text-gray-400">
              <li>✓ Estimated delivery: 1–2 business days</li>
              <li>✓ Priority processing when possible</li>
              <li>✓ Includes shipment tracking</li>
              <li>✓ Discreet packaging</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-500 mb-12">
          Delivery estimates are not guaranteed and may vary based on carrier
          conditions.
        </p>

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
            Questions? We’re Here to Help.
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