const Card: React.FC = () => {
  return (
    <div>
      <div> name: iPhone 11,</div>
      <div> price: 699 </div>
      <div>
        description: Experience power and elegance with the iPhone 11: capture
        stunning moments with its dual-camera system, enjoy exceptional
        performance, and immerse yourself in a brilliant Liquid Retina display.
        Discover a world of possibilities in the palm of your hand!
      </div>
      <img
        src="https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png"
        alt="name"
      />
      <div> categoryId: 1</div>
      <div>stock: 10</div>
    </div>
  );
};

export default Card;
