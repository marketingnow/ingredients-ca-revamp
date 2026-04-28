# Set up the IngredientsSection on `/` (standalone ingredients page)

This project is the standalone revamp of `terrafreeze.com/ingredients`. For this step, we're **only** porting the **IngredientsSection** from your **terrafreeze-revamp** project as a reusable component and rendering it at the root URL (`/`) so you can see it live. You'll prompt the rest of the page build in a follow-up.

## Scope

- Port the section as a reusable component
- Render it at `/` (replace the blank-app placeholder in `src/routes/index.tsx`)
- Keep all ingredient links pointing to existing `terrafreeze.com/ingredients/...` URLs (unchanged from source)

Out of scope for now: hero, nav, footer, additional sections — coming in your next prompt.

## What you'll see

A grid of 12 ingredient cards, each with:
- Full-bleed background image with dark gradient overlay
- Ingredient name (linked to `terrafreeze.com/ingredients/...`)
- Short description
- Category label + white pill badge (e.g. "Instant cooling action")
- Section header: "What's Inside" badge, "18 Ingredients in 1 Powerful Formula." headline, subheadline

Layout: 1 col mobile → 2 tablet → 3 desktop, matching the source exactly.

## Steps

1. **Copy the 12 ingredient images** from terrafreeze-revamp into `src/assets/`:
   emu-oil, arnica, menthol, msm, methyl, vitamins, aloe-vera, boswellia, chamomile, ginger, turmeric, histamine.

2. **Create `src/components/IngredientsSection.tsx`** — identical markup, styles, and data to the source. Default export so any future page can reuse it:
   ```tsx
   import IngredientsSection from "@/components/IngredientsSection";
   ```

3. **Port supporting design tokens** into `src/styles.css`:
   - `font-display` utility
   - `section-supporting` and `content-container` helper classes
   - `shadow-elevated` shadow
   - (shadcn defaults like `bg-secondary`, `text-foreground`, `bg-primary` already exist ✅)

4. **Render it on `/`** — replace the placeholder in `src/routes/index.tsx` with `<IngredientsSection />`, and add proper SEO metadata in `head()` (title, description, og tags) for the ingredients page.

Once approved, I'll build it and you can review in preview before sending the next prompt for the rest of the page.
