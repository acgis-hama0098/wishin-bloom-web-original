
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const Baptism = () => {
  const products = [
    {
      name: "Sacred Blessing Keepsake Box",
      description: "A beautifully handcrafted memory box to treasure baptism mementos, featuring delicate engravings and soft ivory finish.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      name: "Guardian Angel Mobile",
      description: "Gentle, handmade mobile featuring guardian angels and soft pastels, perfect for the nursery.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      name: "Blessed First Steps Frame",
      description: "Custom photo frame designed to hold baptism photos, with personalized nameplate and blessing inscription.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    }
  ];

  return (
    <OccasionTemplate
      title="Baptism Gifts"
      description="Celebrate this sacred milestone with thoughtfully crafted keepsakes that honor faith and new beginnings. Each piece is designed to become a cherished reminder of this blessed day."
      products={products}
    />
  );
};

export default Baptism;
