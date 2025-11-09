interface GoogleMapEmbedProps {
  embedUrl: string;
  title?: string;
}

export function GoogleMapEmbed({ embedUrl, title = "Google Map" }: GoogleMapEmbedProps) {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-crown/40 bg-white shadow-[0_20px_45px_rgba(199,162,83,0.15)] md:h-80">
      <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
      <iframe
        src={embedUrl}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-3xl"
      />
    </div>
  );
}
