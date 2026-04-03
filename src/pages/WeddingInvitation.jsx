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

const WEDDING_ADDRESS =
  "Ctra. Portal-las Yeguas, 11\n11510 Puerto Real, Cádiz";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Finca+Tipuana+Ctra.+Portal-las+Yeguas+11+11510+Puerto+Real+C%C3%A1diz";

const IMAGES = {
  couplePhoto: "/couple-portrait.jpg",
  worldMap: "/1.png",
  stamp: "/11a.png",
  travelStamps: "/10.png",
  globe: "/12.png",
};

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden font-serif">
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
            <PassportSection
              worldMapUrl={IMAGES.worldMap}
              stampUrl={IMAGES.stamp}
            />

            <CouplePhotoSection
              coupleUrl={IMAGES.couplePhoto}
              stampsUrl={IMAGES.travelStamps}
            />

            <LocationSection
              title="CEREMONIA"
              venueName="FINCA TIPUANA"
              address={WEDDING_ADDRESS}
              time="12:00 h"
              mapUrl={MAPS_URL}
              worldMapUrl={IMAGES.worldMap}
            />

            <PassportCardSection
              coupleUrl={IMAGES.couplePhoto}
              stampsUrl={IMAGES.travelStamps}
            />

            <LocationSection
              title="CELEBRACIÓN"
              venueName="FINCA TIPUANA"
              address={WEDDING_ADDRESS}
              time="Después de la ceremonia"
              mapUrl={MAPS_URL}
              worldMapUrl={IMAGES.worldMap}
            />

            <ItinerarySection stampsUrl={IMAGES.travelStamps} />

            <PlaylistSection worldMapUrl={IMAGES.worldMap} />

            <RSVPSection globeUrl={IMAGES.globe} stampsUrl={IMAGES.travelStamps} />

            <PhotosSection worldMapUrl={IMAGES.worldMap} />

            <GiftSection
              stampsUrl={IMAGES.travelStamps}
              globeUrl={IMAGES.globe}
            />

            <CountdownSection coupleUrl={IMAGES.couplePhoto} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
