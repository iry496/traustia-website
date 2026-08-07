from __future__ import annotations

import os
import shutil
from textwrap import wrap

from reportlab.lib.colors import HexColor, Color
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.pdfbase.pdfmetrics import stringWidth


PAGE_W, PAGE_H = letter
NAVY = HexColor("#07131f")
INK = HexColor("#081018")
WHITE = HexColor("#f6f8f5")
PAPER = HexColor("#eef2ef")
SLATE = HexColor("#607080")
TEAL = HexColor("#35c5b4")
BLUE = HexColor("#5b7cfa")
AMBER = HexColor("#f0bd70")
BORDER = HexColor("#d6dfdc")
DARK_BORDER = Color(0.77, 0.85, 0.88, alpha=0.18)


def fit_lines(text: str, font: str, size: float, max_width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(c: canvas.Canvas, text: str, x: float, y: float, width: float,
                 font: str = "Helvetica", size: float = 10, leading: float = 14,
                 color=INK, max_lines: int | None = None) -> float:
    c.setFont(font, size)
    c.setFillColor(color)
    lines = fit_lines(text, font, size, width)
    if max_lines is not None:
        lines = lines[:max_lines]
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_label(c: canvas.Canvas, text: str, x: float, y: float, color=TEAL) -> None:
    c.setFillColor(color)
    c.setFont("Courier-Bold", 6.5)
    c.drawString(x, y, text.upper())


def draw_brand(c: canvas.Canvas, x: float, y: float, light: bool = False) -> None:
    color = WHITE if light else INK
    c.setStrokeColor(TEAL)
    c.setLineWidth(0.7)
    c.circle(x + 9, y + 9, 9, stroke=1, fill=0)
    for px, py in [(x + 9, y + 14), (x + 5, y + 8), (x + 13, y + 8)]:
        c.setFillColor(TEAL)
        c.circle(px, py, 1.6, stroke=0, fill=1)
    c.line(x + 9, y + 14, x + 5, y + 8)
    c.line(x + 9, y + 14, x + 13, y + 8)
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(x + 28, y + 5, "T R A U S T I A")


def draw_header(c: canvas.Canvas, page: int, section: str) -> None:
    draw_brand(c, 48, PAGE_H - 54)
    c.setFillColor(SLATE)
    c.setFont("Courier", 6.5)
    c.drawRightString(PAGE_W - 48, PAGE_H - 45, f"SAMPLE EVIDENCE REPORT / {section.upper()}")
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(48, PAGE_H - 68, PAGE_W - 48, PAGE_H - 68)
    c.setFont("Courier", 6.5)
    c.drawString(48, 28, "ILLUSTRATIVE SAMPLE - NOT A CLIENT OR PATIENT RESULT")
    c.drawRightString(PAGE_W - 48, 28, f"PAGE {page:02d} / 06")


def draw_title(c: canvas.Canvas, kicker: str, title: str, subtitle: str, y: float) -> float:
    draw_label(c, kicker, 48, y)
    y -= 28
    c.setFillColor(INK)
    c.setFont("Helvetica", 25)
    for line in fit_lines(title, "Helvetica", 25, 490):
        c.drawString(48, y, line)
        y -= 31
    y -= 5
    return draw_wrapped(c, subtitle, 48, y, 470, size=9.5, leading=14, color=SLATE)


def draw_card(c: canvas.Canvas, x: float, y: float, w: float, h: float,
              label: str, title: str, body: str, accent=TEAL) -> None:
    c.setFillColor(WHITE)
    c.setStrokeColor(BORDER)
    c.rect(x, y, w, h, stroke=1, fill=1)
    c.setFillColor(accent)
    c.rect(x, y + h - 3, w, 3, stroke=0, fill=1)
    draw_label(c, label, x + 14, y + h - 23, accent)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(x + 14, y + h - 44, title)
    draw_wrapped(c, body, x + 14, y + h - 62, w - 28, size=7.8, leading=11, color=SLATE)


def draw_cover(c: canvas.Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    c.setStrokeColor(Color(0.49, 0.62, 0.67, alpha=0.08))
    c.setLineWidth(0.4)
    for x in range(0, int(PAGE_W), 48):
        c.line(x, 0, x, PAGE_H)
    for y in range(0, int(PAGE_H), 48):
        c.line(0, y, PAGE_W, y)
    draw_brand(c, 48, PAGE_H - 66, light=True)
    c.setFillColor(AMBER)
    c.setStrokeColor(Color(0.94, 0.74, 0.44, alpha=0.55))
    c.rect(48, PAGE_H - 144, 178, 22, stroke=1, fill=0)
    c.setFont("Courier-Bold", 6.7)
    c.drawString(58, PAGE_H - 137, "ILLUSTRATIVE SAMPLE / NO CLIENT DATA")
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 38)
    c.drawString(48, PAGE_H - 225, "Traustia")
    c.drawString(48, PAGE_H - 271, "Evidence Report")
    c.setFillColor(TEAL)
    c.setFont("Helvetica", 20)
    c.drawString(48, PAGE_H - 309, "Evidence you can defend.")
    draw_wrapped(
        c,
        "An illustrative review of a fictional high-dimensional biomarker model, demonstrating how provenance, analytical integrity, validation, uncertainty, and claim boundaries can be documented.",
        48, PAGE_H - 358, 390, size=10.5, leading=16, color=Color(0.96, 0.97, 0.96, alpha=0.68)
    )
    # Evidence core motif
    cx, cy = 462, 236
    c.setStrokeColor(Color(0.21, 0.77, 0.71, alpha=0.28))
    for radius in (34, 62, 94):
        c.circle(cx, cy, radius, stroke=1, fill=0)
    c.setFillColor(TEAL)
    c.circle(cx, cy, 12, stroke=0, fill=1)
    for px, py, color in [(390, 250, BLUE), (510, 296, TEAL), (530, 195, BLUE), (424, 172, TEAL)]:
        c.setStrokeColor(Color(0.21, 0.77, 0.71, alpha=0.36))
        c.line(cx, cy, px, py)
        c.setFillColor(color)
        c.circle(px, py, 4, stroke=0, fill=1)
    c.setFillColor(Color(0.96, 0.97, 0.96, alpha=0.4))
    c.setFont("Courier", 7)
    c.drawString(48, 58, "TRS / SAMPLE / 2026")
    c.drawRightString(PAGE_W - 48, 58, "SCIENTIFIC INTEGRITY / DEMONSTRATION")
    c.showPage()


def page_executive(c: canvas.Canvas) -> None:
    draw_header(c, 2, "Executive Evidence State")
    y = draw_title(c, "01 / EXECUTIVE REVIEW", "Evidence state: conditional support.",
                   "The fictional model shows a reproducible analytical signal, but the strongest decision claim remains constrained by validation design and cohort transportability.", PAGE_H - 105)
    y -= 28
    draw_card(c, 48, y - 112, 158, 112, "DATA", "Traceable", "Source cohort and preprocessing path are documented. Independent provenance verification remains required.")
    draw_card(c, 218, y - 112, 158, 112, "METHOD", "Reviewable", "The model path can be reconstructed. Feature selection must remain nested inside evaluation.", BLUE)
    draw_card(c, 388, y - 112, 176, 112, "VALIDATION", "Incomplete", "External performance, calibration, and subgroup behavior remain decision-limiting.", AMBER)
    y -= 150
    draw_label(c, "DECISION BOUNDARY", 48, y)
    y -= 23
    c.setFillColor(PAPER)
    c.setStrokeColor(BORDER)
    c.rect(48, y - 108, 516, 108, stroke=1, fill=1)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(66, y - 26, "Supported")
    draw_wrapped(c, "The analytical workflow produces a repeatable signal within the illustrative source cohort.", 66, y - 45, 210, size=8.5, leading=12, color=SLATE)
    c.setStrokeColor(BORDER)
    c.line(306, y - 92, 306, y - 16)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(326, y - 26, "Not yet supported")
    draw_wrapped(c, "Clinical utility, general population performance, and transportability beyond the reviewed context.", 326, y - 45, 210, size=8.5, leading=12, color=SLATE)
    y -= 144
    draw_label(c, "PRIORITY ACTIONS", 48, y)
    actions = [
        "Repeat model selection within a fully nested validation design.",
        "Evaluate calibration and decision thresholds in an independent cohort.",
        "Pre-specify subgroup and missing-data sensitivity analyses.",
    ]
    for idx, action in enumerate(actions, start=1):
        row_y = y - 26 - (idx - 1) * 42
        c.setFillColor(TEAL)
        c.setFont("Courier-Bold", 7)
        c.drawString(48, row_y, f"{idx:02d}")
        c.setFillColor(INK)
        c.setFont("Helvetica", 9)
        c.drawString(80, row_y, action)
        c.setStrokeColor(BORDER)
        c.line(48, row_y - 13, 564, row_y - 13)
    c.showPage()


def page_provenance(c: canvas.Canvas) -> None:
    draw_header(c, 3, "Data and Provenance")
    y = draw_title(c, "02 / PROVENANCE REVIEW", "Every result inherits the history of its data.",
                   "This page demonstrates how an evidence report can trace origin, transformation, inclusion rules, missingness, and unresolved provenance questions.", PAGE_H - 105)
    y -= 24
    stages = ["Source", "Eligibility", "Processing", "Analysis set", "Model input"]
    stage_x = [58, 164, 270, 376, 482]
    c.setStrokeColor(BORDER)
    c.line(62, y - 54, 510, y - 54)
    for idx, (label, x) in enumerate(zip(stages, stage_x), start=1):
        c.setFillColor(TEAL if idx < 5 else AMBER)
        c.circle(x, y - 54, 6, stroke=0, fill=1)
        c.setFillColor(SLATE)
        c.setFont("Courier", 6.5)
        c.drawCentredString(x, y - 76, f"{idx:02d} {label.upper()}")
    y -= 115
    draw_label(c, "TRACEABILITY CHECKS", 48, y)
    checks = [
        ("Cohort definition", "Documented", TEAL),
        ("Inclusion and exclusion logic", "Review required", AMBER),
        ("Transformation versions", "Documented", TEAL),
        ("Missing-data mechanism", "Unresolved", AMBER),
        ("Outcome availability", "Documented", TEAL),
    ]
    for idx, (item, state, color) in enumerate(checks):
        row_y = y - 28 - idx * 42
        c.setFillColor(WHITE)
        c.setStrokeColor(BORDER)
        c.rect(48, row_y - 21, 516, 34, stroke=1, fill=1)
        c.setFillColor(color)
        c.circle(64, row_y - 4, 3.5, stroke=0, fill=1)
        c.setFillColor(INK)
        c.setFont("Helvetica", 9)
        c.drawString(78, row_y - 8, item)
        c.setFillColor(SLATE)
        c.setFont("Courier", 7)
        c.drawRightString(548, row_y - 8, state.upper())
    y -= 258
    draw_card(c, 48, y - 112, 250, 112, "OPEN QUESTION", "Selection pathway", "Confirm whether exclusions were determined before outcomes and model performance were reviewed.", AMBER)
    draw_card(c, 314, y - 112, 250, 112, "EVIDENCE REQUIREMENT", "Immutable trace", "Retain versioned code, data dictionaries, transformation logs, and analytical manifests.", TEAL)
    c.showPage()


def page_integrity(c: canvas.Canvas) -> None:
    draw_header(c, 4, "Analytical Integrity")
    y = draw_title(c, "03 / ANALYTICAL REVIEW", "Performance is not credibility.",
                   "A defensible model requires separation between training and evaluation, transparent uncertainty, stability analysis, and controls against optimistic bias.", PAGE_H - 105)
    y -= 26
    draw_label(c, "NESTED EVALUATION PATH", 48, y)
    outer_x, outer_y, outer_w, outer_h = 48, y - 188, 330, 164
    c.setFillColor(PAPER)
    c.setStrokeColor(BORDER)
    c.rect(outer_x, outer_y, outer_w, outer_h, stroke=1, fill=1)
    draw_label(c, "OUTER TEST FOLD", outer_x + 14, outer_y + outer_h - 20, BLUE)
    for idx in range(4):
        x = outer_x + 18 + idx * 74
        c.setFillColor(WHITE)
        c.setStrokeColor(BORDER)
        c.rect(x, outer_y + 42, 60, 72, stroke=1, fill=1)
        c.setFillColor(TEAL if idx < 3 else BLUE)
        c.rect(x, outer_y + 42, 60, 8, stroke=0, fill=1)
        c.setFillColor(SLATE)
        c.setFont("Courier", 6)
        c.drawCentredString(x + 30, outer_y + 78, "TRAIN" if idx < 3 else "TEST")
    c.setFillColor(SLATE)
    c.setFont("Courier", 6.5)
    c.drawString(outer_x + 18, outer_y + 18, "FEATURE SELECTION AND TUNING REMAIN INSIDE TRAINING")
    draw_card(c, 396, y - 188, 168, 164, "PRIMARY RISK", "Leakage", "Any outcome-informed preprocessing performed before the outer split can invalidate the reported estimate.", AMBER)
    y -= 230
    draw_label(c, "STABILITY REVIEW / ILLUSTRATIVE", 48, y)
    bars = [("Feature set", .58, AMBER), ("Calibration", .72, BLUE), ("Discrimination", .82, TEAL), ("Subgroups", .46, AMBER)]
    for idx, (label, value, color) in enumerate(bars):
        row_y = y - 30 - idx * 43
        c.setFillColor(SLATE)
        c.setFont("Courier", 7)
        c.drawString(48, row_y, label.upper())
        c.setFillColor(BORDER)
        c.rect(150, row_y - 2, 300, 8, stroke=0, fill=1)
        c.setFillColor(color)
        c.rect(150, row_y - 2, 300 * value, 8, stroke=0, fill=1)
        c.setFillColor(SLATE)
        c.drawRightString(564, row_y, "REVIEW SIGNAL")
    c.showPage()


def page_validation(c: canvas.Canvas) -> None:
    draw_header(c, 5, "Validation and Transportability")
    y = draw_title(c, "04 / VALIDATION", "The claim can travel only as far as the evidence.",
                   "External validation tests more than performance. It tests calibration, decision thresholds, subgroup behavior, data-generating context, and scientific transportability.", PAGE_H - 105)
    y -= 25
    draw_label(c, "VALIDATION LADDER", 48, y)
    ladder = [
        ("Internal repeatability", "Observed", TEAL),
        ("Temporal validation", "Planned", BLUE),
        ("Independent cohort", "Required", AMBER),
        ("Decision utility", "Not established", AMBER),
    ]
    for idx, (label, state, color) in enumerate(ladder):
        row_y = y - 36 - idx * 62
        c.setFillColor(color)
        c.circle(64, row_y, 7, stroke=0, fill=1)
        if idx < len(ladder) - 1:
            c.setStrokeColor(BORDER)
            c.line(64, row_y - 7, 64, row_y - 55)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(88, row_y + 4, label)
        c.setFillColor(SLATE)
        c.setFont("Courier", 7)
        c.drawString(88, row_y - 12, state.upper())
    draw_card(c, 340, y - 240, 224, 218, "TRANSPORTABILITY", "Context map", "Population, setting, assay platform, prevalence, treatment pathway, and decision threshold must be compared before extending the claim.", BLUE)
    y -= 286
    draw_label(c, "CLAIM BOUNDARIES", 48, y)
    boundaries = [
        "A repeated signal is not automatically clinically useful.",
        "External discrimination does not guarantee calibration.",
        "Population shift can invalidate a fixed threshold.",
        "Biological plausibility does not replace independent validation.",
    ]
    for idx, text in enumerate(boundaries, start=1):
        row_y = y - 26 - (idx - 1) * 38
        c.setFillColor(TEAL)
        c.setFont("Courier-Bold", 7)
        c.drawString(48, row_y, f"B{idx:02d}")
        c.setFillColor(INK)
        c.setFont("Helvetica", 8.8)
        c.drawString(86, row_y, text)
        c.setStrokeColor(BORDER)
        c.line(48, row_y - 12, 564, row_y - 12)
    c.showPage()


def page_conclusion(c: canvas.Canvas) -> None:
    draw_header(c, 6, "Decision Boundary")
    y = draw_title(c, "05 / CONCLUSION", "A defensible conclusion includes its limits.",
                   "The report closes by separating what the reviewed evidence supports from what remains uncertain, and by specifying the work required before a stronger decision claim is justified.", PAGE_H - 105)
    y -= 24
    c.setFillColor(NAVY)
    c.rect(48, y - 150, 516, 150, stroke=0, fill=1)
    draw_label(c, "ILLUSTRATIVE EVIDENCE STATEMENT", 66, y - 26)
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 16)
    statement = "The model signal is analytically repeatable within the reviewed source context. Independent validation and decision-utility evidence are required before broader use."
    line_y = y - 56
    for line in fit_lines(statement, "Helvetica", 16, 462):
        c.drawString(66, line_y, line)
        line_y -= 22
    y -= 190
    draw_label(c, "DELIVERABLE CONTENTS", 48, y)
    contents = [
        "Claim and decision context",
        "Data provenance and analytical trace",
        "Integrity and reproducibility review",
        "External validation assessment",
        "Uncertainty and contradiction log",
        "Decision boundary and next actions",
    ]
    for idx, item in enumerate(contents):
        col = idx % 2
        row = idx // 2
        x = 48 + col * 258
        row_y = y - 30 - row * 48
        c.setFillColor(WHITE)
        c.setStrokeColor(BORDER)
        c.rect(x, row_y - 24, 246, 36, stroke=1, fill=1)
        c.setFillColor(TEAL)
        c.circle(x + 16, row_y - 6, 3.5, stroke=0, fill=1)
        c.setFillColor(INK)
        c.setFont("Helvetica", 8.5)
        c.drawString(x + 30, row_y - 9, item)
    y -= 180
    draw_label(c, "IMPORTANT", 48, y, AMBER)
    draw_wrapped(c, "This document is a fictional design sample. It contains no client, patient, institutional, or unpublished research data. It is not medical advice, regulatory certification, or a substitute for project-specific scientific review.", 48, y - 24, 516, size=8.5, leading=13, color=SLATE)
    c.showPage()


def build_pdf(output_path: str) -> None:
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    c = canvas.Canvas(output_path, pagesize=letter, pageCompression=1)
    c.setTitle("Traustia Sample Evidence Report")
    c.setAuthor("Traustia")
    c.setSubject("Illustrative biomedical evidence-validation report")
    draw_cover(c)
    page_executive(c)
    page_provenance(c)
    page_integrity(c)
    page_validation(c)
    page_conclusion(c)
    c.save()


if __name__ == "__main__":
    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    canonical = os.path.join(project_root, "output", "pdf", "traustia-sample-evidence-report.pdf")
    public_copy = os.path.join(project_root, "public", "sample-traustia-evidence-report.pdf")
    build_pdf(canonical)
    shutil.copyfile(canonical, public_copy)
    print(canonical)
    print(public_copy)
