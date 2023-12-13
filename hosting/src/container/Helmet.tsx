import { useEffect, useId } from "react";
import { Helmet } from "react-helmet";

export function RouterHelmet({ title = "Discord funding" }) {
  const id = useId();

  return (
    <Helmet key={id} titleTemplate="%s • GuildBloom">
      <title>{title}</title>
      <meta
        name="description"
        content="Uniting, promoting, and evolving Discord communities everywhere"
      />

      {/* <!-- Search Engine Optimization --> */}
      <meta
        name="keywords"
        content="discord, donation, ethereum, crypto, crowd funding"
      />
      <meta name="robots" content="index, follow" />

      {/* <!-- Open Graph meta tags for social media --> */}
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Uniting, promoting, and evolving Discord communities everywhere"
      />
      <meta
        property="og:image"
        content="https://cdn.discordapp.com/attachments/1171615145248706613/1181356846007717900/Frame_1.png"
      />
      <meta property="og:url" content={location.href} />

      {/* <!-- Canonical URL --> */}
      <link rel="canonical" href="https://example.com/page"></link>
    </Helmet>
  );
}
