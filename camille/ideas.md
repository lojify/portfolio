# Camille Larue — Experience Portfolio

## Design Movement
**Quiet Luxury Editorial** — inspirado nas revistas de moda de alta-costura (Vogue Italia, Numéro) combinado com a minimalismo escandinavo e a precisão da arte japonesa. Cada pixel é intencional, cada animação tem peso dramático.

## Core Principles
1. **Espaço é o principal ingrediente** — generoso whitespace que respira, elementos posicionados com precisão matemática, zero containers ou bordas desnecessárias.
2. **Tipografia como escultura** — títulos em tamanhos extremos que funcionam como elementos visuais independentes, não apenas texto.
3. **Movimento com intenção** — cada animação conta uma parte da história, scrollytelling real onde o scroll revela camadas de profundidade.
4. **Textura invisível** — film grain sutil, paralaxe suave, e 3D orgânico que adicionam dimensão sem poluição visual.

## Color Philosophy
- **Bone White (#F8F7F4)** — fundo que evoca papel de arte premium, quente e orgânico
- **Charcoal (#1C1C1C)** — texto com peso dramático, nunca preto puro
- **Champagne Gold (#C5A059)** — acento único e signature da marca, usado com extrema parcimônia em linhas finas, detalhes tipográficos e o 3D

## Layout Paradigm
Assimetria editorial controlada — elementos posicionados em grid invisível de 12 colunas mas com alinhamentos deliberadamente quebrados. Texto alinhado à esquerda com margens generosas. Imagens em proporções variadas dispostas como uma galeria de arte contemporânea.

## Signature Elements
1. **Film Grain Overlay** — camada de ruído de película fotográfica em opacidade 0.03 sobre todo o site, criando textura orgânica
2. **Champagne Gold Split Lines** — linhas verticais finas em gold que dividem seções e guiam o olhar
3. **Parallax Depth Layers** — texto que se move em velocidade diferente das imagens, criando sensação de profundidade física

## Interaction Philosophy
Interações são sutis e elegantes — hover revela com transição lenta (800ms), scroll ativa reveals dramáticos com easing expo.out, mouse move afeta sutilmente o 3D com lerp de 0.1. Nada brusco, tudo flui como seda.

## Animation
- **GSAP ScrollTrigger** como motor principal de scrollytelling
- **Lenis** para scroll suave e orgânico
- Easing: `expo.out` para revelações, `power2.out` para elementos menores
- Texto que revela letra por letra com split e stagger
- Imagens que emergem com scale(0.95) + opacity
- 3D que rotaciona com velocidade do scroll + reage ao mouse com lerp(0.1)
- Duração das animações: 800ms-2000ms para revelar grande impacto

## Typography System
- **Display:** Playfair Display (Google Fonts) — Italic para sub-títulos, Regular para títulos principais
  - Hero: 7xl-9xl, leading-none, tracking-tight
  - Section titles: 5xl-7xl, leading-tight
- **Body:** Inter (Google Fonts) — weight 300-400, leading-relaxed
  - Paragraphs: text-base, leading-8, max-w-2xl
- **Meta/Labels:** Inter 300, uppercase, tracking-[0.3em], text-xs

## Brand Essence
**"Arte que você veste nas mãos"** — Camille Larue transforma unhas em esculturas vestíveis. Para mulheres que entendem que os detalhes são tudo. Diferente por ser a única manicure que trabalha como artista de ateliê.

**Personalidade:** Sofisticada, Misteriosa, Precisa

## Brand Voice
Headlines são poéticos e lacônicos. CTAs são discretos mas claros. Microcopy é refinada, nunca genérica.

Exemplos:
- "Cada unha é uma tela. Cada cliente, uma obra única."
- "Agende sua experiência" (não "Marque horário" ou "Saiba mais")

## Wordmark & Logo
**Logotype:** "Camille Larue" em Playfair Display Italic, tamanho refinado, com uma linha vertical fina em Champagne Gold à esquerda. Nunca com fundo ou moldura.

**Logo Mark:** Símbolo abstrato — uma gota de esmalte estilizada que se transforma em curva de seda, em Champagne Gold sobre transparente.

## Signature Brand Color
**Champagne Gold #C5A059** — usado como a única cor de acento em todo o site. Apenas em: linhas decorativas finas, ícones de scroll, e a escultura 3D.

## Seções
1. **Hero** — Nome gigante + "Nail Artist" + vídeo seda sutil + logo
2. **The Vision** — Frase poética com reveal letra por letra
3. **Philosophy** — Texto editorial sobre abordagem
4. **Curated Work** — Galeria assimétrica de nail art (6 imagens)
5. **The Process** — Detalhes do atendimento com imagens
6. **The Artifact** — Escultura 3D fluida champagne gold
7. **Contact** — Minimalista com CTA elegante
