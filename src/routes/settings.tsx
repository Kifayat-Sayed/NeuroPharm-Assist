import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionCard } from "@/components/common/SectionCard";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings · NeuroPharm Assist" },
      { name: "description", content: "Preferences and workspace configuration." },
      { property: "og:title", content: "Settings · NeuroPharm Assist" },
      { property: "og:description", content: "Preferences and workspace configuration." },
    ],
  }),
  component: () => (
    <div className="mx-auto w-full max-w-[1000px] space-y-6 px-4 py-8 md:px-8">
      <PageHeader eyebrow="Preferences" title="Settings" />
      <SectionCard>
        <p className="py-8 text-center text-sm text-muted-foreground">
          Preferences panel coming next.
        </p>
      </SectionCard>
    </div>
  ),
});
