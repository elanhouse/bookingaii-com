export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Booking AI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#about" className="hover:text-gray-900 transition-colors">
              About
            </a>
            <a
              href="#product"
              className="hover:text-gray-900 transition-colors"
            >
              Product
            </a>
            <a href="#team" className="hover:text-gray-900 transition-colors">
              Leadership
            </a>
            <a
              href="#history"
              className="hover:text-gray-900 transition-colors"
            >
              Our History
            </a>
            <a
              href="#contact"
              className="hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#0ea5e9] uppercase tracking-wider mb-4">
            Booking AI, Inc.
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Revenue Operating System
            <br />
            for Self-Storage
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
            We connect the data that operators already have — PMS, marketing,
            pricing — into a single revenue intelligence layer. No black boxes.
            No guesswork. Just clarity on where money is leaking and where to
            find more.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 border border-gray-100">
              20,000+ units analyzed
            </div>
            <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 border border-gray-100">
              $5.8M revenue gap identified
            </div>
            <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 border border-gray-100">
              +42% move-in growth (YoY)
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-gray-100" />
      </div>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About Booking AI, Inc.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            <strong>Booking AI, Inc.</strong> is a Delaware-incorporated
            technology company building{" "}
            <strong>RevvBrain</strong> — the revenue operating system for
            the self-storage industry. We serve mid-market operators managing
            10-100+ facilities, helping them see exactly where revenue is being
            left on the table.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The self-storage industry is an $83 billion market with over 100,000
            locations worldwide — more than McDonald&apos;s and Starbucks combined.
            Yet most operators are making million-dollar capital allocation
            decisions with a single data point: occupancy. They&apos;re missing
            move-in attribution, customer lifetime value, acquisition costs, and
            channel ROI.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We built RevvBrain because we lived this problem. Our team has
            managed 25,000+ storage units, analyzed 60,000+ facilities, and
            spent years watching operators fly blind on hundreds of millions in
            assets. RevvBrain is the tool we wished existed.
          </p>
        </div>
      </section>

      {/* Company Details Box */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Company Information
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-500">Legal Entity</span>
              <span className="text-gray-900 font-medium">
                Booking AI, Inc.
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-500">Incorporation</span>
              <span className="text-gray-900 font-medium">
                Delaware, USA
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-500">Product</span>
              <span className="text-gray-900 font-medium">RevvBrain</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-500">Industry</span>
              <span className="text-gray-900 font-medium">
                Self-Storage / Revenue Intelligence
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-500">Corporate Domain</span>
              <span className="text-gray-900 font-medium">bookingaii.com</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-500">Former Brand</span>
              <span className="text-gray-900 font-medium">
                StorageBookings (storagebookings.com)
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-500">Original Brand</span>
              <span className="text-gray-900 font-medium">
                Storage Radar (storageradar.com)
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-500">CEO</span>
              <span className="text-gray-900 font-medium">Marcus Whelan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="bg-[#1e3a5f] text-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-4">RevvBrain</h2>
          <p className="text-blue-200 mb-12 max-w-2xl">
            A smart layer that sits on top of existing PMS, marketing, and
            pricing systems. Non-disruptive. Insight-first. Operator-controlled.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Find Waste</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Identify where ad spend is leaking — 30% of typical spend
                produces zero conversions. We show you exactly where.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Surface Opportunity</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Uncover revenue being left on the table through mispricing,
                underinvestment in high-ROI locations, and missed rate increases.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                Attribution & Early Warnings
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Know which campaigns actually fill units. Get alerts on problems
                before they hit occupancy. Act on Monday morning, not next quarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Built by operators who lived the problem — not technologists guessing
          at it.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Marcus */}
          <div className="border border-gray-100 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">MW</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Marcus Whelan
                </h3>
                <p className="text-[#0ea5e9] text-sm font-medium">
                  Co-Founder & CEO
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Analyzed 93,467 self-storage facilities across 60K+ locations</li>
              <li>
                Built the Storage Acquisition Opportunity Evaluator (33,000 zip codes)
              </li>
              <li>10+ years daily rental history analysis of 35K+ locations</li>
              <li>
                Previously entrusted managing $500B network infrastructure (EDS, GM account)
              </li>
              <li>Background: EDS, GM, Lalamove</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              marcus@bookingaii.com
            </p>
          </div>

          {/* Antoni */}
          <div className="border border-gray-100 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-xl">AW</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Antoni Watts
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  Co-Founder & Former CTO
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                eCommerce Analytics Platform: $1BN in managed revenue
              </li>
              <li>Managed 25,000+ storage units (acquisitions, marketing, ops)</li>
              <li>Scaled move-ins from 10 to 800+/month for a Top 50 US operator</li>
              <li>Background: KPMG, CashCowPro, Lalamove</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Previously: a.watts@antoniwatts.com
            </p>
          </div>
        </div>

        {/* Advisors */}
        <h3 className="text-xl font-semibold text-gray-900 mt-16 mb-8">
          Advisors
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-100 rounded-2xl p-8">
            <h4 className="text-lg font-semibold text-gray-900">
              Scott Jensen
            </h4>
            <p className="text-[#0ea5e9] text-sm font-medium mb-3">
              Storage Industry Advisor
            </p>
            <p className="text-sm text-gray-600">
              Former Sr. Marketing Director at Extra Space Storage (#1 REIT).
              Helped grow market cap from $300M to $30B. 4 exits including IPOs.
              Reduced CAC from $2,100 to $200.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-8">
            <h4 className="text-lg font-semibold text-gray-900">
              Matthew Watts
            </h4>
            <p className="text-[#0ea5e9] text-sm font-medium mb-3">
              Technology Advisor
            </p>
            <p className="text-sm text-gray-600">
              Y-Combinator alumni. Former Facebook engineer. CTO of Lendflow
              ($1.5BN bank fintech). Former CTO of Lalamove (now unicorn).
            </p>
          </div>
        </div>
      </section>

      {/* History — critical for Slack */}
      <section id="history" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our History & Brand Evolution
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Booking AI, Inc. has evolved through several brand iterations as our
            product and market understanding sharpened. The company operated
            under the names Storage Radar and StorageBookings before
            incorporating as Booking AI, Inc.
          </p>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gray-300" />

            {/* Storage Radar */}
            <div className="relative pl-12 md:pl-20 pb-12">
              <div className="absolute left-2 md:left-6 top-1 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-50" />
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                  2023 — Origin
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Storage Radar
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  The company began as <strong>Storage Radar</strong>, focused on
                  competitive intelligence and market analysis for the
                  self-storage industry. We built tools to analyze facility
                  performance, pricing trends, and market opportunities across
                  60,000+ storage locations nationwide.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    Domain: storageradar.com (registered by CTO)
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    Slack workspace: storage-radar
                  </span>
                </div>
              </div>
            </div>

            {/* Storage Bookings */}
            <div className="relative pl-12 md:pl-20 pb-12">
              <div className="absolute left-2 md:left-6 top-1 w-5 h-5 bg-[#0ea5e9] rounded-full border-4 border-gray-50" />
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                  2024 — Product Pivot
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  StorageBookings
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  As we deepened our work with operators, we pivoted toward
                  revenue operations and move-in attribution. The brand evolved to{" "}
                  <strong>StorageBookings</strong> to reflect our focus on
                  connecting marketing spend to actual unit bookings — not just
                  leads, but confirmed move-ins.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    Domain: storagebookings.com (registered by CTO)
                  </span>
                </div>
              </div>
            </div>

            {/* Booking AI */}
            <div className="relative pl-12 md:pl-20">
              <div className="absolute left-2 md:left-6 top-1 w-5 h-5 bg-[#1e3a5f] rounded-full border-4 border-gray-50" />
              <div className="bg-white border border-[#1e3a5f]/20 rounded-xl p-6 shadow-sm">
                <p className="text-xs font-medium text-[#0ea5e9] uppercase tracking-wider mb-1">
                  2025 — Current
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Booking AI, Inc.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  The company incorporated as{" "}
                  <strong>Booking AI, Inc.</strong> to reflect the full scope of
                  our revenue intelligence platform, RevvBrain. The corporate
                  entity encompasses all prior brands, domains, and operational
                  infrastructure — including the original{" "}
                  <strong>storage-radar</strong> Slack workspace, which continues
                  to serve as our primary team communication hub.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="px-3 py-1 bg-[#1e3a5f]/10 rounded-full text-[#1e3a5f] font-medium">
                    Domain: bookingaii.com
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    Delaware corporation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Domain & Brand Summary */}
          <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Domains & Brand Properties
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-500">
                      Domain
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">
                      Purpose
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">bookingaii.com</td>
                    <td className="py-3 px-4">
                      Corporate website & primary domain — Booking AI, Inc.
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">
                      storagebookings.com
                    </td>
                    <td className="py-3 px-4">
                      Former product & operations domain (registered by former CTO)
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 bg-orange-50 text-orange-700 rounded-full text-xs font-medium">
                        In transition
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">storageradar.com</td>
                    <td className="py-3 px-4">
                      Original brand name (registered by former CTO)
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 bg-orange-50 text-orange-700 rounded-full text-xs font-medium">
                        In transition
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs text-gray-500 leading-relaxed">
              The Slack workspace <strong>storage-radar</strong>{" "}
              (storage-radar.slack.com) was created during the original Storage
              Radar phase of the company and has been in continuous use as the
              primary team communication workspace for Booking AI, Inc. since
              inception. The storagebookings.com and storageradar.com domains
              were originally registered under the personal account of the
              former Co-Founder/CTO, Antoni Watts (antoniwatts.com), during his
              tenure. Following his departure, the company established
              bookingaii.com as its primary corporate domain.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="text-gray-500 mb-1">General Inquiries</p>
                <p className="text-gray-900">info@bookingaii.com</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">CEO — Marcus Whelan</p>
                <p className="text-gray-900">marcus@bookingaii.com</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Product & Operations</p>
                <p className="text-gray-900">support@bookingaii.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="text-gray-500 mb-1">Legal Entity</p>
                <p className="text-gray-900">Booking AI, Inc.</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Jurisdiction</p>
                <p className="text-gray-900">Delaware, United States</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Website</p>
                <p className="text-gray-900">bookingaii.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Booking AI, Inc. All rights reserved.</p>
          <p>
            Formerly Storage Radar &middot; StorageBookings
          </p>
        </div>
      </footer>
    </div>
  );
}
