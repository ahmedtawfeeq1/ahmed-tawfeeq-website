/* ------------------------------------------------------------------ */
/*  src/pages/AgentsDirectory.tsx                                      */
/* ------------------------------------------------------------------ */
import { useState, useMemo } from "react";
import { AGENTS, Agent } from "@/data/agents";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/+201288493425";

type Filters = { q: string; type: string; category: string; industry: string };
const uniq = (arr: string[]) => [...new Set(arr)].sort();

export default function AgentsDirectory() {
  /* ------------- state ------------- */
const [filters, setFilters] = useState({
  q: "",
  type: "all",
  category: "all",
  industry: "all",
});
  const [active, setActive] = useState<Agent | null>(null);

  /* ------------- derived filter options ------------- */
  const types = uniq(AGENTS.map((a) => a.type));
  const categories = uniq(AGENTS.map((a) => a.category));
  const industries = uniq(
    AGENTS.flatMap((a) => a.industries.split(",").map((s) => s.trim()))
  );

  /* ------------- filter logic ------------- */
const results = useMemo(() => {
  return AGENTS.filter((a) => {
    const q = filters.q.toLowerCase().trim();

    const matchesQ =
      q === "" ||
      a.name.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q);

    const matchesType =
      filters.type === "all" || a.type === filters.type;

    const matchesCat =
      filters.category === "all" || a.category === filters.category;

    const matchesInd =
      filters.industry === "all" ||
      a.industries.toLowerCase().includes(filters.industry.toLowerCase());

    return matchesQ && matchesType && matchesCat && matchesInd;
  });
}, [filters]);

  /* ------------- helpers ------------- */
  const handle = (key: keyof typeof filters) => (value: string) => {
  setFilters((prev) => ({ ...prev, [key]: value }));
};
  const clearAll = () =>
    setFilters({ q: "", type: "", category: "", industry: "" });

  /* ------------- UI ------------- */
  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="container px-4 md:px-6 space-y-12">
        {/* heading */}
        <header className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">AI Agent Directory</h1>
          <p className="text-muted-foreground">
            Browse ready-made examples of Knowledge Agents, Action Agents, and
            Automation Workflows. Filter by type, industry, or category to spark ideas.
          </p>
        </header>

        {/* filters */}
        <div className="grid gap-4 md:grid-cols-4">
        <Input
            placeholder="Search…"
            value={filters.q}
            onChange={(e) => handle("q")(e.target.value)}
            className="md:col-span-2"
        />

        {/* Type Filter */}
        <Select value={filters.type} onValueChange={handle("type")}>
            <SelectTrigger className="w-full">
            <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {types.map((t) => (
                <SelectItem key={t} value={t}>
                {t}
                </SelectItem>
            ))}
            </SelectContent>
        </Select>

        {/* Category Filter */}
        <Select value={filters.category} onValueChange={handle("category")}>
            <SelectTrigger className="w-full">
            <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((c) => (
                <SelectItem key={c} value={c}>
                {c}
                </SelectItem>
            ))}
            </SelectContent>
        </Select>

        {/* Industry Filter */}
        <Select value={filters.industry} onValueChange={handle("industry")}>
            <SelectTrigger className="w-full">
            <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent className="max-h-64">
            <SelectItem value="all">All Industries</SelectItem>
            {industries.map((i) => (
                <SelectItem key={i} value={i}>
                {i}
                </SelectItem>
            ))}
            </SelectContent>
        </Select>
        </div>

        {/* Clear filters */}
        {(filters.q || filters.type !== "all" || filters.category !== "all" || filters.industry !== "all") && (
        <Button variant="outline" size="sm" onClick={clearAll}>
            Clear filters
        </Button>
        )}

        {/* results grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {results.map((agent) => (
            <Dialog key={agent.name} onOpenChange={(o) => o && setActive(agent)}>
              <DialogTrigger asChild>
                {/* card */}
                <Card className="cursor-pointer hover:ring-2 hover:ring-primary/50 transition">
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{agent.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {agent.description}
                    </p>
                    <div className="space-x-2">
                      <Badge variant="outline">{agent.type}</Badge>
                      <Badge variant="secondary">{agent.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
            </Dialog>
          ))}
        </div>

        {results.length === 0 && (
          <p className="text-center text-muted-foreground">
            No agents match your filters.
          </p>
        )}
      </div>

      {/* modal */}
      {active && (
        <Dialog open onOpenChange={() => setActive(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{active.name}</DialogTitle>
              <DialogDescription>{active.description}</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="space-x-2">
                <Badge variant="outline">{active.type}</Badge>
                <Badge variant="secondary">{active.category}</Badge>
              </div>

              <p className="text-sm">{active.detailedDescription}</p>

              <div className="grid gap-2 text-sm">
                <p>
                  <span className="font-medium">Industries:</span>{" "}
                  {active.industries}
                </p>
                <p>
                  <span className="font-medium">Job Functions:</span>{" "}
                  {active.jobFunctions}
                </p>
                <p>
                  <span className="font-medium">Typical Use-Case:</span>{" "}
                  {active.useCase}
                </p>
              </div>
            </div>

            <Button asChild className="mt-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Let’s Build It Together
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}