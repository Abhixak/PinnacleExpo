import { Link } from "react-router-dom";
import { FaCheckCircle, FaGlobeAmericas, FaShip } from "react-icons/fa";
import { cloudinaryAssets } from "../data/cloudinaryAssets";
import Categories from "./Categories";
import AdVideo01 from "../Components/AdVideo01";
import Features from "../Components/Features";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <AdVideo01 />
      <section className="!px-4 !pt-4 !pb-6 sm:!px-6 sm:!pt-8 sm:!pb-10 lg:!px-8">
        <div className="!mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="space-y-5 sm:space-y-6">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 !px-3 !py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--blue)] shadow-sm sm:!px-4 !mb-2 sm:text-xs sm:tracking-[0.22em]">
              Premium export supply from trusted origins
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="my-3 max-w-2xl text-3xl font-semibold leading-[0.98] text-[var(--ink)] sm:text-4xl lg:text-6xl">
                Export-grade rice, lubricants, and premium fragrances.
              </h1>

            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 !my-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] !px-5 !py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-[var(--blue)] sm:!px-6"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white !px-5 !py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-slate-300 hover:bg-slate-50 sm:!px-6"
              >
                Contact us
              </Link>
            </div>
</div><div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--line)] bg-white/85 !p-3 shadow-sm sm:!p-4">
                <FaShip className="text-lg text-[var(--gold)] sm:text-xl" />
                <p className="!mt-2 text-sm font-semibold text-[var(--ink)] sm:!mt-3">
                  Export-ready sourcing
                </p>
                <p className="!mt-1 text-[11px] leading-5 text-slate-600 sm:text-xs sm:leading-6">
                  Built for bulk trade, distributor orders, and repeat supply.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/85 !p-3 shadow-sm sm:!p-4">
                <FaGlobeAmericas className="text-lg text-[var(--gold)] sm:text-xl" />
                <p className="!mt-2 text-sm font-semibold text-[var(--ink)] sm:!mt-3">
                  Multi-market supply
                </p>
                <p className="!mt-1 text-[11px] leading-5 text-slate-600 sm:text-xs sm:leading-6">
                  Rice and lubricant categories aligned to export demand.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/85 !p-3 shadow-sm sm:!p-4">
                <FaCheckCircle className="text-lg text-[var(--gold)] sm:text-xl" />
                <p className="!mt-2 text-sm font-semibold text-[var(--ink)] sm:!mt-3">
                  Quality-first handling
                </p>
                <p className="!mt-1 text-[11px] leading-5 text-slate-600 sm:text-xs sm:leading-6">
                  Sourcing, packaging, and support focused on reliability.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(31,93,139,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(199,154,75,0.14),transparent_42%)] blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[0_20px_60px_rgba(16,35,59,0.14)]">
              <img
                src={cloudinaryAssets.logo}
                alt="Pinnacle Expo logo"
                className="h-40 w-full object-contain !p-5 sm:h-60 sm:!p-8"
              />
              <div className="border-t border-[var(--line)] !p-4 sm:!p-6">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl bg-slate-50 !px-2 !py-3 sm:!px-3 sm:!py-4">
                    <p className="text-base font-semibold text-[var(--navy)] sm:text-lg">
                      04
                    </p>
                    <p className="!mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500 sm:text-[11px] sm:tracking-[0.18em]">
                      Core categories
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 !px-2 !py-3 sm:!px-3 sm:!py-4">
                    <p className="text-base font-semibold text-[var(--navy)] sm:text-lg">
                      24/7
                    </p>
                    <p className="!mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500 sm:text-[11px] sm:tracking-[0.18em]">
                      Support
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 !px-2 !py-3 sm:!px-3 sm:!py-4">
                    <p className="text-base font-semibold text-[var(--navy)] sm:text-lg">
                      Bulk/
                    </p>
                    <p className="!mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500 sm:text-[11px] sm:tracking-[0.18em]">
                      Orders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>


      <Categories />
      <Features />
    </div>
  );
};

export default Home;
