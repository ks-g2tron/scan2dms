export const metadata = {
  title: 'From Shopfloor to SharePoint — eScan A450 Pro',
  description: 'How UK manufacturing SMEs eliminate lost paperwork and pass audits with one scan.',
}

export default function DeckPage() {
  return (
    <iframe
      src="/escan-deck.html"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 9999,
      }}
      title="eScan A450 Pro — Manufacturing Deck"
    />
  )
}
