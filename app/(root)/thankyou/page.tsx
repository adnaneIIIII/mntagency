import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-[#2edce0]" />
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold">Thank You!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Your submission has been received successfully. We appreciate you taking the time to reach out to us.
          </p>
          <p className="text-muted-foreground">
            Our team will review your information and get back to you as soon as possible.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center pt-4">
          <Button asChild size="lg">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
