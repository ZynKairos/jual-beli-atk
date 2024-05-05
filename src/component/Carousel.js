import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/3/28/b472a073-f4f7-45bc-aee0-6573d973b2b3.jpg.webp?ect=4g',
    key: 1,
  },
  {
    src: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/4/22/bc599c79-20af-4feb-90f3-7bbe84afd59b.jpg.webp?ect=4g',
    key: 2,
  },
  {
    src: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/4/18/a82eb438-d9c9-4399-818a-e5d77cf7884e.jpg.webp?ect=4g',
    key: 3,
  },
];

function CarouselComponent(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel      
      style={{ padding:'5%' }}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselComponent;