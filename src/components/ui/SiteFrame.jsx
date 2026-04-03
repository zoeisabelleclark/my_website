import React from "react";
import { Container } from "./Container";

export function SiteFrame({ children }) {
    return (
        <div className="min-h-screen bg-bg text-text antialiased">
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.7) 0.5px, transparent 0.5px)",
                    backgroundSize: "8px 8px",
                }}
            />
            <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
                <Container className="flex h-14 items-center justify-between">
                    <a href="/" className="font-display text-sm tracking-label text-text">
                        ZOE ISABELLE CLARK
                    </a>
                    <nav className="flex gap-4 text-sm text-text-muted">
                        <a href="/waiut" className="hover:text-text">WAIUT</a>
                        <a href="/experience" className="hover:text-text">Experience</a>
                        <a href="/contact" className="hover:text-text">Contact</a>
                    </nav>
                </Container>
            </header>

            <main>{children}</main>
        </div>
    );
}