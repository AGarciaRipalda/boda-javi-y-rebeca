import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CoverSection from "../components/wedding/CoverSection";
import PassportSection from "../components/wedding/PassportSection";
import CouplePhotoSection from "../components/wedding/CouplePhotoSection";
import LocationSection from "../components/wedding/LocationSection";
import PassportCardSection from "../components/wedding/PassportCardSection";
import ItinerarySection from "../components/wedding/ItinerarySection";
import PlaylistSection from "../components/wedding/PlaylistSection";
import RSVPSection from "../components/wedding/RSVPSection";
import PhotosSection from "../components/wedding/PhotosSection";
import GiftSection from "../components/wedding/GiftSection";
import CountdownSection from "../components/wedding/CountdownSection";
import MusicPlayer from "../components/wedding/MusicPlayer";

const WEDDING_ADDRESS =
  "Ctra. Portal-las Yeguas, 11\n11510 Puerto Real, Cádiz";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Finca+Tipuana+Ctra.+Portal-las+Yeguas+11+11510+Puerto+Real+C%C3%A1diz";

const IMAGES = {
  couplePhoto: "/couple-portrait.jpg",
  coupleWalk: "/couple-walk-clean.jpg",
};

// Spotify: embedUrl → https://open.spotify.com/embed/playlist/PLAYLIST_ID?utm_source=generator
//          playlistUrl → https://open.spotify.com/playlist/PLAYLIST_ID
const PLAYLIST = {
  embedUrl: "https://open.spotify.com/embed/playlist/1pEdwAwm6sx6rHb2ZZpo81?utm_source=generator",
  playlistUrl: "https://open.spotify.com/playlist/1pEdwAwm6sx6rHb2ZZpo81?si=NfqEB4J-RWCMBCMk80onCA&pi=LoyKVy7QQZ219&pt=a692039f904e808b1cc55cddd431b759",
};

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden font-serif">
      <MusicPlayer playing={isOpen} />
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="cover"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <CoverSection onOpen={() => setIsOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <PassportSection />
            <CouplePhotoSection coupleUrl={IMAGES.couplePhoto} />
            <LocationSection
              title="CEREMONIA"
              venueName="FINCA TIPUANA"
              address={WEDDING_ADDRESS}
              time="12:00 h"
              mapUrl={MAPS_URL}
              showMapBehindTitle
            />
            <PassportCardSection />
            <LocationSection
              title="DESTINO"
              venueName="FINCA TIPUANA"
              address={WEDDING_ADDRESS}
              time="Tras la ceremonia"
              mapUrl={MAPS_URL}
              showMapBehindTitle
            />
            <ItinerarySection />
            <PlaylistSection embedUrl={PLAYLIST.embedUrl} playlistUrl={PLAYLIST.playlistUrl} />
            <RSVPSection />
            <PhotosSection photosUrl="https://drive.google.com/drive/folders/1QIyk5itDDONS3JF4SwxpcQWaeDLdoDYP?usp=sharing" />
            <GiftSection />
            <CountdownSection coupleUrl={IMAGES.coupleWalk} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
