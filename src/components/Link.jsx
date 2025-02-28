const Link = ({ to, children, scrollTo }) => {
  const handleClick = () => {
    if (scrollTo) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a href={to} onClick={handleClick} className="link">
      {children}
    </a>
  );
};

export default Link;
