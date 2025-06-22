
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const Communion = () => {
  const products = [
    {
      name: "Sacred First Steps Set",
      description: "Beautiful keepsake collection for First Communion, featuring a prayer book cover, rosary pouch, and memory box with personalized touches.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      name: "Blessed Chalice Display",
      description: "Elegant wooden display stand with engraved details, perfect for showcasing communion keepsakes and creating a sacred memory corner.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      name: "Faith Journey Scrapbook",
      description: "Handcrafted memory book with spaces for photos, prayers, and reflections from this holy milestone in your child's faith journey.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    }
  ];

  return (
    <OccasionTemplate
      title="First Communion Gifts"
      description="Celebrate this sacred milestone with meaningful keepsakes that honor your child's first steps in their faith journey. Each piece is crafted to preserve the holiness of this special day."
      products={products}
    />
  );
};

export default Communion;
