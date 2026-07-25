type JsonLdData = Record<string, unknown>

/** Renders a JSON-LD structured-data script. Accepts one object or an array. */
export function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
