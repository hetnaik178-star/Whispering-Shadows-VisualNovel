"""
Whispering Shadows — Premium Hackathon Pitch Deck Generator
Generates a stunning .pptx with dark cinematic aesthetics
"""
from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
import copy

# ── COLOR PALETTE ──
BG       = RGBColor(0x05, 0x05, 0x09)
BG2      = RGBColor(0x0a, 0x0a, 0x14)
BG3      = RGBColor(0x10, 0x10, 0x1c)
RED      = RGBColor(0xc4, 0x36, 0x4a)
PURPLE   = RGBColor(0x8a, 0x5c, 0xf5)
TEAL     = RGBColor(0x4a, 0xc4, 0xb0)
GOLD     = RGBColor(0xd4, 0xa8, 0x43)
WHITE    = RGBColor(0xf0, 0xec, 0xf8)
GRAY     = RGBColor(0xa8, 0xa2, 0xbc)
DIMGRAY  = RGBColor(0x5e, 0x58, 0x78)
CARD_BG  = RGBColor(0x14, 0x14, 0x24)
CARD_BG2 = RGBColor(0x1a, 0x1a, 0x2e)

# ── FONTS ──
FF_TITLE = "Cinzel"
FF_BODY  = "Cormorant Garamond"
FF_UI    = "Inter"
FF_FALL  = "Georgia"  # fallback

SLIDE_W = Inches(13.33)
SLIDE_H = Inches(7.5)

prs = Presentation()
prs.slide_width  = SLIDE_W
prs.slide_height = SLIDE_H

blank_layout = prs.slide_layouts[6]  # completely blank

# ══════════════════════════════════════════════════════════
# HELPER FUNCTIONS
# ══════════════════════════════════════════════════════════

def add_rect(slide, l, t, w, h, fill=None, line_color=None, line_w=Pt(1)):
    """Add a filled rectangle shape."""
    shape = slide.shapes.add_shape(1, l, t, w, h)
    shape.line.fill.background()
    if fill:
        shape.fill.solid()
        shape.fill.fore_color.rgb = fill
    else:
        shape.fill.background()
    if line_color:
        shape.line.color.rgb = line_color
        shape.line.width = line_w
    else:
        shape.line.fill.background()
    return shape

def add_textbox(slide, text, l, t, w, h,
                font_name=FF_UI, font_size=Pt(12),
                bold=False, italic=False,
                color=WHITE, align=PP_ALIGN.LEFT,
                wrap=True, word_wrap=True):
    """Add a textbox."""
    txb = slide.shapes.add_textbox(l, t, w, h)
    txb.word_wrap = word_wrap
    tf = txb.text_frame
    tf.word_wrap = wrap
    p = tf.paragraphs[0]
    p.alignment = align
    run = p.add_run()
    run.text = text
    run.font.name = font_name
    run.font.size = font_size
    run.font.bold = bold
    run.font.italic = italic
    run.font.color.rgb = color
    return txb

def add_multiline_textbox(slide, lines, l, t, w, h,
                           font_name=FF_UI, font_size=Pt(11),
                           color=GRAY, align=PP_ALIGN.LEFT,
                           line_spacing=None):
    """Add textbox with multiple paragraphs."""
    txb = slide.shapes.add_textbox(l, t, w, h)
    txb.word_wrap = True
    tf = txb.text_frame
    tf.word_wrap = True
    for i, (txt, opts) in enumerate(lines):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.alignment = opts.get('align', align)
        if line_spacing:
            p.line_spacing = line_spacing
        run = p.add_run()
        run.text = txt
        run.font.name = opts.get('font', font_name)
        run.font.size = opts.get('size', font_size)
        run.font.bold = opts.get('bold', False)
        run.font.italic = opts.get('italic', False)
        run.font.color.rgb = opts.get('color', color)
    return txb

def slide_bg(slide, color=BG):
    """Fill slide background."""
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = color

def accent_bar(slide, l, t, w=Inches(0.8), h=Pt(2.5), colors=None):
    """Add the tri-color accent bar."""
    if colors is None:
        colors = [RED, PURPLE, TEAL]
    seg_w = w // len(colors)
    for i, c in enumerate(colors):
        add_rect(slide, l + i*seg_w, t, seg_w, h, fill=c)

def kicker(slide, text, l, t, w=Inches(8)):
    """Small uppercase kicker label."""
    add_textbox(slide, text, l, t, w, Inches(0.3),
                font_name=FF_UI, font_size=Pt(9),
                color=DIMGRAY, align=PP_ALIGN.LEFT)

def slide_title(slide, text, l, t, w=Inches(11), h=Inches(1.4),
                color=WHITE, size=Pt(44), font=FF_TITLE):
    add_textbox(slide, text, l, t, w, h,
                font_name=font, font_size=size,
                bold=True, color=color)

def card_rect(slide, l, t, w, h, accent_color=None):
    """Draw a glass-style card background."""
    add_rect(slide, l, t, w, h, fill=CARD_BG)
    if accent_color:
        # accent left border
        add_rect(slide, l, t, Pt(3), h, fill=accent_color)

def stat_block(slide, number, label, l, t, color=GOLD):
    """Big number + small label stat."""
    add_textbox(slide, number, l, t, Inches(2.2), Inches(0.8),
                font_name=FF_TITLE, font_size=Pt(48),
                bold=True, color=color, align=PP_ALIGN.CENTER)
    add_textbox(slide, label, l, t + Inches(0.75), Inches(2.2), Inches(0.35),
                font_name=FF_UI, font_size=Pt(8.5),
                color=DIMGRAY, align=PP_ALIGN.CENTER)

# ══════════════════════════════════════════════════════════
# SLIDE 1 — TITLE
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(blank_layout)
slide_bg(s, BG)

# Gradient-effect background rects (layered)
add_rect(s, Inches(0), Inches(0), SLIDE_W, SLIDE_H, fill=RGBColor(0x05,0x05,0x09))
# Purple glow blob top-left
add_rect(s, Inches(0), Inches(0), Inches(6), Inches(4), fill=RGBColor(0x0e,0x08,0x20))
# Red glow blob bottom-right
add_rect(s, Inches(7), Inches(4), Inches(7), Inches(4), fill=RGBColor(0x15,0x05,0x0a))

# Hackathon badge
badge = add_rect(s, Inches(4.4), Inches(0.5), Inches(4.6), Inches(0.45),
                 fill=RGBColor(0x12,0x10,0x1a), line_color=GOLD, line_w=Pt(0.75))
add_textbox(s, '✦  HACKATHON SUBMISSION 2026  ✦',
            Inches(4.4), Inches(0.5), Inches(4.6), Inches(0.45),
            font_name=FF_UI, font_size=Pt(8), color=GOLD,
            align=PP_ALIGN.CENTER, bold=True)

# Main title
add_textbox(s, 'WHISPERING', Inches(1.2), Inches(1.3), Inches(11), Inches(1.2),
            font_name=FF_TITLE, font_size=Pt(78), bold=True,
            color=PURPLE, align=PP_ALIGN.CENTER)
add_textbox(s, 'SHADOWS', Inches(1.2), Inches(2.35), Inches(11), Inches(1.2),
            font_name=FF_TITLE, font_size=Pt(78), bold=True,
            color=RED, align=PP_ALIGN.CENTER)

# Tagline
add_textbox(s, 'The Interactive Cinematic Story Engine',
            Inches(2), Inches(3.55), Inches(9.33), Inches(0.5),
            font_name=FF_BODY, font_size=Pt(20),
            italic=True, color=GRAY, align=PP_ALIGN.CENTER)

# Accent bar
accent_bar(s, Inches(5.8), Inches(4.12), Inches(1.8), Pt(2.5))

# Stats row
stats = [
    ('7', 'Stories', RED),
    ('140+', 'Scene Artworks', PURPLE),
    ('6', 'Genre UIs', TEAL),
    ('∞', 'Unique Paths', GOLD),
]
for i, (num, lbl, col) in enumerate(stats):
    x = Inches(1.8 + i * 2.55)
    add_rect(s, x, Inches(4.55), Inches(2.1), Inches(1.3), fill=CARD_BG2)
    add_textbox(s, num, x, Inches(4.58), Inches(2.1), Inches(0.75),
                font_name=FF_TITLE, font_size=Pt(36), bold=True,
                color=col, align=PP_ALIGN.CENTER)
    add_textbox(s, lbl, x, Inches(5.25), Inches(2.1), Inches(0.3),
                font_name=FF_UI, font_size=Pt(8), color=DIMGRAY,
                align=PP_ALIGN.CENTER)

add_textbox(s, 'Your choices. Your story. Your ending.',
            Inches(2), Inches(6.75), Inches(9.33), Inches(0.4),
            font_name=FF_UI, font_size=Pt(8.5),
            color=DIMGRAY, align=PP_ALIGN.CENTER)

# ══════════════════════════════════════════════════════════
# SLIDE 2 — THE PROBLEM
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(blank_layout)
slide_bg(s, BG)
add_rect(s, Inches(0), Inches(0), Inches(5), SLIDE_H, fill=RGBColor(0x10,0x05,0x0a))

kicker(s, 'THE PROBLEM SPACE', Inches(0.6), Inches(0.6))
add_textbox(s, 'Storytelling\nis Passive.', Inches(0.6), Inches(0.95), Inches(5.5), Inches(2.0),
            font_name=FF_TITLE, font_size=Pt(42), bold=True, color=RED)
add_textbox(s, 'We Made It Personal.', Inches(0.6), Inches(2.85), Inches(5.5), Inches(0.7),
            font_name=FF_TITLE, font_size=Pt(28), bold=True, color=TEAL)
accent_bar(s, Inches(0.6), Inches(3.65), Inches(0.8), Pt(2.5))

# Problem bullets
problems = [
    '✗  Players forced into identity-less protagonists',
    '✗  Choices carry no emotional weight or consequence',
    '✗  No cross-device progress continuity',
    '✗  Genre aesthetics are generic, not immersive',
]
for i, prob in enumerate(problems):
    add_textbox(s, prob, Inches(0.6), Inches(3.9) + Inches(i * 0.52),
                Inches(5.8), Inches(0.45),
                font_name=FF_UI, font_size=Pt(10.5), color=GRAY)

# Right panel — solution
add_rect(s, Inches(7), Inches(0.6), Inches(5.8), Inches(2.6), fill=CARD_BG2)
add_rect(s, Inches(7), Inches(0.6), Pt(3), Inches(2.6), fill=PURPLE)
add_textbox(s, 'OUR ANSWER', Inches(7.15), Inches(0.75), Inches(5.5), Inches(0.35),
            font_name=FF_UI, font_size=Pt(8), color=PURPLE, bold=True)
add_textbox(s, 'A cinematic narrative engine that makes YOU the protagonist across 7 genre-distinct universes — with persistent character identity, real consequence, and AAA visual polish.',
            Inches(7.15), Inches(1.15), Inches(5.5), Inches(1.8),
            font_name=FF_BODY, font_size=Pt(14), color=GRAY, italic=True)

# Philosophy box
add_rect(s, Inches(7), Inches(3.5), Inches(5.8), Inches(1.5), fill=CARD_BG)
add_rect(s, Inches(7), Inches(3.5), Pt(3), Inches(1.5), fill=TEAL)
add_textbox(s, 'OUR PHILOSOPHY', Inches(7.15), Inches(3.65), Inches(5.5), Inches(0.3),
            font_name=FF_UI, font_size=Pt(7.5), color=TEAL, bold=True)
add_textbox(s, '"Every choice writes your fate"',
            Inches(7.15), Inches(4.0), Inches(5.5), Inches(0.6),
            font_name=FF_BODY, font_size=Pt(18), italic=True, color=WHITE)

# Quote at bottom
add_rect(s, Inches(7), Inches(5.3), Inches(5.8), Inches(1.6), fill=CARD_BG2)
add_rect(s, Inches(7), Inches(5.3), Pt(3), Inches(1.6), fill=GOLD)
add_textbox(s, 'The market for interactive fiction is growing at 12% YoY. Web-native platforms are the untapped frontier.',
            Inches(7.15), Inches(5.45), Inches(5.5), Inches(1.2),
            font_name=FF_UI, font_size=Pt(10), color=GRAY, italic=True)

# ══════════════════════════════════════════════════════════
# SLIDE 3 — WHAT WE BUILT
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(blank_layout)
slide_bg(s, BG)

kicker(s, 'THE PLATFORM', Inches(0.6), Inches(0.5))
slide_title(s, 'One Engine. Seven Universes.', Inches(0.6), Inches(0.8), size=Pt(40))
accent_bar(s, Inches(0.6), Inches(1.65), Inches(0.8), Pt(2.5))

features = [
    ('🎭', 'Cinematic Stories', '7 fully-authored episodic stories across Horror, Cyberpunk, Mystery, Sci-Fi, Steampunk, Fantasy & Psychological genres.', RED),
    ('🧬', 'Fate Atlas', 'AI-style player profiling that analyzes every decision and builds a live psychological portrait of your playstyle and moral compass.', PURPLE),
    ('☁️', 'Firebase Cloud Sync', 'Full auth (Google · Email · Guest) with real-time Firestore sync of saves, progress, and character data across all devices.', TEAL),
    ('🎨', 'Character Customization', 'Per-story name, gender & look selection with 42 character portraits. Identity persists and is referenced across every episode.', GOLD),
    ('💾', 'Memory Archive', 'Branching decision tree per session. Multiple save slots with full chapter history, timestamps, and choice replay.', PURPLE),
    ('⏱️', 'Pressure Mechanics', 'Timed choices with countdown tension, atmospheric ambient soundscapes, and cinematic video chapter transitions.', TEAL),
]

cols = 3
card_w = Inches(3.9)
card_h = Inches(1.8)
for i, (icon, name, desc, col) in enumerate(features):
    row = i // cols
    icol = i % cols
    x = Inches(0.5) + icol * (card_w + Inches(0.26))
    y = Inches(2.0) + row * (card_h + Inches(0.2))
    add_rect(s, x, y, card_w, card_h, fill=CARD_BG)
    add_rect(s, x, y, Pt(3), card_h, fill=col)
    add_textbox(s, icon + '  ' + name, x + Inches(0.12), y + Inches(0.12),
                card_w - Inches(0.15), Inches(0.38),
                font_name=FF_TITLE, font_size=Pt(11), bold=True, color=WHITE)
    add_textbox(s, desc, x + Inches(0.12), y + Inches(0.5),
                card_w - Inches(0.2), Inches(1.2),
                font_name=FF_UI, font_size=Pt(9.5), color=GRAY)

# ══════════════════════════════════════════════════════════
# SLIDE 4 — THE 7 STORIES
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(blank_layout)
slide_bg(s, BG)

kicker(s, 'THE STORY UNIVERSE', Inches(0.6), Inches(0.5))
slide_title(s, 'Seven Worlds. Infinite Endings.', Inches(0.6), Inches(0.8), size=Pt(40))
accent_bar(s, Inches(0.6), Inches(1.65), Inches(0.8), Pt(2.5))

stories = [
    ('🏚️', 'Ravencroft', 'Gothic Horror', 'Return to the cursed manor after 30 years. Unravel the family secret before it buries you.', RED),
    ('🤖', 'Neon District', 'Cyberpunk 2089', 'Hack the city-net, dodge megacorp agents, and expose the truth beneath the neon.', TEAL),
    ('🚢', 'Crimson Tide', 'Noir Mystery', 'A murder mid-Atlantic. Every passenger a suspect. Every clue a lie.', GOLD),
    ('🚀', 'Echoes', 'Deep Space Sci-Fi', 'Commander of Starship Elysium. First contact is inevitable — survival is not.', PURPLE),
    ('⚙️', 'Clockwork', 'Steampunk', 'Navigate the Parliament of Gears. Brass conspiracies. Steam-powered betrayal.', RGBColor(0xf0,0xa0,0x30)),
    ('🗺️', 'The Realm', 'Dark Fantasy', 'The Drowned Coast awakens. An ancient keystone has chosen you. Legends don\'t ask permission.', RGBColor(0x10,0xb9,0x81)),
    ('🧠', 'Fractured', 'Psychological', 'The hospital holds secrets. So does the mirror. And so do you.', RGBColor(0xe8,0x43,0x93)),
]

card_w = Inches(1.72)
card_h = Inches(4.3)
for i, (icon, name, genre, desc, col) in enumerate(stories):
    x = Inches(0.28) + i * (card_w + Inches(0.1))
    y = Inches(2.05)
    add_rect(s, x, y, card_w, card_h, fill=CARD_BG)
    add_rect(s, x, y, card_w, Pt(3), fill=col)
    add_textbox(s, icon, x, y + Inches(0.15), card_w, Inches(0.5),
                font_name=FF_UI, font_size=Pt(22), align=PP_ALIGN.CENTER)
    add_textbox(s, name, x, y + Inches(0.68), card_w, Inches(0.55),
                font_name=FF_TITLE, font_size=Pt(10), bold=True,
                color=col, align=PP_ALIGN.CENTER)
    add_textbox(s, genre, x, y + Inches(1.2), card_w, Inches(0.3),
                font_name=FF_UI, font_size=Pt(7.5),
                color=DIMGRAY, align=PP_ALIGN.CENTER)
    add_rect(s, x + Inches(0.15), y + Inches(1.55), card_w - Inches(0.3), Pt(0.75), fill=col)
    add_textbox(s, desc, x + Inches(0.1), y + Inches(1.7), card_w - Inches(0.15), Inches(2.3),
                font_name=FF_UI, font_size=Pt(8.2), color=GRAY)

# ══════════════════════════════════════════════════════════
# SLIDE 5 — KEY INNOVATIONS
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(blank_layout)
slide_bg(s, BG)

kicker(s, 'INNOVATIONS', Inches(0.6), Inches(0.5))
slide_title(s, 'What Sets Us Apart', Inches(0.6), Inches(0.8), size=Pt(40))
accent_bar(s, Inches(0.6), Inches(1.65), Inches(0.8), Pt(2.5))

innovations = [
    ('🎬', 'Cinematic Video Transitions', 'Each chapter opens with a genre-crafted cinematic video — immersing the player before the first word is read. No other web-native narrative platform achieves this level of production polish.', RED),
    ('🧬', 'Fate Atlas — Live Profiling', 'Every choice feeds a real-time psychological profile. Courage, empathy, deception rates tracked and visualized in a stunning atlas UI — a first for web-based narrative games.', PURPLE),
    ('🎨', '6 Genre-Adapted UI Systems', 'The entire UI theme (colors, animations, typography) transforms per story. Gothic crimson for Ravencroft. Neon teal for Neon District. The world changes when you enter it.', TEAL),
    ('☁️', 'Multi-Auth Firebase Backend', 'Google, Facebook, Email & Guest — four auth paths feeding into a single Firestore user document. Full cross-device sync of all save slots and progress, live.', GOLD),
    ('🎭', 'Persistent Character Identity', 'Player\'s name, gender & look follow them across every episode. Referenced in dialogue, reflected in scene composition — the story knows who you are.', PURPLE),
    ('🎵', 'Procedural Ambient Soundscapes', 'Dynamic audio adapts per genre and scene intensity — layered sound beds, tension crescendos, and deliberate silence as a narrative device — all generated in-engine.', TEAL),
]

card_w = Inches(3.85)
card_h = Inches(2.0)
for i, (icon, name, desc, col) in enumerate(innovations):
    row = i // 3
    icol = i % 3
    x = Inches(0.35) + icol * (card_w + Inches(0.3))
    y = Inches(2.05) + row * (card_h + Inches(0.18))
    add_rect(s, x, y, card_w, card_h, fill=CARD_BG)
    # Top accent line
    add_rect(s, x, y, card_w, Pt(2.5), fill=col)
    add_textbox(s, icon + '  ' + name, x + Inches(0.12), y + Inches(0.12),
                card_w - Inches(0.15), Inches(0.38),
                font_name=FF_TITLE, font_size=Pt(10.5), bold=True, color=col)
    add_textbox(s, desc, x + Inches(0.12), y + Inches(0.52),
                card_w - Inches(0.2), Inches(1.35),
                font_name=FF_UI, font_size=Pt(9), color=GRAY)

# ══════════════════════════════════════════════════════════
# SLIDE 6 — TECH STACK
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(blank_layout)
slide_bg(s, BG)

kicker(s, 'ARCHITECTURE', Inches(0.6), Inches(0.5))
slide_title(s, 'Built Without Limits. Pure Web Tech.', Inches(0.6), Inches(0.8), size=Pt(36))
accent_bar(s, Inches(0.6), Inches(1.65), Inches(0.8), Pt(2.5))

# Left: tech layers
layers = [
    ('🖼️  Frontend Layer', 'HTML5 · CSS3 · ES6+ JavaScript', GOLD),
    ('⚡  Engine Core', 'Custom IIFE Engine · State Machine · Event Bus', PURPLE),
    ('☁️  Backend', 'Firebase Auth · Firestore · Realtime Sync', TEAL),
    ('🎨  Assets', 'AI-Generated Art · Custom Video · Google Fonts', RED),
    ('🎵  Audio', 'Web Audio API · Procedural Soundscapes', RGBColor(0xe8,0x43,0x93)),
]
for i, (name, tags, col) in enumerate(layers):
    y = Inches(2.05) + i * Inches(0.9)
    add_rect(s, Inches(0.4), y, Inches(6.5), Inches(0.78), fill=CARD_BG)
    add_rect(s, Inches(0.4), y, Pt(3), Inches(0.78), fill=col)
    add_textbox(s, name, Inches(0.55), y + Inches(0.06),
                Inches(2.2), Inches(0.35),
                font_name=FF_TITLE, font_size=Pt(10), bold=True, color=col)
    add_textbox(s, tags, Inches(2.8), y + Inches(0.2),
                Inches(4.0), Inches(0.35),
                font_name=FF_UI, font_size=Pt(9.5), color=GRAY)

# Right: why no framework box
add_rect(s, Inches(7.4), Inches(2.05), Inches(5.4), Inches(4.5), fill=CARD_BG2)
add_rect(s, Inches(7.4), Inches(2.05), Pt(3), Inches(4.5), fill=PURPLE)
add_textbox(s, 'WHY NO FRAMEWORK?', Inches(7.55), Inches(2.18),
            Inches(5.0), Inches(0.35),
            font_name=FF_UI, font_size=Pt(8.5), bold=True, color=PURPLE)
add_textbox(s, 'Zero dependencies means zero overhead. Every KB is intentional. The entire platform loads in under 1.2s on any device — no React bundle, no build step, no runtime.',
            Inches(7.55), Inches(2.58), Inches(5.0), Inches(1.1),
            font_name=FF_UI, font_size=Pt(10.5), color=GRAY)

metrics = [
    ('Bundle Size', '~120 KB', TEAL),
    ('Dependencies', '0 (+ Firebase)', TEAL),
    ('Lines of Code', '14,000+', TEAL),
    ('Load Time', '< 1.2s', TEAL),
    ('Browser Support', 'All Modern', TEAL),
]
for i, (lbl, val, col) in enumerate(metrics):
    y = Inches(3.78) + i * Inches(0.5)
    add_rect(s, Inches(7.55), y, Inches(5.0), Pt(0.5), fill=RGBColor(0x20,0x20,0x35))
    add_textbox(s, lbl, Inches(7.55), y + Inches(0.06),
                Inches(3.0), Inches(0.35),
                font_name=FF_UI, font_size=Pt(9.5), color=DIMGRAY)
    add_textbox(s, val, Inches(10.6), y + Inches(0.06),
                Inches(2.0), Inches(0.35),
                font_name=FF_TITLE, font_size=Pt(10), bold=True, color=col,
                align=PP_ALIGN.RIGHT)

# ══════════════════════════════════════════════════════════
# SLIDE 7 — SYSTEM ARCHITECTURE FLOW
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(blank_layout)
slide_bg(s, BG)

kicker(s, 'SYSTEM DESIGN', Inches(0.6), Inches(0.5))
slide_title(s, 'How the Engine Works', Inches(0.6), Inches(0.8), size=Pt(40))
accent_bar(s, Inches(0.6), Inches(1.65), Inches(0.8), Pt(2.5))

# Input row (3 boxes)
inputs = [('👤 Player Input', 'Name · Gender · Look · Choices', TEAL),
          ('🔑 Auth Layer', 'Google · Email · Guest', TEAL),
          ('🎬 Story Data', 'Episodes · Branches · Scenes', TEAL)]
bw = Inches(3.6)
for i, (title, sub, col) in enumerate(inputs):
    x = Inches(0.7) + i * (bw + Inches(0.42))
    add_rect(s, x, Inches(2.05), bw, Inches(0.85), fill=CARD_BG)
    add_rect(s, x, Inches(2.05), bw, Pt(2.5), fill=col)
    add_textbox(s, title, x + Inches(0.1), Inches(2.12),
                bw - Inches(0.15), Inches(0.38),
                font_name=FF_TITLE, font_size=Pt(10.5), bold=True, color=col)
    add_textbox(s, sub, x + Inches(0.1), Inches(2.5),
                bw - Inches(0.15), Inches(0.3),
                font_name=FF_UI, font_size=Pt(8.5), color=DIMGRAY)

# Arrow down
add_textbox(s, '▼                    ▼                    ▼',
            Inches(1), Inches(3.0), Inches(11.5), Inches(0.4),
            font_name=FF_UI, font_size=Pt(12), color=PURPLE, align=PP_ALIGN.CENTER)

# Engine Core (big box)
add_rect(s, Inches(0.7), Inches(3.45), Inches(11.9), Inches(1.35), fill=RGBColor(0x14,0x0c,0x2a))
add_rect(s, Inches(0.7), Inches(3.45), Inches(11.9), Pt(2.5), fill=PURPLE)
add_textbox(s, '⚡  WHISPERING SHADOWS ENGINE CORE',
            Inches(0.7), Inches(3.52), Inches(11.9), Inches(0.42),
            font_name=FF_TITLE, font_size=Pt(12), bold=True,
            color=PURPLE, align=PP_ALIGN.CENTER)
modules = 'engine.js (State Machine)   ·   char_customization.js (Identity)   ·   fate_atlas.js (Profiling)   ·   sync.js (Cloud Bridge)   ·   audio.js (Soundscapes)'
add_textbox(s, modules, Inches(0.7), Inches(3.98), Inches(11.9), Inches(0.65),
            font_name=FF_UI, font_size=Pt(9), color=GRAY, align=PP_ALIGN.CENTER)

# Arrow down
add_textbox(s, '▼',
            Inches(6), Inches(4.88), Inches(1.5), Inches(0.35),
            font_name=FF_UI, font_size=Pt(14), color=PURPLE, align=PP_ALIGN.CENTER)

# Output row (4 boxes)
outputs = [('🎭 Story UI', '6 Genre Themes', GOLD),
           ('💾 Save System', 'Local + Firestore', GOLD),
           ('🧬 Fate Atlas', 'Decision Profile', GOLD),
           ('📊 Analytics', 'Choices · Endings', GOLD)]
ow = Inches(2.8)
for i, (title, sub, col) in enumerate(outputs):
    x = Inches(0.7) + i * (ow + Inches(0.42))
    add_rect(s, x, Inches(5.25), ow, Inches(0.9), fill=CARD_BG)
    add_rect(s, x, Inches(5.25), ow, Pt(2.5), fill=col)
    add_textbox(s, title, x + Inches(0.1), Inches(5.32),
                ow - Inches(0.15), Inches(0.38),
                font_name=FF_TITLE, font_size=Pt(10), bold=True, color=col)
    add_textbox(s, sub, x + Inches(0.1), Inches(5.7),
                ow - Inches(0.15), Inches(0.3),
                font_name=FF_UI, font_size=Pt(8.5), color=DIMGRAY)

add_textbox(s, 'Single-file index.html · Firebase project · Zero build toolchain',
            Inches(0), Inches(6.9), SLIDE_W, Inches(0.35),
            font_name=FF_UI, font_size=Pt(8), color=DIMGRAY, align=PP_ALIGN.CENTER)

# ══════════════════════════════════════════════════════════
# SLIDE 8 — IMPACT & METRICS
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(blank_layout)
slide_bg(s, BG)

kicker(s, 'SCALE & IMPACT', Inches(0.6), Inches(0.5))
slide_title(s, 'Built to Ship. Ready to Scale.', Inches(0.6), Inches(0.8), size=Pt(40))
accent_bar(s, Inches(0.6), Inches(1.65), Inches(0.8), Pt(2.5))

# 4 big stat cards
big_stats = [
    ('7', 'Complete\nStories', 'Each with 5 episodes, named characters & unique UI themes', GOLD),
    ('140+', 'Scene\nArtworks', 'AI-generated, manually curated, genre-accurate cinematic stills', PURPLE),
    ('42', 'Character\nPortraits', 'Male & female looks per story, fully mapped & persisted', TEAL),
    ('14k+', 'Lines of\nCode', 'Pure JS engine — zero framework, zero build pipeline', RED),
]
card_w = Inches(2.8)
for i, (num, lbl, desc, col) in enumerate(big_stats):
    x = Inches(0.65) + i * (card_w + Inches(0.55))
    add_rect(s, x, Inches(2.05), card_w, Inches(3.8), fill=CARD_BG)
    add_rect(s, x, Inches(2.05), card_w, Pt(3), fill=col)
    add_textbox(s, num, x, Inches(2.25), card_w, Inches(1.0),
                font_name=FF_TITLE, font_size=Pt(52), bold=True,
                color=col, align=PP_ALIGN.CENTER)
    add_textbox(s, lbl, x, Inches(3.2), card_w, Inches(0.7),
                font_name=FF_TITLE, font_size=Pt(13),
                color=WHITE, align=PP_ALIGN.CENTER)
    add_textbox(s, desc, x + Inches(0.12), Inches(3.95), card_w - Inches(0.2), Inches(1.6),
                font_name=FF_UI, font_size=Pt(9.5), color=GRAY, align=PP_ALIGN.CENTER)

# Quote
add_rect(s, Inches(0.65), Inches(6.05), Inches(12), Inches(1.0), fill=CARD_BG2)
add_rect(s, Inches(0.65), Inches(6.05), Pt(3), Inches(1.0), fill=GOLD)
add_textbox(s, '"  The body is the vessel. The soul is the story.  "',
            Inches(0.65), Inches(6.15), Inches(12), Inches(0.7),
            font_name=FF_BODY, font_size=Pt(18), italic=True,
            color=GOLD, align=PP_ALIGN.CENTER)

# ══════════════════════════════════════════════════════════
# SLIDE 9 — THANK YOU / CTA
# ══════════════════════════════════════════════════════════
s = prs.slides.add_slide(blank_layout)
slide_bg(s, BG)

# Background glow rects
add_rect(s, Inches(3), Inches(1), Inches(8), Inches(6), fill=RGBColor(0x0c,0x07,0x1e))

add_textbox(s, '✦', Inches(6.0), Inches(0.5), Inches(1.3), Inches(0.6),
            font_name=FF_UI, font_size=Pt(18), color=GOLD, align=PP_ALIGN.CENTER)

add_textbox(s, 'THANK YOU', Inches(0), Inches(1.1), SLIDE_W, Inches(0.5),
            font_name=FF_UI, font_size=Pt(9), bold=True,
            color=DIMGRAY, align=PP_ALIGN.CENTER)

add_textbox(s, 'WHISPERING SHADOWS', Inches(0), Inches(1.55), SLIDE_W, Inches(1.1),
            font_name=FF_TITLE, font_size=Pt(58), bold=True,
            color=PURPLE, align=PP_ALIGN.CENTER)

add_textbox(s, 'Your choices. Your story. Your ending.',
            Inches(0), Inches(2.6), SLIDE_W, Inches(0.55),
            font_name=FF_BODY, font_size=Pt(20), italic=True,
            color=GRAY, align=PP_ALIGN.CENTER)

# Accent bar
accent_bar(s, Inches(5.8), Inches(3.25), Inches(1.8), Pt(2.5))

# 3 closing points
closing = [
    ('🎮', 'Live Demo\nAvailable', 'Open index.html\nfor the full experience'),
    ('⚡', 'Pure Web\nTechnology', 'Zero install.\nRuns anywhere.'),
    ('☁️', 'Firebase\nDeployed', 'Auth + Sync\nfully live.'),
]
cw = Inches(3.2)
for i, (icon, title, desc) in enumerate(closing):
    x = Inches(1.8) + i * (cw + Inches(0.65))
    add_rect(s, x, Inches(3.6), cw, Inches(2.0), fill=CARD_BG)
    add_textbox(s, icon, x, Inches(3.7), cw, Inches(0.5),
                font_name=FF_UI, font_size=Pt(22), align=PP_ALIGN.CENTER)
    add_textbox(s, title, x, Inches(4.2), cw, Inches(0.6),
                font_name=FF_TITLE, font_size=Pt(11), bold=True,
                color=WHITE, align=PP_ALIGN.CENTER)
    add_textbox(s, desc, x, Inches(4.82), cw, Inches(0.6),
                font_name=FF_UI, font_size=Pt(8.5), color=DIMGRAY, align=PP_ALIGN.CENTER)

add_textbox(s, 'Hackathon 2026  ·  Interactive Fiction Engine  ·  Whispering Shadows',
            Inches(0), Inches(6.9), SLIDE_W, Inches(0.35),
            font_name=FF_UI, font_size=Pt(8), color=DIMGRAY, align=PP_ALIGN.CENTER)

# ══════════════════════════════════════════════════════════
# SAVE
# ══════════════════════════════════════════════════════════
output_path = r'D:\Game_byme\prototype-20260319T171742Z-1-001\Whispering Shadows\PPT\Whispering_Shadows_Pitch.pptx'
prs.save(output_path)
print(f'✅  Saved: {output_path}')
print(f'   Slides: {len(prs.slides)}')
