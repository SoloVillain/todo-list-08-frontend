import { Button } from "@/app/components/ui/button";

/**
 * A plain, fully-editable card block — no CardHeader/CardTitle/CardContent
 * sub-components to learn or fight with. Copy this whole file, rename it,
 * and edit the markup/classes directly for your own card.
 */
export function CardDemo() {
  return (
    <div className="border-border bg-background text-foreground w-full max-w-sm rounded-xl border shadow">
      <div className="flex flex-col gap-1.5 p-6">
        <h3 className="text-foreground leading-none font-semibold tracking-tight">
          Team Plan
        </h3>
        <p className="text-muted text-sm">For small teams shipping fast.</p>
      </div>

      <div className="p-6 pt-0">
        <p className="text-muted text-sm">
          Unlimited projects, shared components, and priority support.
        </p>
      </div>

      <div className="flex items-center gap-2 p-6 pt-0">
        <Button size="sm">Choose plan</Button>
        <Button variant="secondary" size="sm">
          Compare
        </Button>
      </div>
    </div>
  );
}
