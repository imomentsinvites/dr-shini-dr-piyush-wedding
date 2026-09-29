import React, { useState } from "react";
import {
  OrnateDivider,
  MapPinIcon,
  ExternalLinkIcon,
  NavigationIcon,
  BusIcon,
  PlaneIcon,
  TrainIcon,
} from "./common/Icons";
import { WEDDING_DATA } from "../constants/weddingData";

export function VenueSection() {
  const venues = WEDDING_DATA.venues || [];
  const isMultiVenue = venues.length > 1;
  const [activeTab, setActiveTab] = useState("all");
  const [copied, setCopied] = useState(false);

  // Single Venue View (Clean, focused, no route connectors)
  if (!isMultiVenue) {
    const venue = venues[0] || {
      name: WEDDING_DATA.venueName || "Raj Vilas Palace",
      subtitle: "Heritage Palace & Resort",
      address: WEDDING_DATA.venueAddress || "Raj Vilas Palace, Orchha, Madhya Pradesh",
      dates: "3rd – 5th December 2026",
      keyHighlights: "Mehendi · Royal Sangeet · Haldi · Wedding Ceremony · Vidai",
      googleMapsEmbed:
        "https://maps.google.com/maps?q=Raj+Vilas+Orchha+Madhya+Pradesh&t=m&z=14&output=embed",
      googleMapsUrl:
        WEDDING_DATA.googleMapsUrl || "https://maps.app.goo.gl/SjAinaMEUt6Tcjgt7?g_st=ic",
    };

    const handleCopyAddress = () => {
      if (venue.address && navigator.clipboard) {
        navigator.clipboard.writeText(venue.address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    };

    return (
      <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden text-center">
        <div className="max-w-xl mx-auto">
          <MapPinIcon className="w-7 h-7 mx-auto text-primary mb-3" />
          <h2 className="font-calligraphy text-4xl md:text-5xl text-primary mb-2">
            The Wedding Venue
          </h2>
          <OrnateDivider />

          <p className="text-muted-foreground font-display text-xs sm:text-sm max-w-md mx-auto -mt-2 mb-8">
            Join us at the majestic {venue.name} in Orchha, MP as we celebrate this joyous occasion with family and friends.
          </p>

          {/* Single Venue Card */}
          <div className="rounded-3xl border border-primary/20 bg-card p-5 sm:p-7 shadow-elegant text-left relative overflow-hidden">
            {/* Top Badge Row */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-8 h-8 rounded-full font-display font-bold text-sm flex items-center justify-center shadow-gold shrink-0"
                  style={{ backgroundColor: "hsl(var(--primary))", color: "#ffffff" }}
                >
                  <MapPinIcon className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-[11px] font-display font-bold uppercase tracking-wider text-primary block">
                    {venue.badge || "Destination Wedding Venue"}
                  </span>
                  <span className="text-xs text-muted-foreground font-display">
                    {venue.subtitle || "Royal Palace & Resort"}
                  </span>
                </div>
              </div>

              {venue.dates && (
                <span className="text-[11px] font-display font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                  {venue.dates}
                </span>
              )}
            </div>

            {/* Venue Details */}
            <h3 className="font-display text-2xl font-bold text-foreground">
              {venue.name}
            </h3>
            {venue.subtitle && (
              <p className="text-xs font-display font-medium text-primary mt-0.5">
                {venue.subtitle}
              </p>
            )}
            {venue.address && (
              <p className="text-sm font-display text-muted-foreground mt-1 mb-3">
                {venue.address}
              </p>
            )}

            {/* Highlights pill */}
            {venue.keyHighlights && (
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-[13px] font-display text-amber-950 mb-4 leading-relaxed">
                <p className="font-bold text-amber-900 mb-1.5 tracking-wide">
                  Wedding Celebrations &amp; Stay:
                </p>
                <p className="text-amber-950/90 leading-relaxed font-medium">
                  {venue.keyHighlights}
                </p>
              </div>
            )}

            {/* Travel & Connectivity Note for Viewers */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-primary/5 border border-primary/20 mb-4 text-xs font-display">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <NavigationIcon className="w-3 h-3" />
                </span>
                <span className="font-bold text-primary text-[11px] uppercase tracking-wider">
                  Travel &amp; Connectivity Note
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-foreground/85">
                {/* Nearest Airport */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0">
                    <PlaneIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block tracking-wider">
                      Nearest Airport
                    </span>
                    <span className="font-bold text-foreground text-xs block">
                      {venue.airport || WEDDING_DATA.travelInfo?.airport || "Gwalior Airport (GWL)"}
                    </span>
                  </div>
                </div>

                {/* Nearest Railway Station */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 ">
                    <TrainIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block tracking-wider">
                      Nearest Railway Station
                    </span>
                    <span className="font-bold text-foreground text-xs block">
                      {venue.railwayStation || WEDDING_DATA.travelInfo?.railwayStation || "Orchha Railway Station"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            {venue.googleMapsEmbed && (
              <div className="rounded-2xl overflow-hidden shadow-sm border border-border mb-4">
                <iframe
                  src={venue.googleMapsEmbed}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${venue.name} Map`}
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              {venue.googleMapsUrl && (
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-xl font-display text-xs font-semibold tracking-wider uppercase shadow-gold hover:opacity-95 transition-all transform active:scale-95 cursor-pointer"
                  style={{ backgroundColor: "hsl(var(--primary))", color: "#ffffff" }}
                >
                  <NavigationIcon className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-display text-xs font-semibold tracking-wider uppercase border border-primary/30 text-primary hover:bg-primary/5 transition-all transform active:scale-95 cursor-pointer"
              >
                <span>{copied ? "Address Copied! ✓" : "Copy Address"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Multi-venue view (Safely guarded against undefined properties)
  const baratVenue = venues[0] || {};
  const destinationVenue = venues[1] || venues[0] || {};

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden text-center">
      <div className="max-w-xl mx-auto">
        <MapPinIcon className="w-7 h-7 mx-auto text-primary mb-3" />
        <h2 className="font-calligraphy text-4xl md:text-5xl text-primary mb-2">
          Wedding Venues &amp; Journey
        </h2>
        <OrnateDivider />

        <p className="text-muted-foreground font-display text-xs sm:text-sm max-w-md mx-auto -mt-2 mb-6">
          The celebrations begin with the Baraat in Narnaul, followed by the grand destination wedding in Orchha, MP.
        </p>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-center gap-1.5 p-1 bg-primary/10 rounded-full max-w-xs mx-auto mb-8 text-xs font-display font-medium">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${activeTab === "all"
              ? "bg-primary text-primary-foreground shadow-sm font-semibold"
              : "text-foreground/75 hover:text-foreground"
              }`}
          >
            Full Route (1 &amp; 2)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("barat")}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${activeTab === "barat"
              ? "bg-primary text-primary-foreground shadow-sm font-semibold"
              : "text-foreground/75 hover:text-foreground"
              }`}
          >
            1. Baraat
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("destination")}
            className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${activeTab === "destination"
              ? "bg-primary text-primary-foreground shadow-sm font-semibold"
              : "text-foreground/75 hover:text-foreground"
              }`}
          >
            2. Destination
          </button>
        </div>

        {/* ----------------- LOCATION 1: BARAAT VENUE ----------------- */}
        {(activeTab === "all" || activeTab === "barat") && baratVenue.name && (
          <div className="rounded-3xl border border-primary/20 bg-card p-5 sm:p-7 shadow-elegant text-left relative overflow-hidden mb-6">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center shadow-gold shrink-0">
                  1
                </span>
                <div>
                  <span className="text-[11px] font-display font-bold uppercase tracking-wider text-primary block">
                    {baratVenue.badge || "Baraat & Pre-Wedding"}
                  </span>
                  <span className="text-xs text-muted-foreground font-display">
                    {baratVenue.subtitle || "Starting Point"}
                  </span>
                </div>
              </div>

              {baratVenue.dates && (
                <span className="text-[11px] font-display font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                  {baratVenue.dates}
                </span>
              )}
            </div>

            <h3 className="font-display text-2xl font-bold text-foreground">
              {baratVenue.name}
            </h3>
            {baratVenue.subtitle && (
              <p className="text-xs font-display font-medium text-primary mt-0.5">
                {baratVenue.subtitle}
              </p>
            )}
            {baratVenue.address && (
              <p className="text-sm font-display text-muted-foreground mt-1 mb-3">
                {baratVenue.address}
              </p>
            )}

            {baratVenue.keyHighlights && (
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-[13px] font-display text-amber-950 mb-4 leading-relaxed">
                <p className="font-bold text-amber-900 mb-1.5 tracking-wide">
                  Key Ceremonies:
                </p>
                <p className="text-amber-950/90 leading-relaxed font-medium">
                  {baratVenue.keyHighlights}
                </p>
              </div>
            )}

            {baratVenue.googleMapsEmbed && (
              <div className="rounded-2xl overflow-hidden shadow-sm border border-border mb-4">
                <iframe
                  src={baratVenue.googleMapsEmbed}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${baratVenue.name} Map`}
                />
              </div>
            )}

            {baratVenue.googleMapsUrl && (
              <a
                href={baratVenue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-display text-xs font-semibold tracking-wider uppercase shadow-gold hover:opacity-95 transition-all transform active:scale-95 cursor-pointer"
                style={{ backgroundColor: "hsl(var(--primary))", color: "#ffffff" }}
              >
                <NavigationIcon className="w-4 h-4" />
                <span>Get Directions to {baratVenue.name}</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}

        {/* ----------------- CONNECTING ROYAL JOURNEY PATH SVG ----------------- */}
        {activeTab === "all" && (
          <div className="relative py-2 my-2 flex flex-col items-center justify-center">
            <svg
              width="60"
              height="36"
              viewBox="0 0 60 36"
              fill="none"
              className="text-primary/40"
            >
              <path
                d="M30 0 V36"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
              <circle cx="30" cy="18" r="3" fill="hsl(var(--primary))" />
            </svg>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#fffdfa] via-[#fef7ec] to-[#fffdfa] border-2 border-[#c99738]/40 shadow-gold text-center max-w-sm w-full relative">
              <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#c99738]/20 text-[#8b6514] text-xs font-display font-bold tracking-wider uppercase mb-1.5">
                <BusIcon className="w-3.5 h-3.5" />
                <span>Baraat Journey • Step 1 ➔ Step 2</span>
              </div>

              <h4 className="font-display font-bold text-base text-foreground leading-snug">
                Narnaul (Haryana) ➔ Orchha (MP)
              </h4>

              <p className="text-xs font-display font-semibold text-primary mt-1">
                Departure: 2nd December at 11:00 PM by Bus
              </p>
              <p className="text-[11px] text-muted-foreground font-body mt-0.5">
                Overnight travel together to Raj Vilas Palace for Destination Wedding
              </p>
            </div>

            <svg
              width="60"
              height="40"
              viewBox="0 0 60 40"
              fill="none"
              className="text-primary/40"
            >
              <path
                d="M30 0 V30"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
              <path
                d="M24 24 L30 32 L36 24"
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}

        {/* ----------------- LOCATION 2: DESTINATION WEDDING VENUE ----------------- */}
        {(activeTab === "all" || activeTab === "destination") && destinationVenue.name && (
          <div className="rounded-3xl border border-primary/20 bg-card p-5 sm:p-7 shadow-elegant text-left relative overflow-hidden">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-8 h-8 rounded-full font-display font-bold text-sm flex items-center justify-center shadow-gold shrink-0"
                  style={{ backgroundColor: "hsl(var(--primary))", color: "#ffffff" }}
                >
                  2
                </span>
                <div>
                  <span className="text-[11px] font-display font-bold uppercase tracking-wider text-primary block">
                    {destinationVenue.badge || "Destination Wedding"}
                  </span>
                  <span className="text-xs text-muted-foreground font-display">
                    {destinationVenue.subtitle || "Royal Palace & Stay"}
                  </span>
                </div>
              </div>

              {destinationVenue.dates && (
                <span className="text-[11px] font-display font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                  {destinationVenue.dates}
                </span>
              )}
            </div>

            <h3 className="font-display text-2xl font-bold text-foreground">
              {destinationVenue.name}
            </h3>
            {destinationVenue.subtitle && (
              <p className="text-xs font-display font-medium text-primary mt-0.5">
                {destinationVenue.subtitle}
              </p>
            )}
            {destinationVenue.address && (
              <p className="text-sm font-display text-muted-foreground mt-1 mb-3">
                {destinationVenue.address}
              </p>
            )}

            {destinationVenue.keyHighlights && (
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-[13px] font-display text-amber-950 mb-4 leading-relaxed">
                <p className="font-bold text-amber-900 mb-1.5 tracking-wide">
                  Destination Festivities:
                </p>
                <p className="text-amber-950/90 leading-relaxed font-medium">
                  {destinationVenue.keyHighlights}
                </p>
              </div>
            )}

            {/* Travel & Connectivity Note for Viewers */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-primary/5 border border-primary/20 mb-4 text-xs font-display">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <NavigationIcon className="w-3 h-3" />
                </span>
                <span className="font-bold text-primary text-[11px] uppercase tracking-wider">
                  Travel &amp; Connectivity Note
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-foreground/85">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0">
                    <PlaneIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block tracking-wider">
                      Nearest Airport
                    </span>
                    <span className="font-bold text-foreground text-xs block">
                      {destinationVenue.airport || WEDDING_DATA.travelInfo?.airport || "Gwalior Airport (GWL)"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <TrainIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block tracking-wider">
                      Nearest Railway Station
                    </span>
                    <span className="font-bold text-foreground text-xs block">
                      {destinationVenue.railwayStation || WEDDING_DATA.travelInfo?.railwayStation || "Orchha Railway Station"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {destinationVenue.googleMapsEmbed && (
              <div className="rounded-2xl overflow-hidden shadow-sm border border-border mb-4">
                <iframe
                  src={destinationVenue.googleMapsEmbed}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${destinationVenue.name} Map`}
                />
              </div>
            )}

            {destinationVenue.googleMapsUrl && (
              <a
                href={destinationVenue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-display text-xs font-semibold tracking-wider uppercase shadow-gold hover:opacity-95 transition-all transform active:scale-95 cursor-pointer"
                style={{ backgroundColor: "hsl(var(--primary))", color: "#ffffff" }}
              >
                <NavigationIcon className="w-4 h-4" />
                <span>Get Directions to {destinationVenue.name}</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
