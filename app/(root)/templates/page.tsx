import { Metadata } from "next";

// Import all components for showcase
import Alert01 from "@/components/workable/alert/alert-01";
import Alert02 from "@/components/workable/alert/alert-02";
import Alert03 from "@/components/workable/alert/alert-03";
import AlertSuccess from "@/components/workable/alert/alert-success";
import AlertWarning from "@/components/workable/alert/alert-warning";

import Button01 from "@/components/workable/button/btn-01";
import Button02 from "@/components/workable/button/btn-02";
import Button03 from "@/components/workable/button/btn-03";
import Button04 from "@/components/workable/button/btn-04";
import Button05 from "@/components/workable/button/btn-05";

import Card01 from "@/components/workable/card/card-01";
import Card02 from "@/components/workable/card/card-02";
import Card03 from "@/components/workable/card/card-03";
import Card04 from "@/components/workable/card/card-04";
import Card05 from "@/components/workable/card/card-05";

import Input01 from "@/components/workable/input/input-01";
import Input02 from "@/components/workable/input/input-02";
import Input03 from "@/components/workable/input/input-03";
import Input04 from "@/components/workable/input/input-04";

import Faq01 from "@/components/workable/faq/faq-01";
import Faq02 from "@/components/workable/faq/faq-02";
import FaqVariant01 from "@/components/workable/faq/faq-variant-01";
import FaqVariant02 from "@/components/workable/faq/faq-variant-02";

import Profile01 from "@/components/workable/profile/profile-01";
import Profile02 from "@/components/workable/profile/profile-02";
import Profile03 from "@/components/workable/profile/profile-03";

import Text01 from "@/components/workable/text/text-01";
import Text02 from "@/components/workable/text/text-02";
import Text03 from "@/components/workable/text/text-03";

import List01 from "@/components/workable/list/list-01";
import List02 from "@/components/workable/list/list-02";
import List03 from "@/components/workable/list/list-03";

import Pricing01 from "@/components/workable/pricing/pricing-01";
import Pricing02 from "@/components/workable/pricing/pricing-02";
import Pricing03 from "@/components/workable/pricing/pricing-03";

export const metadata: Metadata = {
  title: "Templates",
  description: "Visual showcase of all Workable components",
};

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Component <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500">Templates</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Explore our comprehensive collection of UI components. Each component is production-ready and fully customizable.
          </p>
        </div>

        {/* Alerts Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Alerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Basic Alert</h3>
              <Alert01 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Info Alert</h3>
              <Alert02 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Warning Alert</h3>
              <Alert03 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Success Alert</h3>
              <AlertSuccess />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Warning Alert</h3>
              <AlertWarning />
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Primary Button</h3>
              <Button01 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Secondary Button</h3>
              <Button02 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Outline Button</h3>
              <Button03 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Ghost Button</h3>
              <Button04 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Link Button</h3>
              <Button05 />
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Basic Card</h3>
              <Card01 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Image Card</h3>
              <Card02 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Feature Card</h3>
              <Card03 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Stats Card</h3>
              <Card04 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Testimonial Card</h3>
              <Card05 />
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Basic Input</h3>
              <Input01 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Input with Label</h3>
              <Input02 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Input with Icon</h3>
              <Input03 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Textarea</h3>
              <Input04 />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQ Components</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Basic FAQ</h3>
              <Faq01 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Smooth FAQ</h3>
              <Faq02 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">FAQ Variant 1</h3>
              <FaqVariant01 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">FAQ Variant 2</h3>
              <FaqVariant02 />
            </div>
          </div>
        </section>

        {/* Profiles Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Profile Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Basic Profile</h3>
              <Profile01 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Profile with Stats</h3>
              <Profile02 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Detailed Profile</h3>
              <Profile03 />
            </div>
          </div>
        </section>

        {/* Text Components Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Text Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Heading Text</h3>
              <Text01 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Animated Text</h3>
              <Text02 text="Animated Text" />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Gradient Text</h3>
              <Text03 />
            </div>
          </div>
        </section>

        {/* Lists Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">List Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Basic List</h3>
              <List01 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Icon List</h3>
              <List02 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Feature List</h3>
              <List03 />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Basic Pricing</h3>
              <Pricing01 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Feature Pricing</h3>
              <Pricing02 />
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Comparison Pricing</h3>
              <Pricing03 />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Browse our documentation to learn how to implement these components in your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
            >
              View Documentation
            </a>
            <a
              href="/docs/components"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Browse Components
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
