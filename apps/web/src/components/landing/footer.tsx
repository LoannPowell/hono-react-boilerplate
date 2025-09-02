interface FooterProps {
  companyName: string
  currentYear: number
}

export function Footer({ companyName, currentYear }: FooterProps) {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
