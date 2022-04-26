import React, { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import "./Card.css";

const Card = props => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? <ExpandedCard /> : <CompactCard param={props} />}
    </AnimateSharedLayout>
  );
};

// CompactCard
function CompactCard({param})

export default Card;
