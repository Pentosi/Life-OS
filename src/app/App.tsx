import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
  Skeleton,
} from "@/components/ui";

export function App() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold">Life OS</h1>

          <p className="text-muted-foreground">
            Design System Playground
          </p>
        </header>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>

            <CardDescription>
              Button variants used throughout Life OS.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-3">
            <Button>Primary</Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>

            <Button variant="ghost">
              Ghost
            </Button>

            <Button variant="destructive">
              Delete
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>

            <CardDescription>
              Basic form controls.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address
              </Label>

              <Input
                id="email"
                placeholder="you@example.com"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
          </CardHeader>

          <CardContent className="flex gap-3">
            <Badge>Default</Badge>

            <Badge variant="secondary">
              Secondary
            </Badge>

            <Badge variant="outline">
              Outline
            </Badge>

            <Badge variant="destructive">
              Destructive
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skeleton</CardTitle>
          </CardHeader>

          <CardContent>
            <Skeleton className="h-24 w-full rounded-lg" />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}